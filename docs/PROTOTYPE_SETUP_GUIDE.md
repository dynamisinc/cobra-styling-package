# COBRA Prototype Setup Guide

## How to Use COBRA Styling in Every Prototype Project

This guide provides a step-by-step process for setting up new prototype projects with COBRA's look and feel, and explains how to use the styling documentation with AI coding agents.

---

## Table of Contents

1. [Quick Setup Checklist](#quick-setup-checklist)
2. [Detailed Setup Process](#detailed-setup-process)
3. [Working with AI Coding Agents](#working-with-ai-coding-agents)
4. [Folder Structure for Prototypes](#folder-structure-for-prototypes)
5. [Common Prototype Patterns](#common-prototype-patterns)
6. [Troubleshooting](#troubleshooting)
7. [Example Projects](#example-projects)

---

## Quick Setup Checklist

Use this checklist for every new prototype:

### Initial Setup (One-time per prototype)
- [ ] Create React + TypeScript project
- [ ] Install required dependencies
- [ ] Copy COBRA style files from this repo
- [ ] Set up theme provider in App.tsx
- [ ] Copy reference documentation files
- [ ] Test with a simple page

### For Each New Feature
- [ ] Reference COBRA_STYLING_GUIDE.md for component usage
- [ ] Check STYLING_COMPLIANCE_ANALYSIS.md for similar patterns
- [ ] Use COBRA styled components (not plain MUI)
- [ ] Apply CobraStyles spacing constants
- [ ] Test responsiveness and accessibility

---

## Detailed Setup Process

### Step 1: Create Your Prototype Project

```bash
# Create new React TypeScript project
npx create-react-app my-prototype --template typescript

cd my-prototype
```

### Step 2: Install Dependencies

```bash
# Core MUI and styling
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled

# MUI Date Pickers (if needed)
npm install @mui/x-date-pickers

# FontAwesome (Free version - no license required)
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons

# AG Grid (if you need data grids - community edition is free)
npm install ag-grid-community ag-grid-react

# Form handling (recommended)
npm install react-hook-form

# React Router (for multi-page prototypes)
npm install react-router-dom

# Type definitions
npm install --save-dev @types/react-router-dom
```

### Step 3: Copy COBRA Style Files

Create this folder structure in your prototype:

```
my-prototype/
├── src/
│   ├── styles/
│   │   ├── Theme.ts                    ← COPY
│   │   ├── CobraStyles.ts              ← COPY
│   │   ├── LayoutStyles.ts             ← COPY
│   │   ├── CustomStylesProvider.tsx    ← COPY (optional)
│   │   ├── CssOverrides.tsx            ← COPY (optional)
│   │   └── styledComponents/           ← COPY ENTIRE FOLDER
│   │       ├── index.ts
│   │       ├── CobraPrimaryButton.tsx
│   │       ├── CobraTextField.tsx
│   │       └── ... (all components)
│   ├── components/
│   │   └── shared/
│   │       └── Grid/
│   │           ├── CobraGrid.css       ← COPY (if using grids)
│   │           └── CobraPaginatedGrid.tsx ← COPY (if using grids)
│   └── docs/
│       ├── COBRA_STYLING_GUIDE.md      ← COPY
│       ├── STYLING_COMPLIANCE_ANALYSIS.md ← COPY
│       └── PROTOTYPE_SETUP_GUIDE.md    ← COPY (this file)
```

**Commands to copy files from COBRA:**

```bash
# From your prototype root directory
# Adjust path to point to your cobra-spa repo

# Copy theme files
mkdir -p src/styles
cp ../cobra-spa/src/styles/Theme.ts src/styles/
cp ../cobra-spa/src/styles/CobraStyles.ts src/styles/
cp ../cobra-spa/src/styles/LayoutStyles.ts src/styles/

# Copy styled components
cp -r ../cobra-spa/src/styles/styledComponents src/styles/

# Copy grid files (if needed)
mkdir -p src/components/shared/Grid
cp ../cobra-spa/src/components/shared/Grid/CobraGrid.css src/components/shared/Grid/
cp ../cobra-spa/src/components/shared/Grid/CobraPaginatedGrid.tsx src/components/shared/Grid/

# Copy documentation
mkdir -p src/docs
cp ../cobra-spa/COBRA_STYLING_GUIDE.md src/docs/
cp ../cobra-spa/STYLING_COMPLIANCE_ANALYSIS.md src/docs/
cp ../cobra-spa/PROTOTYPE_SETUP_GUIDE.md src/docs/
```

### Step 4: Set Up Theme Provider

Update `src/App.tsx`:

```typescript
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { cobraTheme } from './styles/Theme';
import { BrowserRouter } from 'react-router-dom';

// Import AG Grid styles if using grids
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './components/shared/Grid/CobraGrid.css';

function App() {
  return (
    <ThemeProvider theme={cobraTheme}>
      <CssBaseline />
      <BrowserRouter>
        {/* Your app content */}
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
```

### Step 5: Create Your First Test Page

Create `src/pages/TestPage.tsx`:

```typescript
import { Stack } from '@mui/material';
import { CobraNewButton, CobraPrimaryButton, CobraTextField } from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';
import { useState } from 'react';

export const TestPage = () => {
  const [name, setName] = useState('');

  return (
    <Stack
      direction="column"
      spacing={2}
      padding={CobraStyles.Padding.MainWindow}
      style={{ height: '100vh', backgroundColor: '#f8f8f8' }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between">
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
          Test Page
        </span>
        <CobraNewButton onClick={() => alert('Create clicked!')}>
          Create New
        </CobraNewButton>
      </Stack>

      {/* Content */}
      <Stack spacing={CobraStyles.Spacing.FormFields} style={{ maxWidth: 600 }}>
        <CobraTextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <CobraPrimaryButton onClick={() => alert(`Hello, ${name}!`)}>
            Submit
          </CobraPrimaryButton>
        </Stack>
      </Stack>
    </Stack>
  );
};
```

### Step 6: Verify Setup

Run your prototype:

```bash
npm start
```

You should see COBRA-styled components with the silver/blue color scheme.

---

## Working with AI Coding Agents

### Strategy 1: Provide Documentation in Context

When working with Claude Code, GitHub Copilot, or other AI agents:

**Initial Setup Message:**
```
I'm building a prototype that needs to match COBRA's look and feel.
I have the following documentation files available:
- src/docs/COBRA_STYLING_GUIDE.md (complete styling reference)
- src/docs/STYLING_COMPLIANCE_ANALYSIS.md (examples of compliant pages)

Please review COBRA_STYLING_GUIDE.md and use COBRA styled components
for all UI elements. Follow these key rules:

1. Always use components from 'styles/styledComponents' (never plain MUI)
2. Use CobraStyles.Padding and CobraStyles.Spacing constants
3. Follow the color palette defined in the theme
4. Match the patterns shown in STYLING_COMPLIANCE_ANALYSIS.md
```

### Strategy 2: Reference-Driven Development

**When asking for specific features:**

```
Create a facility search page similar to the Facilities page in
STYLING_COMPLIANCE_ANALYSIS.md. It should include:

- A grid with search/filter capabilities (reference: CobraPaginatedGrid)
- A "Create New" button (reference: CobraNewButton)
- Edit/Delete actions (reference: COBRA_STYLING_GUIDE.md Buttons section)

Use the COBRA_STYLING_GUIDE.md color palette and spacing constants.
```

### Strategy 3: Compliance Checking

**After generating code:**

```
Please review the code you just generated against COBRA_STYLING_GUIDE.md
and check for:

1. Are all buttons using COBRA styled components?
2. Is spacing using CobraStyles constants?
3. Are form fields using CobraTextField/CobraFormTextField?
4. Does the layout match the patterns in STYLING_COMPLIANCE_ANALYSIS.md?

List any deviations and suggest corrections.
```

### Strategy 4: Pattern Extraction

**For complex features:**

```
I need to implement [feature description].

Please review these sections in COBRA_STYLING_GUIDE.md:
- Component Library > [relevant section]
- Common Patterns > [relevant pattern]

And this example in STYLING_COMPLIANCE_ANALYSIS.md:
- [Facilities Form or Role Form] > [specific section]

Create an implementation that follows these patterns exactly.
```

---

## Folder Structure for Prototypes

### Minimal Prototype (Single Page Demo)

```
my-prototype/
├── src/
│   ├── styles/                 # COBRA styles
│   ├── docs/                   # Documentation
│   ├── App.tsx                 # Main app with theme
│   └── DemoPage.tsx            # Your demo page
├── package.json
└── README.md
```

### Standard Prototype (Multiple Features)

```
my-prototype/
├── src/
│   ├── styles/                 # COBRA styles
│   ├── components/
│   │   └── shared/
│   │       ├── Grid/           # Grid components (if needed)
│   │       └── Forms/          # Form components (if needed)
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── ListPage.tsx
│   │   └── FormPage.tsx
│   ├── docs/                   # Documentation
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

### Full Prototype (Complete Application)

```
my-prototype/
├── src/
│   ├── styles/                 # COBRA styles
│   ├── components/
│   │   ├── shared/             # Shared components
│   │   └── layout/             # Layout components
│   ├── pages/
│   │   ├── Feature1/
│   │   ├── Feature2/
│   │   └── Admin/
│   ├── api/                    # API integration
│   ├── hooks/                  # Custom hooks
│   ├── utilities/              # Utility functions
│   ├── docs/                   # Documentation
│   ├── App.tsx
│   └── index.tsx
├── package.json
└── README.md
```

---

## Common Prototype Patterns

### Pattern 1: Simple List Page with Create

**Reference**: Facilities.tsx in STYLING_COMPLIANCE_ANALYSIS.md

```typescript
import { Stack } from '@mui/material';
import { CobraNewButton } from '../styles/styledComponents';
import { CobraPaginatedGrid } from '../components/shared/Grid';
import CobraStyles from '../styles/CobraStyles';

export const ItemListPage = () => {
  const gridOptions = {
    columnDefs: [
      { field: "name", headerName: "Name" },
      { field: "category", headerName: "Category" }
    ],
    // ... other grid config
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      padding={CobraStyles.Padding.MainWindow}
      style={{ height: '100%' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <span style={{ fontWeight: 'bold' }}>Items</span>
        <CobraNewButton onClick={handleCreate}>
          Create New Item
        </CobraNewButton>
      </Stack>

      <CobraPaginatedGrid gridOptions={gridOptions} />
    </Stack>
  );
};
```

### Pattern 2: Simple Form Page

**Reference**: Role Form in STYLING_COMPLIANCE_ANALYSIS.md

```typescript
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { CobraTextField, CobraLinkButton, CobraSaveButton } from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';

interface FormData {
  name: string;
  description: string;
}

export const ItemFormPage = () => {
  const { control, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Saving:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ height: '100%' }}>
      <Stack
        direction="column"
        spacing={CobraStyles.Spacing.FormFields}
        padding={CobraStyles.Padding.MainWindow}
      >
        <Stack direction="row" justifyContent="space-between">
          <span style={{ fontWeight: 'bold' }}>Create Item</span>
          <Stack direction="row" spacing={1}>
            <CobraLinkButton onClick={() => window.history.back()}>
              Cancel
            </CobraLinkButton>
            <CobraSaveButton type="submit">
              Save
            </CobraSaveButton>
          </Stack>
        </Stack>

        <CobraTextField
          name="name"
          label="Name *"
          fullWidth
        />

        <CobraTextField
          name="description"
          label="Description"
          multiline
          rows={4}
          fullWidth
        />
      </Stack>
    </form>
  );
};
```

### Pattern 3: Dashboard with Cards

```typescript
import { Grid, Paper, Stack } from '@mui/material';
import CobraStyles from '../styles/CobraStyles';

export const DashboardPage = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      padding={CobraStyles.Padding.MainWindow}
    >
      <span style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
        Dashboard
      </span>

      <Grid container spacing={CobraStyles.Spacing.DashboardWidgets}>
        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: CobraStyles.Padding.MainWindow }}>
            <h3>Card 1</h3>
            <p>Content here...</p>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: CobraStyles.Padding.MainWindow }}>
            <h3>Card 2</h3>
            <p>Content here...</p>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Paper style={{ padding: CobraStyles.Padding.MainWindow }}>
            <h3>Card 3</h3>
            <p>Content here...</p>
          </Paper>
        </Grid>
      </Grid>
    </Stack>
  );
};
```

### Pattern 4: Modal/Dialog Form

**Reference**: COBRA_STYLING_GUIDE.md Dialogs section

```typescript
import { Stack, MenuItem } from '@mui/material';
import { useState } from 'react';
import { CobraDialog, CobraTextField, CobraLinkButton, CobraPrimaryButton } from '../styles/styledComponents';

export const ItemDialog = ({ open, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');

  return (
    <CobraDialog
      open={open}
      onClose={onClose}
      title="Add Item"
      customDialogWidth={600}
    >
      <Stack spacing={1.5} paddingTop={2}>
        <CobraTextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />

        <CobraTextField
          label="Category"
          select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
        >
          <MenuItem value="1">Category 1</MenuItem>
          <MenuItem value="2">Category 2</MenuItem>
        </CobraTextField>

        <Stack direction="row" justifyContent="flex-end" spacing={1} paddingTop={2}>
          <CobraLinkButton onClick={onClose}>
            Cancel
          </CobraLinkButton>
          <CobraPrimaryButton onClick={() => onSave({ name, category })}>
            Save
          </CobraPrimaryButton>
        </Stack>
      </Stack>
    </CobraDialog>
  );
};
```

---

## Troubleshooting

### Issue: Buttons don't look right

**Problem**: Buttons are using default MUI styling instead of COBRA styling.

**Solution**:
1. Check import: `import { CobraPrimaryButton } from '../styles/styledComponents';`
2. Don't import from `@mui/material/Button`
3. Verify theme provider is wrapping your app

### Issue: Colors are wrong

**Problem**: Colors don't match COBRA's silver/blue scheme.

**Solution**:
1. Ensure `ThemeProvider` is set up with `cobraTheme`
2. Check that `CssBaseline` is included
3. Use theme colors via `theme.palette.*` not hardcoded hex values

### Issue: Spacing is inconsistent

**Problem**: Spacing doesn't match COBRA pages.

**Solution**:
1. Always use `CobraStyles.Padding.*` and `CobraStyles.Spacing.*`
2. For MUI Stack components, use `spacing={2}` (which is 16px)
3. Review COBRA_STYLING_GUIDE.md spacing section

### Issue: Grid looks different

**Problem**: AG Grid styling doesn't match COBRA.

**Solution**:
1. Import all three CSS files in correct order:
   ```typescript
   import 'ag-grid-community/styles/ag-grid.css';
   import 'ag-grid-community/styles/ag-theme-alpine.css';
   import './components/shared/Grid/CobraGrid.css';
   ```
2. Use `className="ag-theme-alpine"` on grid
3. Copy CobraGrid.css from COBRA repo

### Issue: TypeScript errors

**Problem**: TypeScript can't find COBRA components.

**Solution**:
1. Ensure `styledComponents/index.ts` exports all components
2. Check that you copied all files from `styledComponents/` folder
3. Restart TypeScript server in VS Code

---

## Example Projects

### Example 1: Minimal Prototype (30 minutes)

**Goal**: Quick demo of a feature concept

**Setup**:
```bash
# 1. Create project
npx create-react-app quick-demo --template typescript
cd quick-demo

# 2. Install minimal dependencies
npm install @mui/material @emotion/react @emotion/styled

# 3. Copy only essential files
cp ../cobra-spa/src/styles/Theme.ts src/styles/
cp ../cobra-spa/src/styles/CobraStyles.ts src/styles/
cp -r ../cobra-spa/src/styles/styledComponents src/styles/
cp ../cobra-spa/COBRA_STYLING_GUIDE.md src/docs/

# 4. Create single demo page
# (Use Pattern 1 or 2 above)

# 5. Run
npm start
```

### Example 2: Standard Prototype (2-3 hours)

**Goal**: Multi-page prototype with forms and lists

**Setup**: Follow [Detailed Setup Process](#detailed-setup-process)

**Include**:
- List page with grid
- Create/Edit form
- View page
- Simple routing

### Example 3: Full Prototype (1-2 days)

**Goal**: Complete functional prototype with API integration

**Setup**: Follow [Detailed Setup Process](#detailed-setup-process)

**Include**:
- Multiple features
- API integration
- Authentication (if needed)
- Advanced components (tabs, dialogs, file uploads)
- Full navigation

---

## Best Practices Checklist

### Before Starting Each Prototype

- [ ] Copy latest COBRA style files
- [ ] Review COBRA_STYLING_GUIDE.md for any updates
- [ ] Check STYLING_COMPLIANCE_ANALYSIS.md for relevant patterns
- [ ] Set up theme provider correctly
- [ ] Test with a simple page first

### During Development

- [ ] Always import from `styles/styledComponents`, never plain MUI
- [ ] Use `CobraStyles.Padding.*` for all padding
- [ ] Use `CobraStyles.Spacing.*` for all spacing
- [ ] Reference color palette from theme, don't hardcode colors
- [ ] Follow button hierarchy (Primary > Secondary > Link)
- [ ] Add proper form validation
- [ ] Include loading/saving states

### Before Demo/Review

- [ ] Review against COBRA_STYLING_GUIDE.md
- [ ] Check all buttons use correct COBRA components
- [ ] Verify spacing matches COBRA standards
- [ ] Test on different screen sizes
- [ ] Check accessibility (labels, tab order)
- [ ] Compare visually to reference pages in STYLING_COMPLIANCE_ANALYSIS.md

---

## AI Agent Prompts Library

### Prompt: Start New Page

```
Create a new [feature name] page following COBRA styling standards.

Reference: src/docs/COBRA_STYLING_GUIDE.md

Requirements:
1. Use Stack layout with CobraStyles.Padding.MainWindow
2. Include page title (bold, left-aligned)
3. Include action buttons in header (right-aligned)
4. Use only COBRA styled components from 'styles/styledComponents'
5. Apply proper spacing using CobraStyles.Spacing constants

The page should include:
- [List specific requirements]

Base it on the [Facilities/Role Form/Logbooks] pattern from STYLING_COMPLIANCE_ANALYSIS.md
```

### Prompt: Review Code for Compliance

```
Review this code for COBRA styling compliance using COBRA_STYLING_GUIDE.md:

[Paste code here]

Check for:
1. ❌ Plain MUI components (should use COBRA styled components)
2. ❌ Hardcoded spacing (should use CobraStyles constants)
3. ❌ Hardcoded colors (should use theme.palette)
4. ❌ Wrong button types (check COBRA_STYLING_GUIDE.md Buttons section)
5. ❌ Missing imports from 'styles/styledComponents'

List all issues and provide corrected code.
```

### Prompt: Convert Existing Code

```
Convert this existing code to use COBRA styling standards:

[Paste code here]

Using COBRA_STYLING_GUIDE.md:
1. Replace all MUI components with COBRA styled components
2. Replace hardcoded spacing with CobraStyles constants
3. Replace hardcoded colors with theme palette references
4. Update button usage to match COBRA button hierarchy
5. Ensure layout follows COBRA patterns

Provide the complete updated code.
```

### Prompt: Create Form Dialog

```
Create a form dialog for [feature name] following COBRA standards.

Reference: COBRA_STYLING_GUIDE.md > Dialogs and Modals section

Requirements:
1. Use CobraDialog component
2. Form fields should use CobraTextField
3. Actions: CobraLinkButton (Cancel) + CobraPrimaryButton (Save)
4. Proper spacing with CobraStyles.Spacing.FormFields
5. Include form validation with react-hook-form

Fields needed:
- [List fields]
```

---

## Quick Reference Card

Print or keep this handy:

```
COBRA STYLING QUICK REFERENCE

IMPORTS
  import { Cobra[Component] } from 'styles/styledComponents';
  import CobraStyles from 'styles/CobraStyles';
  import { cobraTheme } from 'styles/Theme';

LAYOUT
  padding={CobraStyles.Padding.MainWindow}     // 18px
  spacing={CobraStyles.Spacing.FormFields}     // 12px

BUTTONS
  Primary Action    → CobraPrimaryButton
  Create New        → CobraNewButton
  Save             → CobraSaveButton
  Delete           → CobraDeleteButton
  Secondary Action → CobraSecondaryButton
  Cancel/Back      → CobraLinkButton

COLORS
  Primary          → #c0c0c0 (silver)
  Button Blue      → #0020c2 (cobalt)
  Error/Delete     → #e42217 (lava red)
  Background       → #f8f8f8 (light gray)

SPACING
  MainWindow: 18px
  DialogContent: 15px
  FormFields: 12px
  AfterSeparator: 18px

DOCUMENTATION
  Complete Guide   → src/docs/COBRA_STYLING_GUIDE.md
  Examples        → src/docs/STYLING_COMPLIANCE_ANALYSIS.md
  This Guide      → src/docs/PROTOTYPE_SETUP_GUIDE.md
```

---

## Conclusion

With these resources and this setup guide, you can:

1. **Quickly bootstrap** new prototypes with COBRA styling (30 min setup)
2. **Work with AI agents** effectively using the documentation
3. **Maintain consistency** across all your prototypes
4. **Reference working examples** for any pattern you need
5. **Ensure compliance** with COBRA standards

### Next Steps

1. **Bookmark** this guide and the styling documentation
2. **Create a template repository** with the basic setup complete
3. **Practice** by building a simple prototype following Pattern 1 or 2
4. **Share** the documentation with your AI agent at the start of each session
5. **Contribute back** - if you create useful patterns, add them to this guide!

---

**Document Version**: 1.0
**Last Updated**: 2025-11-21
**Maintained By**: COBRA Development Team
