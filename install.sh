#!/bin/bash

# COBRA Styling Package Installer
# This script copies COBRA styling files to your project

set -e

echo "🐍 COBRA Styling Package Installer"
echo "===================================="
echo ""

# Check if we're in a React project
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from your React project root."
    exit 1
fi

# Check if src directory exists
if [ ! -d "src" ]; then
    echo "❌ Error: src directory not found. Please run this from your React project root."
    exit 1
fi

echo "✅ Found React project"
echo ""

# Ask for confirmation
echo "This will copy COBRA styling files to your project:"
echo "  - src/styles/ (Theme, CobraStyles, styled components)"
echo "  - src/components/shared/Grid/ (AG Grid components)"
echo "  - src/docs/ (Documentation)"
echo ""
read -p "Continue? (y/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "❌ Installation cancelled"
    exit 1
fi

echo ""
echo "📦 Installing COBRA styling files..."
echo ""

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Create directories
echo "📁 Creating directories..."
mkdir -p src/styles/styledComponents
mkdir -p src/components/shared/Grid
mkdir -p src/utilities/icons
mkdir -p src/docs

# Copy styles
echo "🎨 Copying style files..."
cp -r "$SCRIPT_DIR/styles/"* src/styles/

# Copy grid components
echo "📊 Copying grid components..."
cp -r "$SCRIPT_DIR/components/shared/Grid/"* src/components/shared/Grid/

# Copy utilities
echo "🔧 Copying utility files..."
cp -r "$SCRIPT_DIR/utilities/"* src/utilities/

# Copy documentation
echo "📚 Copying documentation..."
cp -r "$SCRIPT_DIR/docs/"* src/docs/

echo ""
echo "✅ COBRA styling files installed successfully!"
echo ""
echo "📋 Next steps:"
echo ""
echo "1. Install required dependencies:"
echo "   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled"
echo "   npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core"
echo "   npm install @fortawesome/sharp-light-svg-icons @fortawesome/sharp-solid-svg-icons"
echo ""
echo "   Optional (if using grids):"
echo "   npm install ag-grid-community ag-grid-react ag-grid-enterprise"
echo ""
echo "   Optional (for forms):"
echo "   npm install react-hook-form"
echo ""
echo "2. Set up ThemeProvider in your App.tsx (see docs/PROTOTYPE_SETUP_GUIDE.md)"
echo ""
echo "3. Review documentation in src/docs/:"
echo "   - STYLING_DOCS_README.md (start here)"
echo "   - COBRA_STYLING_GUIDE.md (complete reference)"
echo "   - PROTOTYPE_SETUP_GUIDE.md (setup and patterns)"
echo "   - AI_AGENT_CONTEXT.md (for AI coding agents)"
echo ""
echo "🚀 Happy coding!"
