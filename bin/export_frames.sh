#!/bin/bash

if [ "$#" -ne 5 ]; then
    echo "Usage: $0 <source_video> <destination_folder> <start_seconds> <duration> <frame_count>"
    echo "Example: $0 video.mp4 public/images/video_frames 10 4 30"
    exit 1
fi

SOURCE_VID="$1"
DEST_DIR="$2"
START="$3"
DUR="$4"
FPS="$5"

# Check if source video exists and is a file (not a directory)
if [ ! -f "$SOURCE_VID" ]; then
    echo "Error: Source video '$SOURCE_VID' does not exist or is not a file"
    exit 1
fi

# Create destination directory if it doesn't exist
if [ ! -d "$DEST_DIR" ]; then
    echo "Creating destination directory: $DEST_DIR"
    mkdir -p "$DEST_DIR"
fi

# Run ffmpeg command
echo "Extracting frames from $SOURCE_VID..."
ffmpeg -ss "$START" -t "$DUR" -i "$SOURCE_VID" -vf fps="$FPS" "$DEST_DIR/frame_%04d.png"

# Check if ffmpeg command was successful
if [ $? -eq 0 ]; then
    echo "Successfully extracted frames to $DEST_DIR"
else
    echo "Error: Frame extraction failed"
    exit 1
fi
