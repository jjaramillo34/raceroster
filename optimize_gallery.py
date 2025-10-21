#!/usr/bin/env python3
"""
Gallery Image Optimizer
Resizes images, converts to WebP format, and renames them sequentially
"""

import os
from PIL import Image
from pathlib import Path

# Configuration
GALLERY_FOLDER = "public/images/gallery"
OUTPUT_FOLDER = "public/images/gallery-optimized"
MAX_WIDTH = 1200  # Maximum width in pixels
MAX_HEIGHT = 1200  # Maximum height in pixels
WEBP_QUALITY = 85  # WebP quality (0-100, higher = better quality)

def optimize_images():
    """Optimize all images in the gallery folder"""
    
    # Create output folder if it doesn't exist
    output_path = Path(OUTPUT_FOLDER)
    output_path.mkdir(parents=True, exist_ok=True)
    
    # Get all image files from gallery folder
    gallery_path = Path(GALLERY_FOLDER)
    image_files = sorted([
        f for f in gallery_path.iterdir() 
        if f.suffix.lower() in ['.jpg', '.jpeg', '.png', '.webp']
    ])
    
    if not image_files:
        print(f"❌ No images found in {GALLERY_FOLDER}")
        return
    
    print(f"🖼️  Found {len(image_files)} images to optimize")
    print(f"📁 Output folder: {OUTPUT_FOLDER}")
    print(f"📏 Max dimensions: {MAX_WIDTH}x{MAX_HEIGHT}px")
    print(f"💎 WebP quality: {WEBP_QUALITY}\n")
    
    total_original_size = 0
    total_optimized_size = 0
    
    # Process each image
    for index, image_path in enumerate(image_files, start=1):
        try:
            # Open image
            with Image.open(image_path) as img:
                # Get original size
                original_size = os.path.getsize(image_path)
                total_original_size += original_size
                
                # Convert RGBA to RGB if necessary
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Create a white background
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Calculate new dimensions while maintaining aspect ratio
                width, height = img.size
                if width > MAX_WIDTH or height > MAX_HEIGHT:
                    # Calculate scaling factor
                    scale = min(MAX_WIDTH / width, MAX_HEIGHT / height)
                    new_width = int(width * scale)
                    new_height = int(height * scale)
                    
                    # Resize image with high-quality resampling
                    img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                    resized = True
                else:
                    resized = False
                
                # Generate output filename
                output_filename = f"gallery-{index:03d}.webp"
                output_file = output_path / output_filename
                
                # Save as WebP
                img.save(output_file, 'WebP', quality=WEBP_QUALITY, method=6)
                
                # Get optimized size
                optimized_size = os.path.getsize(output_file)
                total_optimized_size += optimized_size
                
                # Calculate savings
                size_reduction = ((original_size - optimized_size) / original_size) * 100
                
                # Print progress
                status = "✓ Resized & Converted" if resized else "✓ Converted"
                print(f"{status} [{index}/{len(image_files)}]: {image_path.name} → {output_filename}")
                print(f"   Size: {original_size / 1024:.1f}KB → {optimized_size / 1024:.1f}KB "
                      f"(saved {size_reduction:.1f}%)")
                
        except Exception as e:
            print(f"❌ Error processing {image_path.name}: {e}")
    
    # Print summary
    print("\n" + "="*60)
    print("📊 OPTIMIZATION SUMMARY")
    print("="*60)
    print(f"Images processed: {len(image_files)}")
    print(f"Original total size: {total_original_size / (1024 * 1024):.2f} MB")
    print(f"Optimized total size: {total_optimized_size / (1024 * 1024):.2f} MB")
    print(f"Total space saved: {(total_original_size - total_optimized_size) / (1024 * 1024):.2f} MB")
    print(f"Overall reduction: {((total_original_size - total_optimized_size) / total_original_size) * 100:.1f}%")
    print(f"\n✅ Done! Optimized images saved to: {OUTPUT_FOLDER}")

if __name__ == "__main__":
    print("\n🎨 Gallery Image Optimizer\n")
    optimize_images()

