#!/bin/bash

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <source_folder> <destination_folder>"
    echo "Example: $0 ./forest_frames ./compressed_frames"
    exit 1
fi

SOURCE_DIR="$1"
DEST_DIR="$2"

if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' does not exist"
    exit 1
fi

if [ ! "$(ls -A $SOURCE_DIR/*.png 2>/dev/null)" ]; then
    echo "Error: No PNG files found in '$SOURCE_DIR'"
    exit 1
fi

if [ ! -d "$DEST_DIR" ]; then
    echo "Creating destination directory: $DEST_DIR"
    mkdir -p "$DEST_DIR"
fi

echo "Processing frames..."
for f in "$SOURCE_DIR"/*.png; do
    filename=$(basename "$f")
    # Change extension from .png to .jpg
    filename="${filename%.png}.jpg"
    echo "Converting: $filename"
    convert "$f" \
        -strip \
        -interlace Plane \
        -quality 90 \
        -colorspace sRGB \
        -depth 8 \
        -resize 2400x1081 \
        -sampling-factor 4:2:0 \
        "$DEST_DIR/$filename"
done

echo "Conversion complete!"
echo "Original size of first frame: $(ls -lh "$SOURCE_DIR"/*.png | head -n 1)"
echo "Compressed size of first frame: $(ls -lh "$DEST_DIR"/*.jpg | head -n 1)"

## old, with the options thing

# #!/bin/bash
# 
# if [ "$#" -ne 2 ]; then
#     echo "Usage: $0 <source_folder> <destination_folder>"
#     echo "Example: $0 ./forest_frames ./compressed_frames"
#     exit 1
# fi
# 
# SOURCE_DIR="$1"
# DEST_DIR="$2"
# 
# # Validation checks...
# if [ ! -d "$SOURCE_DIR" ]; then
#     echo "Error: Source directory '$SOURCE_DIR' does not exist"
#     exit 1
# fi
# 
# if [ ! "$(ls -A $SOURCE_DIR/*.png 2>/dev/null)" ]; then
#     echo "Error: No PNG files found in '$SOURCE_DIR'"
#     exit 1
# fi
# 
# if [ ! -d "$DEST_DIR" ]; then
#     echo "Creating destination directory: $DEST_DIR"
#     mkdir -p "$DEST_DIR"
# fi
# 
# # Try different optimization levels
# echo "Creating test frames with different settings..."
# 
# # Test frame with different settings
# TEST_FRAME="$SOURCE_DIR/$(ls "$SOURCE_DIR" | head -n 1)"
# 
# echo "Original size: $(ls -lh "$TEST_FRAME")"
# 
#   # -dither FloydSteinberg \
# 
# # Test 1: 800x450 (16:9)
# convert "$TEST_FRAME" \
#     -strip \
#     -interlace Plane \
#     -quality 85 \
#     -define png:compression-level=9 \
#     -define png:compression-strategy=3 \
#     -define png:exclude-chunk=all \
#     -colorspace sRGB \
#     -depth 8 \
#     -resize 800x450 \
#     -colors 256 \
#     -dither None \
#     "$DEST_DIR/test1.png"
# 
# # Test 2: 640x360 (16:9)
# convert "$TEST_FRAME" \
#     -strip \
#     -interlace Plane \
#     -quality 70 \
#     -define png:compression-level=9 \
#     -define png:compression-strategy=3 \
#     -define png:exclude-chunk=all \
#     -colorspace sRGB \
#     -depth 8 \
#     -resize 640x360 \
#     -colors 256 \
#     -dither None \
#     "$DEST_DIR/test2.png"
# 
# # Test 3: 480x270 (16:9)
# convert "$TEST_FRAME" \
#     -strip \
#     -interlace Plane \
#     -quality 65 \
#     -define png:compression-level=9 \
#     -define png:compression-strategy=3 \
#     -define png:exclude-chunk=all \
#     -colorspace sRGB \
#     -depth 8 \
#     -resize 480x270 \
#     -colors 256 \
#     -dither None \
#     "$DEST_DIR/test3.png"
# 
# echo "Test results:"
# echo "800x450: $(ls -lh "$DEST_DIR/test1.png")"
# echo "640x360: $(ls -lh "$DEST_DIR/test2.png")"
# echo "480x270: $(ls -lh "$DEST_DIR/test3.png")"
# 
# read -p "Enter test number to proceed with (1-3), or Ctrl+C to exit: " choice
# 
# case $choice in
#     1)
#         RESIZE="800x450"
#         QUALITY=85
#         ;;
#     2)
#         RESIZE="640x360"
#         QUALITY=80
#         ;;
#     3)
#         RESIZE="480x270"
#         QUALITY=65
#         ;;
#     *)
#         echo "Invalid choice"
#         exit 1
#         ;;
# esac
# 
# echo "Processing all frames with selected settings..."
# for f in "$SOURCE_DIR"/*.png; do
#     filename=$(basename "$f")
#     echo "Converting: $filename"
#     convert "$f" \
#         -strip \
#         -interlace Plane \
#         -quality $QUALITY \
#         -define png:compression-level=9 \
#         -define png:compression-strategy=3 \
#         -define png:exclude-chunk=all \
#         -colorspace sRGB \
#         -depth 8 \
#         -resize $RESIZE \
#         -colors 256 \
#         -dither None \
#         "$DEST_DIR/$filename"
# done
# 
# # Cleanup test files
# rm "$DEST_DIR/test1.png" "$DEST_DIR/test2.png" "$DEST_DIR/test3.png"
# 
# echo "Conversion complete!"
# echo "Original size of first frame: $(ls -lh "$SOURCE_DIR"/*.png | head -n 1)"
# echo "Compressed size of first frame: $(ls -lh "$DEST_DIR"/*.png | head -n 1)"
