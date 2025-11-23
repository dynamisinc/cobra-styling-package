# COBRA Styling Package

A portable package containing all COBRA styling files, components, and documentation for seeding new prototype projects.

## 📦 What's Included

### Style Files
- **Theme.ts** - Complete MUI theme with COBRA colors and settings
- **CobraStyles.ts** - Spacing and padding constants
- **LayoutStyles.ts** - Layout component definitions
- **styledComponents/** - 25+ pre-styled COBRA components

### Components
- **CobraPaginatedGrid** - AG Grid wrapper with COBRA styling
- **CobraGrid.css** - AG Grid theme customization

### Documentation
- **STYLING_DOCS_README.md** - Navigation guide for all docs
- **COBRA_STYLING_GUIDE.md** - Complete styling reference (900 lines)
- **STYLING_COMPLIANCE_ANALYSIS.md** - Working examples from COBRA
- **PROTOTYPE_SETUP_GUIDE.md** - Step-by-step setup and patterns
- **AI_AGENT_CONTEXT.md** - Quick reference for AI coding agents

## 🚀 Quick Start

### Method 1: Using Install Scripts (Recommended)

**On Windows (PowerShell):**
```powershell
# In your React project root
.\path\to\cobra-styling-package\install.ps1
```

**On Mac/Linux (Bash):**
```bash
# In your React project root
bash /path/to/cobra-styling-package/install.sh
```

### Method 2: Manual Copy

```bash
# Copy to your project root
cp -r cobra-styling-package/styles src/
cp -r cobra-styling-package/components/shared src/components/
cp -r cobra-styling-package/docs src/
```

### Method 3: Create Template Repository

```bash
# One-time setup
npx create-react-app my-cobra-template --template typescript
cd my-cobra-template

# Run install script
bash /path/to/cobra-styling-package/install.sh

# Install dependencies (see below)

# Commit as template
git init
git add .
git commit -m "COBRA styling template"
git remote add origin <your-template-repo-url>
git push -u origin main

# For new projects, just clone!
git clone <your-template-repo-url> my-new-prototype
```

## 📋 Post-Installation Steps

### 1. Install Dependencies

**Required:**
```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/sharp-light-svg-icons @fortawesome/sharp-solid-svg-icons
```

**Optional (if using grids):**
```bash
npm install ag-grid-community ag-grid-react ag-grid-enterprise
```

**Optional (for forms):**
```bash
npm install react-hook-form
```

### 2. Set Up Theme Provider

Update `src/App.tsx`:

```typescript
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { cobraTheme } from './styles/Theme';

// If using AG Grid
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './components/shared/Grid/CobraGrid.css';

function App() {
  return (
    <ThemeProvider theme={cobraTheme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}

export default App;
```

### 3. Create Your First Page

```typescript
import { Stack } from '@mui/material';
import { CobraNewButton, CobraTextField } from './styles/styledComponents';
import CobraStyles from './styles/CobraStyles';

export const TestPage = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      padding={CobraStyles.Padding.MainWindow}
      style={{ height: '100vh', backgroundColor: '#f8f8f8' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <span style={{ fontWeight: 'bold' }}>Test Page</span>
        <CobraNewButton>Create New</CobraNewButton>
      </Stack>

      <CobraTextField label="Name" fullWidth />
    </Stack>
  );
};
```

## 📚 Documentation

After installation, find comprehensive documentation in `src/docs/`:

1. **Start Here**: `STYLING_DOCS_README.md`
   - Overview of all documentation
   - Quick scenario guides
   - Workflow examples

2. **Complete Reference**: `COBRA_STYLING_GUIDE.md`
   - All colors, components, patterns
   - 900+ lines of comprehensive documentation

3. **Working Examples**: `STYLING_COMPLIANCE_ANALYSIS.md`
   - Real COBRA pages analyzed
   - Role Form and Facilities Form examples

4. **Setup & Patterns**: `PROTOTYPE_SETUP_GUIDE.md`
   - Copy-paste patterns
   - Troubleshooting guide
   - AI agent strategies

5. **AI Quick Reference**: `AI_AGENT_CONTEXT.md`
   - Paste into Claude/Copilot/ChatGPT
   - Essential rules and examples

## 🤖 Working with AI Coding Agents

### Quick Start with AI

1. Open your AI coding assistant (Claude Code, GitHub Copilot, ChatGPT)
2. Paste the contents of `src/docs/AI_AGENT_CONTEXT.md`
3. Tell the AI: "Reference COBRA_STYLING_GUIDE.md when generating code"
4. Use prompt templates from `PROTOTYPE_SETUP_GUIDE.md`

### Example Prompt

```
I need to create a facility search page. Here's the COBRA context:

[Paste AI_AGENT_CONTEXT.md]

Please create a list page with:
- Search grid using CobraPaginatedGrid
- "Create New" button using CobraNewButton
- Proper spacing with CobraStyles constants

Reference Pattern 1 in PROTOTYPE_SETUP_GUIDE.md
```

## 📂 Package Structure

```
cobra-styling-package/
├── styles/
│   ├── Theme.ts                    # MUI theme configuration
│   ├── CobraStyles.ts              # Spacing/padding constants
│   ├── LayoutStyles.ts             # Layout components
│   └── styledComponents/           # 25+ styled components
│       ├── index.ts
│       ├── CobraPrimaryButton.tsx
│       ├── CobraTextField.tsx
│       └── ...
├── components/
│   └── shared/
│       └── Grid/
│           ├── CobraGrid.css       # AG Grid styling
│           └── CobraPaginatedGrid.tsx
├── docs/
│   ├── STYLING_DOCS_README.md      # Documentation overview
│   ├── COBRA_STYLING_GUIDE.md      # Complete reference
│   ├── STYLING_COMPLIANCE_ANALYSIS.md
│   ├── PROTOTYPE_SETUP_GUIDE.md
│   └── AI_AGENT_CONTEXT.md
├── scripts/
│   └── (installer utilities)
├── install.sh                      # Bash installer
├── install.ps1                     # PowerShell installer
├── package.json
└── README.md                       # This file
```

## 🎨 Available Components

### Buttons
- CobraPrimaryButton, CobraSecondaryButton
- CobraNewButton, CobraDeleteButton, CobraSaveButton
- CobraLinkButton, CobraIconButton

### Form Controls
- CobraTextField, CobraCheckbox, CobraSwitch
- CobraDateTimePicker, CobraOutlinedInput

### Layout
- CobraDialog, CobraDivider, CobraFieldset

### Navigation
- CobraTabs, CobraTab, CobraLink

### Data Display
- CobraPaginatedGrid, CobraBasicClientSideGrid
- CobraBadge, CobraStripedTableRow

## 🎯 Common Use Cases

### Simple List Page
```typescript
import { Stack } from '@mui/material';
import { CobraNewButton } from './styles/styledComponents';
import { CobraPaginatedGrid } from './components/shared/Grid';
import CobraStyles from './styles/CobraStyles';

export const ListPage = () => (
  <Stack direction="column" spacing={2} padding={CobraStyles.Padding.MainWindow}>
    <Stack direction="row" justifyContent="space-between">
      <span style={{ fontWeight: 'bold' }}>Items</span>
      <CobraNewButton>Create New</CobraNewButton>
    </Stack>
    <CobraPaginatedGrid gridOptions={gridOptions} />
  </Stack>
);
```

### Simple Form
```typescript
import { Stack } from '@mui/material';
import { CobraTextField, CobraLinkButton, CobraSaveButton } from './styles/styledComponents';
import CobraStyles from './styles/CobraStyles';

export const FormPage = () => (
  <Stack spacing={CobraStyles.Spacing.FormFields}>
    <CobraTextField label="Name" fullWidth />
    <Stack direction="row" spacing={1} justifyContent="flex-end">
      <CobraLinkButton>Cancel</CobraLinkButton>
      <CobraSaveButton>Save</CobraSaveButton>
    </Stack>
  </Stack>
);
```

### Dialog
```typescript
import { Stack } from '@mui/material';
import { CobraDialog, CobraTextField, CobraPrimaryButton } from './styles/styledComponents';

export const MyDialog = ({ open, onClose }) => (
  <CobraDialog open={open} onClose={onClose} title="Add Item" customDialogWidth={600}>
    <Stack spacing={1.5}>
      <CobraTextField label="Name" fullWidth />
      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <CobraPrimaryButton>Save</CobraPrimaryButton>
      </Stack>
    </Stack>
  </CobraDialog>
);
```

## 🔧 Troubleshooting

### Issue: Components look wrong
**Solution**: Ensure ThemeProvider is set up correctly in App.tsx

### Issue: Colors don't match
**Solution**: Import and use theme colors, not hardcoded hex values

### Issue: TypeScript errors
**Solution**: Make sure all files from styledComponents/ were copied

See `docs/PROTOTYPE_SETUP_GUIDE.md` for complete troubleshooting guide.

## 📊 Version

- **Package Version**: 1.0.0
- **COBRA Version**: Current
- **MUI Version**: 7.0.2
- **Last Updated**: 2025-11-21

## 🤝 Support

For questions or issues:
1. Check documentation in `src/docs/`
2. Reference `STYLING_DOCS_README.md` for navigation
3. Use AI agents with `AI_AGENT_CONTEXT.md`

## 📝 License

UNLICENSED - Internal use only for COBRA-related projects

---

**Happy prototyping! 🚀**

For detailed setup instructions, see `docs/PROTOTYPE_SETUP_GUIDE.md`
