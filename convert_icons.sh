#!/bin/zsh

# Array of sizes
sizes=(16 32 48 128)

# Loop through each size and convert the SVG to PNG with the specified size
for size in ${sizes[@]}; do
    rsvg-convert -w $size -h $size icon.svg -o "dist/icon${size}.png"
done