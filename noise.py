from PIL import Image
import random

# Set the dimensions of the image
width, height = 500, 500

# Create a new image with white background
image = Image.new("L", (width, height), "white")

# Access the pixel data of the image
pixels = image.load()

# Loop through each pixel in the image
for i in range(width):
    for j in range(height):
        # Generate random values for the grayscale (0 for black and 255 for white)
        value = random.choice([0, 255])
        
        # Set the pixel's color to the random value
        pixels[i, j] = value

# Save the image to a file
image.save('public\imgs\white-noise.png')

# Optionally, show the image
image.show()