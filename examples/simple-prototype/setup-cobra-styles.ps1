# Setup COBRA styling files for simple-prototype example
# This script copies all necessary files from the parent package

Write-Host "🎨 Setting up COBRA styling files..." -ForegroundColor Cyan
Write-Host ""

# Create directories
New-Item -ItemType Directory -Force -Path "src/styles/styledComponents" | Out-Null
New-Item -ItemType Directory -Force -Path "src/components/shared/Grid" | Out-Null
New-Item -ItemType Directory -Force -Path "src/utilities/icons" | Out-Null

# Copy theme files
Write-Host "📋 Copying theme files..." -ForegroundColor Yellow
Copy-Item "../../styles/Theme.ts" -Destination "src/styles/" -Force
Copy-Item "../../styles/CobraStyles.ts" -Destination "src/styles/" -Force
Copy-Item "../../styles/LayoutStyles.ts" -Destination "src/styles/" -Force
Copy-Item "../../styles/CustomStylesProvider.tsx" -Destination "src/styles/" -Force

# Copy all styled components
Write-Host "📋 Copying styled components..." -ForegroundColor Yellow
Copy-Item "../../styles/styledComponents/*.tsx" -Destination "src/styles/styledComponents/" -Force
Copy-Item "../../styles/styledComponents/index.ts" -Destination "src/styles/styledComponents/" -Force

# Copy grid components
Write-Host "📋 Copying grid components..." -ForegroundColor Yellow
Copy-Item "../../components/shared/Grid/CobraGrid.css" -Destination "src/components/shared/Grid/" -Force
Copy-Item "../../components/shared/Grid/CobraPaginatedGrid.tsx" -Destination "src/components/shared/Grid/" -Force
if (Test-Path "../../components/shared/Grid/PageSizeSelector.tsx") {
    Copy-Item "../../components/shared/Grid/PageSizeSelector.tsx" -Destination "src/components/shared/Grid/" -Force
}
if (Test-Path "../../components/shared/Grid/PaginationControls.tsx") {
    Copy-Item "../../components/shared/Grid/PaginationControls.tsx" -Destination "src/components/shared/Grid/" -Force
}

# Copy utilities
Write-Host "📋 Copying utilities..." -ForegroundColor Yellow
Copy-Item "../../utilities/icons/icons.ts" -Destination "src/utilities/icons/" -Force

Write-Host ""
Write-Host "✅ COBRA styling files copied successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. npm install"
Write-Host "2. npm start"
Write-Host ""
