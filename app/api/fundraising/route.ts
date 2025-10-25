import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

interface FundraisingData {
  raisedAmount: string;
  lastUpdated: string;
  error?: string;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const isCron = url.searchParams.get('cron') === 'true';
  
  try {
    const browser = await puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
    
    const page = await browser.newPage();
    
    // Set user agent to avoid being blocked
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    
    // Navigate to the Race Roster event page
    await page.goto('https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/fundraising-organization/71286#event-description', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    // Wait for the page to load completely
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Extract the raised amount using the provided XPath
    const raisedAmount = await page.evaluate(() => {
      const xpath = '//*[@id="sidebar"]/div[1]/div/div[2]/div[1]/p';
      const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
      const element = result.singleNodeValue;
      
      if (element) {
        return element.textContent?.trim() || '';
      }
      
      // Fallback: try to find the raised amount in other common locations
      const fallbackSelectors = [
        '[data-testid="raised-amount"]',
        '.raised-amount',
        'p:contains("Raised:")',
        'div:contains("Raised:")'
      ];
      
      for (const selector of fallbackSelectors) {
        const element = document.querySelector(selector);
        if (element && element.textContent?.includes('Raised:')) {
          return element.textContent.trim();
        }
      }
      
      return null;
    });
    
    await browser.close();
    
    if (!raisedAmount) {
      throw new Error('Could not find raised amount on the page');
    }
    
    // Extract just the dollar amount from the text
    const amountMatch = raisedAmount.match(/\$[\d,]+\.?\d*/);
    const cleanAmount = amountMatch ? amountMatch[0] : raisedAmount;
    
    const data: FundraisingData = {
      raisedAmount: cleanAmount,
      lastUpdated: new Date().toISOString()
    };
    
    // Log for cron jobs
    if (isCron) {
      console.log(`[CRON] Fundraising data updated: ${cleanAmount} at ${data.lastUpdated}`);
    }
    
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': isCron 
          ? 'public, s-maxage=21600, stale-while-revalidate=3600' // Cache for 6 hours
          : 'no-cache, no-store, must-revalidate' // No cache for manual requests
      }
    });
    
  } catch (error) {
    console.error('Error scraping fundraising data:', error);
    
    const errorData: FundraisingData = {
      raisedAmount: '$9,473+', // Fallback to current hardcoded value
      lastUpdated: new Date().toISOString(),
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
    
    return NextResponse.json(errorData, { status: 500 });
  }
}
