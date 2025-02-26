#!/bin/bash

# Exit on error
set -e

echo "Setting up Yamil Velez Portfolio..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create a .env.local file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    echo "# Environment variables" > .env.local
fi

# Build the application
echo "Building the application..."
npm run build

echo "Setup complete! You can now run the development server with:"
echo "npm run dev"

# Ask if user wants to run the development server
read -p "Do you want to start the development server now? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "Starting development server..."
    npm run dev
fi 