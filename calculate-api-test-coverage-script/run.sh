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

# Run the command with the provided path
node src/api-coverage.js "$CODE_DIR" > test_coverage.txt
