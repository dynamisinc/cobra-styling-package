# COBRA Prototype Foundation

A working example demonstrating the COBRA styling package for rapid prototyping.

## What's Demonstrated

✅ **FontAwesome icons** (regular and solid)
✅ **AG Grid Community Edition**
✅ **All COBRA styled components**
✅ **COBRA theme and colors**
✅ **Common patterns** (list page, form, dialog)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Browser will auto-open at http://localhost:3000
```

## What's Included

### Pages

1. **Dashboard** - Simple overview with cards and stats
2. **List Page** - Grid with search and filtering
3. **Form Page** - Form with validation and styled inputs
4. **Dialog Demo** - Shows various dialog patterns

### Components Demonstrated

- **Buttons**: Primary, Secondary, New, Delete, Save, Link
- **Forms**: TextField, Checkbox, Switch, DateTimePicker
- **Layout**: Dialog, Tabs, Divider, Fieldset
- **Data**: AG Grid with COBRA styling
- **Icons**: FontAwesome Free icons throughout

## Key Features

### 1. License-Free Icons

```typescript
// Using FontAwesome FREE icons
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

<CobraDeleteButton>Delete</CobraDeleteButton>  // Uses faTrashCan
<CobraNewButton>Create</CobraNewButton>        // Uses faPlus
```

### 2. AG Grid Community

```typescript
// No enterprise license required
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

<CobraPaginatedGrid gridOptions={gridOptions} />
```

### 3. COBRA Theme

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { cobraTheme } from './styles/Theme';

// All COBRA colors and styling available
<ThemeProvider theme={cobraTheme}>
  <App />
</ThemeProvider>
```

### 4. Vite Build Tool

This example uses **Vite** - the same modern build tool used in COBRA:

- ⚡ Lightning fast HMR (Hot Module Replacement)
- 🎯 Native ESM for instant development startup
- 📦 Optimized production builds
- 🔧 Matches COBRA's actual build environment

## Project Structure

```
simple-prototype/
├── index.html          (Vite entry point)
├── vite.config.ts      (Vite configuration)
├── src/
│   ├── components/
│   │   └── shared/
│   │       └── Grid/
│   │           ├── CobraGrid.css
│   │           └── CobraPaginatedGrid.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── ListPage.tsx
│   │   ├── FormPage.tsx
│   │   └── DialogDemo.tsx
│   ├── styles/
│   │   ├── Theme.ts
│   │   ├── CobraStyles.ts
│   │   ├── LayoutStyles.ts
│   │   └── styledComponents/
│   │       └── [25+ components]
│   ├── utilities/
│   │   └── icons/
│   │       └── icons.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── package.json
└── README.md
```

## Validation Points

This example validates:

- ✅ All FontAwesome icons render correctly
- ✅ Theme colors match COBRA application
- ✅ All styled components work properly
- ✅ AG Grid displays and functions correctly
- ✅ TypeScript compilation succeeds
- ✅ Build process completes without errors

## Building

```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Next Steps

After validating this example works:

1. Use as template for new prototypes
2. Customize for specific use cases
3. Refer to main documentation for advanced patterns
4. Migrate to COBRA using PROTOTYPE_TO_COBRA_MIGRATION_GUIDE.md

## Documentation

For complete documentation, see:
- [COBRA_STYLING_GUIDE.md](../../docs/COBRA_STYLING_GUIDE.md)
- [PROTOTYPE_SETUP_GUIDE.md](../../docs/PROTOTYPE_SETUP_GUIDE.md)
- [AI_AGENT_CONTEXT.md](../../docs/AI_AGENT_CONTEXT.md)

## Updating Styling Files

The styling files in this example are a snapshot copied from the main package. To update them:

```bash
# Windows
.\setup-cobra-styles.ps1

# Mac/Linux
./setup-cobra-styles.sh
```

This copies the latest styling files from the main package into this example.

**Last Synced**: 2025-11-24 (initial version)

---

## Support

For complete documentation, see the main package documentation files in `../../docs/`

**Version**: 1.0.0
**Last Updated**: 2025-11-24
**Purpose**: COBRA prototype foundation template
