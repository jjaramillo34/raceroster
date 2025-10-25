import { Calendar, MapPin, Clock, Heart, Users, DollarSign, Share2, Trophy, Activity } from 'lucide-react';
import Image from 'next/image';
import SponsorShowcase from './components/SponsorShowcase';
import Navigation from './components/Navigation';
import StoryCard from './components/StoryCard';
import DonateButton from './components/DonateButton';
import FundraisingAmount from './components/FundraisingAmount';
import FundraisingProgress from './components/FundraisingProgress';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-100 via-rose-50 to-pink-100 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Top Section - Light Pink Background */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">5th Annual</p>
            
            {/* Colorful Title */}
            <div className="mb-6">
              <p className="text-3xl md:text-5xl font-bold mb-2">
                <span className="text-blue-600">Miles for</span>{' '}
                <span className="text-emerald-600">MBC and</span>{' '}
                <span className="text-pink-600">Kelly Marie</span>
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-6">Presents The</p>
            
            {/* LightUpMBC with colors */}
            <h1 className="text-5xl md:text-8xl font-bold mb-8">
              <span className="text-blue-600">#LightUp</span>
              <span className="text-emerald-600">MBC</span>
            </h1>
            
            {/* Howard Beach Color Fun Run */}
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Howard Beach<br />
              <span className="text-gray-800">Color Fun Run</span>
            </h2>
            
            {/* METAvivor */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-2">to benefit</p>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-blue-600">META</span>
                <span className="text-pink-600">vivor</span>
              </p>
            </div>
            
            {/* Event Details */}
            <div className="space-y-2 text-lg md:text-xl text-gray-700 mb-8">
              <p className="font-semibold">October 25, 2025</p>
              <p>Frank M. Charles Memorial Park</p>
              <p>Howard Beach, Queens, NY</p>
            </div>
          </div>
          
          {/* Bottom Section - White Background with Shadow */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6">
              <div className="text-2xl md:text-3xl font-bold text-emerald-600">
                Meet at: 98 St. & 165 Ave.
              </div>
              
              <div className="flex flex-col md:flex-row justify-center gap-8">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                  Check-In: 2pm
                </div>
                <div className="text-xl md:text-2xl font-bold text-pink-600">
                  Race Kick Off: 3pm
                </div>
              </div>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <DonateButton size="large" variant="primary" />
              <a
                href="https://raceroster.com/events/2025/101366/miles-for-mbc-and-kelly-marie/register?ref=event-right-sidebar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Users className="w-5 h-5" />
                <span>Register to Run</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <Heart className="w-16 h-16 text-pink-500" />
            </div>
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-6">
              This event shines a light on the importance of critical funding for <span className="font-bold text-teal-600">Metastatic Breast Cancer research</span>, also known as Stage 4, where the cancer has spread beyond the breast to other parts of the body.
            </p>
            <p className="text-3xl font-bold text-center text-pink-600 mb-6">
              There is NO CURE.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Join us on October 25th for an unforgettable event the whole family will enjoy! The festivities will feature a <span className="font-semibold text-emerald-600">3-mile color run/walk</span> (no experience necessary). The race will start with a color powder toss, and volunteers will spray runners at three color stations throughout the race. We will have many amazing raffle items! Winners will be announced after the walk. We hope to see you at this meaningful event to raise funds to find a cure for MBC and bring our community together! <span className="font-bold text-teal-600">100% of net proceeds fund MBC research through METAvivor.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Fundraising Progress Section */}
      <FundraisingProgress />

      {/* Get Involved Section */}
      <section id="register" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            There are several ways to get involved:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-teal-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Register to Participate</h3>
              <p className="text-gray-700 text-center">
                Participate individually, create a team, or join an existing team
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-emerald-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <Share2 className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Help Us Fundraise</h3>
              <p className="text-gray-700 text-center">
                Share our unique fundraising page created by Race Roster with family and friends
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Make a Donation</h3>
              <p className="text-gray-700 text-center mb-4">
                Unable to participate? Support MBC research with a donation
              </p>
              <div className="flex justify-center mt-4">
                <DonateButton size="medium" variant="primary" />
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex justify-center mb-4">
                <DollarSign className="w-12 h-12 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Become a Sponsor</h3>
              <p className="text-gray-700 text-center">
                Support the event as a sponsor and help fund critical MBC research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <Heart className="w-16 h-16 text-pink-500 fill-current" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
              Stories of Local Families
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700">
              Affected by Metastatic Breast Cancer
            </p>
            <div className="mt-6 w-32 h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          {/* Kelly's Story */}
          <StoryCard
            name="Kelly Adams Mahindra"
            title="State Captain, NY"
            image="/images/Kelly Adams Mahindra.png"
            accentColor="teal"
            memorableQuote={{
              text: "We are so much more than cancer, and have much more to offer, but cancer restricts us.",
            }}
            story="I am a 45-year-old mother, wife, daughter, sister, friend, pediatric pulmonologist and Stage 4 BC thriver. I was nursing my daughter 5 years ago and felt a lump that seemed like a clogged duct. I had persistent back pain and after a thorough work up was found to have breast cancer in multiple bones and my liver. I was treated with chemotherapy, but my cancer progressed to my lungs and brain. I participated in a clinical trial which helped for the past year but just started a new medication because my cancer continues to grow. I pray it works to kill the cancer cells in my body so I can see my babies grow up and graduate college. Please consider donating so we can find a cure and turn cancer into a chronic illness rather than a terminal illness."
          />

          {/* Adina's Story */}
          <StoryCard
            name="Adina Perullo"
            title=""
            image="/images/Adina Perullo.jpg"
            accentColor="emerald"
            isMemorial={true}
            memorableQuote={{
              text: "We are the storm",
              author: "Adina's Mantra",
            }}
            story="May we never forget a remarkable young woman, Adina Perullo, who bravely battled MBC. Her mantra was 'We are the storm,' and that she was. Her strength and courage were an inspiration to us all, and she had a powerful impact on so many. Adina may be gone, but the memory of her as a fierce and resilient storm will live on forever."
          />

          {/* Diane's Story */}
          <StoryCard
            name="Diane C. Donohue"
            title=""
            image="/images/Diane C. Donohue.jpg"
            accentColor="pink"
            isMemorial={true}
            memorableQuote={{
              text: "It's not degrees, career milestones, houses, or cars that define success. It's how many lives you touch.",
            }}
            story="On December 30th, Diane C. Donohue completed her brave five-year journey with metastatic breast cancer. She gave cancer a run for its money the only way she knew how—with kindness, compassion, grace, determination, and acceptance. She was our peaceful warrior, a beloved wife, mother, grandmother, sister, aunt, and friend. Diane had the most successful life. She touched so many people, from friends and family to perfect strangers. She talked to everyone she encountered, usually offering words of wisdom or lending a listening ear, even during her most challenging days, because it made her feel better to help others. Diane was one of Kelly's Fordham moms; she adored her and the other Fordham girls and then felt a kinship with Kelly as they both powered through the same disease. She is walking with us here in spirit today, and we would love for you to join Miles for MBC and Kelly Marie or to make a donation to fund research on metastatic breast cancer."
          />
        </div>
      </section>

      {/* Donation Call to Action */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-3xl shadow-2xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48"></div>
            
            <div className="relative z-10">
              <Heart className="w-20 h-20 mx-auto mb-6 fill-current animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your Donation Saves Lives
              </h2>
              <p className="text-xl md:text-2xl mb-4 leading-relaxed">
                100% of net proceeds fund MBC research through METAvivor
              </p>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Every dollar brings us closer to finding a cure for Metastatic Breast Cancer. 
                Your generosity directly supports groundbreaking research and gives hope to thousands of families.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <DonateButton size="large" variant="white" />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/30">
                <div className="flex flex-col items-center">
                  <FundraisingAmount 
                    size="large" 
                    className="text-white"
                    showLastUpdated={true}
                  />
                  <p className="text-white/90 mt-2">Already Raised</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">100%</p>
                  <p className="text-white/90">Goes to Research</p>
                </div>
                <div>
                  <p className="text-4xl font-bold mb-2">685K</p>
                  <p className="text-white/90">Lives Lost Annually</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MBC Facts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            MBC FACTS
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-6 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800">
                <span className="font-bold text-teal-600 text-2xl">30%</span> of early stage breast cancer survivors will have a recurrence as metastatic disease
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 p-6 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800">
                Metastases can occur as early as <span className="font-bold text-emerald-600">several months to 25+ years</span> after treatment
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-pink-50 p-6 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800">
                <span className="font-bold text-pink-600 text-2xl">685,000</span> people a year die from metastatic breast cancer globally
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl shadow-lg">
              <p className="text-lg text-gray-800">
                Only <span className="font-bold text-purple-600">31%</span> of U.S. MBC patients live longer than 5 years, and only <span className="font-bold text-purple-600">11%</span> live longer than 10 years
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-8 rounded-2xl shadow-xl text-center">
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <p className="text-3xl md:text-4xl font-bold">
              There is NO CURE for MBC
            </p>
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Event Schedule
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-800">Saturday, October 25, 2025 - 2:00 PM</p>
                <p className="text-lg text-gray-700">Registration Check-In, Announcements and Warmup</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 flex items-start gap-4">
              <div className="bg-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                <Activity className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-xl text-gray-800">Saturday, October 25, 2025 - 3:00 PM</p>
                <p className="text-lg text-gray-700">Race Begins with Color Toss</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
            Thank You to Our Generous Sponsors
          </h2>

          {/* Sponsor Showcase */}
          <SponsorShowcase />

          {/* Family Sponsors */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 px-6 rounded-t-2xl">
              <h3 className="text-3xl font-bold text-center">2025 Family Sponsors</h3>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-b-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'The Adams Family',
                  'The Concilio Family',
                  'The Craine Family',
                  'The Giacomarra Family',
                  'The Goldrick Family',
                  'The Graziano Family',
                  'The Harkins Family',
                  'The Kurz Family',
                  'The Mahindra Family',
                  'The Novack Family',
                  'The Orfano Family',
                  'The Steinman Family',
                  'The Taly Family',
                ].map((family, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <p className="text-lg font-semibold text-gray-800">{family}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Raffle Donations */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-t-2xl">
              <h3 className="text-3xl font-bold text-center">2025 Raffle Donations</h3>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-8 rounded-b-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Blowout Spot - Crossbay Blvd, Ozone Park Location',
                  'Bark Box',
                  'Blvd Optical',
                  'Bruno\'s Restaurant - Howard Beach',
                  'Bungalow Bar',
                  'Cheesecake Factory',
                  'Crossbay Diner',
                  'Crossbay Seashell Fish Market',
                  'Excelsior Soccer Club',
                  'G & M Carpet Cleaning - Frank BiFulco',
                  'NY Giants - Memorabilia',
                  'Gino\'s Pizzeria and Restaurant',
                  'Harbor Lights Rockaway Pub',
                  'Howard Beach Florist',
                  'NY Islanders - Memorabilia',
                  'Jaime Rose Eyeware',
                  'Karen Ann Charters - Fishing Trip',
                  'KeyFood - Howard Beach',
                  'La Sorrentina Ristorante',
                  'The Lash & Beauty Bar - Howard Beach',
                  'Lenny\'s Claim Bar',
                  'Liquor Town USA - Ozone Park',
                  'The Manor Oktoberfest',
                  'Matteo\'s Howard Beach',
                  'Mia Bella Hair Salon',
                  'Mia Bella Laser Hair Removal',
                  'Michael\'s Nails - Howard Beach',
                  'New Park Pizza',
                  'Old Country Bagels',
                  'Pax Sweets',
                  'Pretty Local LI - Krista DeMaio',
                  'Shining Star Nails - Old Howard Beach',
                  'Shirley\'s Nails',
                  'SOJO Spa Club',
                  'Splish Splash Water Park',
                  'Stop & Shop - Howard Beach',
                  'Stormborn Strength - Howard Beach',
                  'Summit NYC',
                  'Superstar Auto Spa',
                  'Terp Bros',
                  'Twist It Top It - Howard Beach',
                  'NY Yankees',
                  'Vetro\'s Restaurant - by Russo\'s on the Bay',
                  'Wine & Spirits of Howard Beach',
                ].map((sponsor, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-sm text-gray-800">{sponsor}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Business Donations */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white py-4 px-6 rounded-t-2xl">
              <h3 className="text-3xl font-bold text-center">2025 Business Donations</h3>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-8 rounded-b-2xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Adelphi NY Statewide Breast Cancer Hotline & Support Program',
                  'Bagel Barista',
                  'Claudine\'s Hair Salon',
                  'Just Delightful',
                  'Nick the Balloonatic',
                  'Fi\'s Treats',
                  'Fine French Cleaners',
                  'KeyFood - Ozone Park',
                  'The Madelaine Chocolate Company',
                  'Pax Sweets - Chocolate Oreos',
                ].map((business, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-md">
                    <p className="text-sm text-gray-800">{business}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-teal-100 via-emerald-100 to-pink-100 p-6 rounded-2xl">
            <Heart className="w-12 h-12 mx-auto mb-4 text-pink-500" />
            <p className="text-xl md:text-2xl font-bold text-gray-800">
              Thank you to all our sponsors and donors for making this event possible!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-teal-50 via-emerald-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
            Contact Information
          </h2>
          
          <div className="bg-gradient-to-br from-teal-100 via-emerald-100 to-pink-100 rounded-2xl shadow-xl p-8 md:p-12">
            <p className="text-xl font-semibold text-gray-800 mb-2">Event Contact</p>
            <p className="text-2xl font-bold text-teal-600 mb-4">Danielle Graziano</p>
            <div className="flex items-center justify-center gap-2 text-xl text-gray-700">
              <span className="font-semibold">Phone:</span>
              <a href="tel:917-560-5616" className="text-pink-600 hover:text-pink-700 font-bold">
                917-560-5616
              </a>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg text-gray-700">
              Follow our Facebook event page to receive the most recent updates for the event
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-hero text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Heart className="w-8 h-8" />
            <Activity className="w-8 h-8" />
            <Users className="w-8 h-8" />
          </div>
          <p className="text-2xl font-bold mb-4">
            100% of net proceeds fund MBC research through METAvivor
          </p>
          <p className="text-lg">
            Together, we can make a difference in the fight against Metastatic Breast Cancer
          </p>
        </div>
      </footer>
    </main>
    </>
  );
}
