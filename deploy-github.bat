@echo off
echo 🚀 Starting GitHub Pages deployment...

REM Build the application
echo 📦 Building application...
call npm run build

REM Check if build was successful
if errorlevel 1 (
    echo ❌ Build failed! Please fix errors and try again.
    pause
    exit /b 1
)

echo ✅ Build completed successfully!

REM Navigate to build output directory
cd dist

REM Initialize git if not already initialized
if not exist .git (
    git init
    git checkout -b gh-pages
) else (
    git checkout gh-pages 2>nul || git checkout -b gh-pages
)

REM Add all files
git add -A

REM Commit changes
git commit -m "Deploy Kids Zone Business Plan - %date% %time%"

REM Push to GitHub Pages
echo 🌐 Deploying to GitHub Pages...
git push -f origin gh-pages

echo ✅ Deployment completed!
echo 🌟 Your site will be available at: https://jessemlay.github.io/daycare-business-plan/
echo ⏰ It may take a few minutes for changes to appear.

REM Go back to project root
cd ..

pause
