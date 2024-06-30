#!/bin/zsh

# Array of sizes
sizes=(16 32 48 128)

# Loop through each size and convert the SVG to PNG with the specified size
for size in ${sizes[@]}; do
    magick icon.svg -resize ${size}x${size} "dist/icon${size}.png"
done