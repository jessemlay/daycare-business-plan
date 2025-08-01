#!/bin/bash

# GitHub Pages Deployment Script for Kids Zone Business Plan

echo "🚀 Starting GitHub Pages deployment..."

# Build the application
echo "📦 Building application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

echo "✅ Build completed successfully!"

# Navigate to build output directory
cd dist

# Initialize git if not already initialized
if [ ! -d .git ]; then
    git init
    git checkout -b gh-pages
else
    git checkout gh-pages 2>/dev/null || git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit changes
git commit -m "Deploy Kids Zone Business Plan - $(date)"

# Push to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
git push -f origin gh-pages

echo "✅ Deployment completed!"
echo "🌟 Your site will be available at: https://jessemlay.github.io/daycare-business-plan/"
echo "⏰ It may take a few minutes for changes to appear."

# Go back to project root
cd ..
