# COBRA Styling Package Installer (PowerShell)
# This script copies COBRA styling files to your project

$ErrorActionPreference = "Stop"

Write-Host "🐍 COBRA Styling Package Installer" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a React project
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this from your React project root." -ForegroundColor Red
    exit 1
}

# Check if src directory exists
if (-not (Test-Path "src")) {
    Write-Host "❌ Error: src directory not found. Please run this from your React project root." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Found React project" -ForegroundColor Green
Write-Host ""

# Ask for confirmation
Write-Host "This will copy COBRA styling files to your project:"
Write-Host "  - src/styles/ (Theme, CobraStyles, styled components)"
Write-Host "  - src/components/shared/Grid/ (AG Grid components)"
Write-Host "  - src/docs/ (Documentation)"
Write-Host ""
$confirmation = Read-Host "Continue? (y/n)"

if ($confirmation -ne 'y' -and $confirmation -ne 'Y') {
    Write-Host "❌ Installation cancelled" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "📦 Installing COBRA styling files..." -ForegroundColor Cyan
Write-Host ""

# Get the directory where this script is located
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path

# Create directories
Write-Host "📁 Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "src/styles/styledComponents" | Out-Null
New-Item -ItemType Directory -Force -Path "src/components/shared/Grid" | Out-Null
New-Item -ItemType Directory -Force -Path "src/utilities/icons" | Out-Null
New-Item -ItemType Directory -Force -Path "src/docs" | Out-Null

# Copy styles
Write-Host "🎨 Copying style files..." -ForegroundColor Yellow
Copy-Item -Path "$scriptDir/styles/*" -Destination "src/styles/" -Recurse -Force

# Copy grid components
Write-Host "📊 Copying grid components..." -ForegroundColor Yellow
Copy-Item -Path "$scriptDir/components/shared/Grid/*" -Destination "src/components/shared/Grid/" -Recurse -Force

# Copy utilities
Write-Host "🔧 Copying utility files..." -ForegroundColor Yellow
Copy-Item -Path "$scriptDir/utilities/*" -Destination "src/utilities/" -Recurse -Force

# Copy documentation
Write-Host "📚 Copying documentation..." -ForegroundColor Yellow
Copy-Item -Path "$scriptDir/docs/*" -Destination "src/docs/" -Recurse -Force

Write-Host ""
Write-Host "✅ COBRA styling files installed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Install required dependencies:"
Write-Host "   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled"
Write-Host "   npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core"
Write-Host "   npm install @fortawesome/sharp-light-svg-icons @fortawesome/sharp-solid-svg-icons"
Write-Host ""
Write-Host "   Optional (if using grids):"
Write-Host "   npm install ag-grid-community ag-grid-react ag-grid-enterprise"
Write-Host ""
Write-Host "   Optional (for forms):"
Write-Host "   npm install react-hook-form"
Write-Host ""
Write-Host "2. Set up ThemeProvider in your App.tsx (see docs/PROTOTYPE_SETUP_GUIDE.md)"
Write-Host ""
Write-Host "3. Review documentation in src/docs/:"
Write-Host "   - STYLING_DOCS_README.md (start here)"
Write-Host "   - COBRA_STYLING_GUIDE.md (complete reference)"
Write-Host "   - PROTOTYPE_SETUP_GUIDE.md (setup and patterns)"
Write-Host "   - AI_AGENT_CONTEXT.md (for AI coding agents)"
Write-Host ""
Write-Host "🚀 Happy coding!" -ForegroundColor Cyan
