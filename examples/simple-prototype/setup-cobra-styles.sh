#!/bin/bash

# Setup COBRA styling files for simple-prototype example
# This script copies all necessary files from the parent package

echo "🎨 Setting up COBRA styling files..."
echo ""

# Create directories
mkdir -p src/styles/styledComponents
mkdir -p src/components/shared/Grid
mkdir -p src/utilities/icons

# Copy theme files
echo "📋 Copying theme files..."
cp ../../styles/Theme.ts src/styles/
cp ../../styles/CobraStyles.ts src/styles/
cp ../../styles/LayoutStyles.ts src/styles/
cp ../../styles/CustomStylesProvider.tsx src/styles/

# Copy all styled components
echo "📋 Copying styled components..."
cp ../../styles/styledComponents/*.tsx src/styles/styledComponents/
cp ../../styles/styledComponents/index.ts src/styles/styledComponents/

# Copy grid components
echo "📋 Copying grid components..."
cp ../../components/shared/Grid/CobraGrid.css src/components/shared/Grid/
cp ../../components/shared/Grid/CobraPaginatedGrid.tsx src/components/shared/Grid/
cp ../../components/shared/Grid/PageSizeSelector.tsx src/components/shared/Grid/ 2>/dev/null || true
cp ../../components/shared/Grid/PaginationControls.tsx src/components/shared/Grid/ 2>/dev/null || true

# Copy utilities
echo "📋 Copying utilities..."
cp ../../utilities/icons/icons.ts src/utilities/icons/

echo ""
echo "✅ COBRA styling files copied successfully!"
echo ""
echo "Next steps:"
echo "1. npm install"
echo "2. npm start"
echo ""
