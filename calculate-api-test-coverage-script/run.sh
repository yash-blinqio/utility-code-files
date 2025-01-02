#!/bin/bash

# Default values for arguments
CODE_DIR=""

# Parse command-line arguments
while [[ "$#" -gt 0 ]]; do
    case $1 in
        --code-dir) CODE_DIR="$2"; shift 2;;  # Get the value after --code-dir
        *) echo "Unknown option: $1"; exit 1;; # Exit if there is an invalid option
    esac
done

# Check if CODE_DIR is provided
if [ -z "$CODE_DIR" ]; then
    echo "Error: --code-dir argument is required."
    exit 1
fi

echo "✅ Running the code in $CODE_DIR"

# Extract the last part of CODE_DIR (the directory name)
DIR_NAME=$(basename "$CODE_DIR")

# Generate a dynamic filename using the last part of CODE_DIR
OUTPUT_FILE="./out/test_coverage_ai-qa_${DIR_NAME}.txt"  # Make it relative to the current directory

# Create the "out" directory if it doesn't exist
mkdir -p "$(dirname "$OUTPUT_FILE")"

# Run the command with the provided path and redirect the output to the dynamically generated file
node src/api-coverage.js "$CODE_DIR" > "$OUTPUT_FILE"

echo "✅ Test coverage report saved to $OUTPUT_FILE"
