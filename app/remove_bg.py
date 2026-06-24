from rembg import remove
from PIL import Image
import os

# Input and output paths
input_path = r"d:\Kimi_Agent_Jack 3D Creator Landing\app\public\images\hero-portrait.png"
output_path = r"d:\Kimi_Agent_Jack 3D Creator Landing\app\public\images\hero-portrait.png"

try:
    # Open the image
    input_image = Image.open(input_path)
    print(f"Original image mode: {input_image.mode}, Size: {input_image.size}")
    
    # Convert to RGB if necessary for rembg
    if input_image.mode != 'RGB':
        input_image = input_image.convert('RGB')
    
    # Remove background
    output_image = remove(input_image)
    print(f"Processed image mode: {output_image.mode}")
    
    # Ensure it has alpha channel
    if output_image.mode != 'RGBA':
        output_image = output_image.convert('RGBA')
    
    # Save with PNG format to preserve transparency
    output_image.save(output_path, 'PNG')
    
    # Verify the result
    verify_image = Image.open(output_path)
    print(f"Saved image mode: {verify_image.mode}, Size: {verify_image.size}")
    print(f"Background removed successfully!")
    print(f"Image saved to: {output_path}")
    
except Exception as e:
    print(f"Error: {e}")
