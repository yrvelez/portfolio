#!/bin/bash

# Exit on error
set -e

echo "Deploying to GitHub Pages..."

# Ensure we have the latest code
echo "Pulling latest changes..."
git pull

# Install dependencies
echo "Installing dependencies..."
npm ci

# Build the project
echo "Building the project..."
npm run build

# Ensure the out directory has a .nojekyll file
echo "Creating .nojekyll file..."
touch out/.nojekyll

# Copy over the GitHub Pages special files
echo "Copying 404.html file..."
cp public/404.html out/

# If you're using a custom domain, uncomment and modify this line
# echo "yourdomain.com" > out/CNAME

# Deploy to GitHub Pages
echo "Deploying to GitHub Pages..."
npx gh-pages -d out --dotfiles

echo "Deployment complete!"
echo "Your site should now be available at: https://yrvelez.github.io/portfolio/" 