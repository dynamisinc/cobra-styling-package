# COBRA SPA Styling Guide

## Overview

This document provides comprehensive styling guidelines for the COBRA SPA application. It is designed to help developers create rapid standalone prototypes and new tools that match COBRA's look and feel. The Logbooks and Facilities pages serve as reference implementations of these patterns.

---

## Table of Contents

1. [Technology Stack](#technology-stack)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout Architecture](#layout-architecture)
5. [Spacing and Padding Standards](#spacing-and-padding-standards)
6. [Component Library](#component-library)
7. [Buttons](#buttons)
8. [Form Controls](#form-controls)
9. [Data Grids](#data-grids)
10. [Dialogs and Modals](#dialogs-and-modals)
11. [Tabs](#tabs)
12. [Navigation](#navigation)
13. [Files to Copy](#files-to-copy)
14. [Quick Start for Prototypes](#quick-start-for-prototypes)

---

## Technology Stack

### Core Dependencies
- **React**: UI framework
- **Material-UI (MUI)**: v7.0.2 - Component library
- **MUI X Date Pickers**: v8.1.0 - Advanced date/time components
- **AG Grid**: Enterprise data grid solution
- **FontAwesome**: Icon library (Sharp Light and Sharp Solid variants)
- **TypeScript**: Type-safe development

### Styling Approach
- **Styled Components**: MUI's `styled()` API for component styling
- **Theme Provider**: Centralized theme configuration
- **CSS Modules**: Minimal CSS files for specific cases (mainly AG Grid customization)

---

## Color Palette

### Primary Colors

```typescript
primary: {
  dark: '#696969',      // dim gray
  main: '#c0c0c0',      // silver
  light: '#dadbdd',     // silver white
  contrastText: '#1a1a1a'
}
```

### Secondary Colors

```typescript
secondary: {
  main: '#b22222'       // firebrick
}
```

### Background Colors

```typescript
background: {
  default: '#f8f8f8',   // light gray (page background)
  paper: '#ffffff'      // white (card/paper background)
}
```

### Text Colors

```typescript
text: {
  primary: '#1a1a1a',   // dark gray (main text)
  secondary: '#848482'  // medium gray (secondary text)
}
```

### Action Colors

#### Button Primary (Blue)
```typescript
buttonPrimary: {
  main: '#0020c2',      // cobalt blue
  light: '#0000ff',     // blue
  dark: '#00008b',      // dark blue
  contrastText: '#ffffff' // white
}
```

#### Button Delete (Red)
```typescript
buttonDelete: {
  main: '#e42217',      // lava red
  light: '#ff0000',     // red
  dark: '#c11b17',      // chilli pepper
  contrastText: '#ffffff' // white
}
```

#### Link Button (Blue)
```typescript
linkButton: {
  main: '#0020c2',      // cobalt blue
  light: '#DBE9FA',     // light blue background on hover
  dark: '#00008b',      // dark blue
  contrastText: '#ffffff' // white
}
```

### Semantic Colors

```typescript
error: {
  main: '#e42217'       // lava red
}

success: {
  main: '#08682a'       // dark green
}

info: {
  main: '#0020c2',      // cobalt blue
  light: '#0000ff',     // blue
  dark: '#00008b'       // dark blue
}
```

### UI-Specific Colors

#### Grid Colors
```typescript
grid: {
  main: '#DBE9FA',      // selected row background
  light: '#EAF2FB'      // detail row background
}
```

#### Border Colors
```typescript
border: {
  main: 'rgba(26, 26, 26, 0.23)' // standard border color
}

divider: '#848482'      // divider line color
```

#### Breadcrumb
```typescript
breadcrumb: {
  background: '#F1F1F1' // breadcrumb bar background
}
```

#### Notifications
```typescript
notifications: {
  error: '#EFB6B6',
  errorText: '#b22222',
  info: '#DBE9FA',
  success: '#AEFBB8',
  successText: '#008000',
  warning: '#F9F9BE',
  warningText: '#6F4E37'
}
```

#### Event Actions (for history/activity logs)
```typescript
eventAction: {
  create: '#4caf50',    // green
  edit: '#2196f3',      // blue
  delete: '#f44336',    // red
  default: '#9e9e9e'    // grey
}
```

#### Status Chart
```typescript
statusChart: {
  grey: '#C0C0C0',
  red: '#C11B17',       // chilli pepper
  yellow: '#FFEF00',    // canary yellow
  green: '#008000',
  black: '#000000'
}
```

---

## Typography

### Font Settings
- **Default Font**: System font stack (inherited from MUI defaults)
- **Font Sizes**: Use MUI's size variants (`small`, `medium`, `large`)
- **Icon Sizes**:
  - Small: 16px
  - Medium: 20-24px
  - Large: 32px+

### Font Weights
- **Normal**: 400 (body text)
- **Medium**: 500 (headers, emphasized text)
- **Bold**: 700 (titles, strong emphasis)

### Text Styling Examples

```typescript
// Page Title
{
  fontWeight: 'bold',
  fontSize: '1rem'
}

// Secondary Text
{
  color: theme.palette.text.secondary,
  fontSize: '13px',
  fontWeight: '500'
}
```

---

## Layout Architecture

### Core Layout Dimensions

```typescript
cssStyling: {
  headerHeight: 54,          // px
  drawerClosedWidth: 64,     // px
  drawerOpenWidth: 288       // px
}
```

### Application Structure

```
┌─────────────────────────────────────────────────┐
│ Header (54px height)                            │
│ - Event Menu | Event Status | User Menu         │
├─────────────────────────────────────────────────┤
│ Breadcrumb Bar (#F1F1F1 background)            │
├──────┬──────────────────────────────────────────┤
│ Nav  │ Main Content Area                        │
│ Menu │ (background: #f8f8f8)                    │
│ 64px │                                          │
│ or   │                                          │
│288px │                                          │
└──────┴──────────────────────────────────────────┘
```

### Main Window Layout Pattern

All main content pages should follow this pattern:

```tsx
<Stack
  direction="column"
  justifyContent="flex-start"
  alignItems="stretch"
  spacing={2}
  padding={CobraStyles.Padding.MainWindow} // 18px
  style={{height: '100%'}}
>
  {/* Page header with title and actions */}
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={2}
  >
    <span style={{fontWeight: 'bold'}}>Page Title</span>
    <CobraNewButton>Create New</CobraNewButton>
  </Stack>

  {/* Main content (grid, form, etc.) */}
  <CobraPaginatedGrid gridRef={gridRef} gridOptions={gridOptions} />
</Stack>
```

---

## Spacing and Padding Standards

### Standard Spacing Values

```typescript
CobraStyles.Padding = {
  MainWindow: '18px',      // Main content area padding
  DialogContent: '15px',   // Dialog/modal content padding
  PopoverContent: '12px'   // Popover content padding
}

CobraStyles.Spacing = {
  AfterSeparator: '18px',     // Space after dividers
  DashboardWidgets: '20px',   // Space between dashboard widgets
  IconAndText: '5px',         // Space between icon and text
  FormFields: '12px'          // Space between form fields
}
```

### MUI Stack Spacing
- **Default spacing**: 2 (16px using MUI's 8px base)
- **Tight spacing**: 1 (8px)
- **Loose spacing**: 3 (24px)

---

## Component Library

COBRA uses custom styled components built on MUI. All custom components are located in `src/styles/styledComponents/`.

### Component Index

#### Buttons
- `CobraPrimaryButton`
- `CobraSecondaryButton`
- `CobraNewButton` (Primary with plus icon)
- `CobraDeleteButton` (Red with trash icon)
- `CobraLinkButton`
- `CobraSaveButton`
- `CobraIconButton`
- `CobraToolbarButton`

#### Form Controls
- `CobraTextField`
- `CobraOutlinedInput`
- `CobraCenteredOutlinedInput`
- `CobraCheckbox`
- `CobraSwitch`
- `CobraRadio`
- `CobraDateTimePicker`

#### Layout
- `CobraDialog`
- `CobraFieldset`
- `CobraDivider`
- `CobraFullHeightGrid`
- `CobraStripedTableRow`

#### Navigation
- `CobraTabs`
- `CobraTab`
- `CobraLink`

#### Display
- `CobraBadge`
- `CobraRichTextReadOnly`
- `CobraVariableList`

---

## Buttons

### Primary Button

**Use for**: Main actions, confirmations, submissions

```tsx
import { CobraPrimaryButton } from 'styles/styledComponents';

<CobraPrimaryButton onClick={handleSave}>
  Save
</CobraPrimaryButton>
```

**Styling**:
- Border radius: 50px (fully rounded)
- Background: `#0020c2` (cobalt blue)
- Text: White
- Hover: `#0000ff` (lighter blue)
- Active: `#00008b` (darker blue)
- Padding: 5px top/bottom, 20px left/right
- Text transform: none (preserves case)

### Secondary Button

**Use for**: Alternative actions, cancel operations

```tsx
import { CobraSecondaryButton } from 'styles/styledComponents';

<CobraSecondaryButton onClick={handleCancel}>
  Cancel
</CobraSecondaryButton>
```

**Styling**:
- Border radius: 50px
- Background: White
- Border: 2px solid `#0020c2`
- Text: `#0020c2`
- Hover: Border and text change to `#0000ff`

### New Button

**Use for**: Creating new entities

```tsx
import { CobraNewButton } from 'styles/styledComponents';

<CobraNewButton onClick={handleCreate}>
  Create New Facility
</CobraNewButton>
```

**Features**: Automatically includes a plus icon (FontAwesome `faPlus`)

### Delete Button

**Use for**: Destructive actions

```tsx
import { CobraDeleteButton } from 'styles/styledComponents';

<CobraDeleteButton onClick={handleDelete}>
  Delete
</CobraDeleteButton>
```

**Styling**:
- Background: `#e42217` (lava red)
- Includes trash can icon
- White text

### Link Button

**Use for**: Less prominent actions, navigation

```tsx
import { CobraLinkButton } from 'styles/styledComponents';

<CobraLinkButton onClick={handleCancel}>
  Cancel
</CobraLinkButton>
```

**Styling**:
- No background (transparent)
- Text color: `#0020c2`
- Hover: Light blue background `#DBE9FA`
- No border

### Icon Button

**Use for**: Icon-only actions in toolbars

```tsx
import { CobraIconButton } from 'styles/styledComponents';

<CobraIconButton onClick={handleAction}>
  <FontAwesomeIcon icon={faPlus} />
</CobraIconButton>
```

**Styling**:
- Circular (border-radius: 999px)
- Size: 32x32px
- Hover: Primary main color background

### Button Size Standard
All buttons default to MUI's `small` size variant as configured in the theme.

---

## Form Controls

### Text Field

```tsx
import { CobraTextField } from 'styles/styledComponents';

<CobraTextField
  label="Name"
  value={value}
  onChange={handleChange}
  fullWidth
/>
```

**Features**:
- Default size: `small`
- Background: White (`#ffffff`)
- Focus color: `#0020c2` (cobalt blue)
- Hover border: `#0020c2`

### Select Field

```tsx
<CobraTextField
  select
  label="Category"
  value={category}
  onChange={handleChange}
>
  {options.map((option) => (
    <MenuItem key={option.id} value={option.id}>
      {option.name}
    </MenuItem>
  ))}
</CobraTextField>
```

### Checkbox

```tsx
import { CobraCheckbox } from 'styles/styledComponents';

<FormControlLabel
  control={<CobraCheckbox checked={checked} onChange={handleChange} />}
  label="Enable feature"
/>
```

### Switch

```tsx
import { CobraSwitch } from 'styles/styledComponents';

<FormControlLabel
  control={<CobraSwitch checked={enabled} onChange={handleToggle} />}
  label="Active"
/>
```

**Styling**: Checked state uses cobalt blue (`#0020c2`)

### Date Time Picker

```tsx
import { CobraDateTimePicker } from 'styles/styledComponents';

<CobraDateTimePicker
  label="Start Date"
  value={startDate}
  onChange={setStartDate}
/>
```

### Form Layout Pattern

```tsx
<Stack spacing={CobraStyles.Spacing.FormFields}>
  <CobraTextField label="Field 1" />
  <CobraTextField label="Field 2" />
  <CobraTextField label="Field 3" select>
    <MenuItem value="1">Option 1</MenuItem>
  </CobraTextField>
</Stack>
```

---

## Data Grids

COBRA uses AG Grid Enterprise with custom styling.

### Grid Implementation

```tsx
import { CobraPaginatedGrid } from 'components/shared/Grid';

const gridRef = React.useRef<AgGridReact>(null);

const gridOptions: GridOptions = {
  columnDefs: [
    {
      field: "Name",
      headerName: translate("Name"),
      sortable: true,
      filter: 'agTextColumnFilter',
      flex: 1
    }
  ],
  defaultColDef: {
    resizable: true,
    sortingOrder: ['asc', 'desc']
  },
  getRowId: (params) => params.data.Id,
  onGridReady: (event) => event.api.sizeColumnsToFit()
};

<CobraPaginatedGrid gridRef={gridRef} gridOptions={gridOptions} />
```

### Grid Styling (AG Grid Theme Customization)

File: `src/components/shared/Grid/CobraGrid.css`

```css
.ag-theme-alpine {
  --ag-row-hover-color: #f1f1f1;
  --ag-range-selection-border-style: none;
  --ag-selected-row-background-color: #DBE9FA;
}

.ag-details-row .ag-row {
  background-color: #EAF2FB;
}

.ag-row-group-expanded {
  background-color: #DBE9FA !important;
}
```

### Grid Features
- **Pagination**: Default page size 20
- **Page options**: [10, 20, 50, 100]
- **Server-side data**: Required
- **Sorting**: Enabled on columns
- **Filtering**: Text and date filters available
- **Resizable columns**: Enabled by default

### Common Column Definitions

```typescript
// Edit column
{
  cellRenderer: EditIconRenderer,
  headerName: '',
  maxWidth: 50,
  sortable: false,
  filter: false
}

// Name column
{
  field: "Name",
  headerName: translate("Name"),
  sortable: true,
  filter: 'agTextColumnFilter',
  filterParams: textFieldFilterParams,
  flex: 1
}

// Date column
{
  field: "Modified",
  headerName: translate("LastModified"),
  sortable: true,
  filter: 'agDateColumnFilter',
  filterParams: dateFieldFilterParams,
  valueFormatter: CobraGridDateFormatter,
  flex: 1
}

// Delete column
{
  cellRenderer: DeleteIconRenderer,
  headerName: '',
  maxWidth: 50,
  sortable: false,
  filter: false
}
```

---

## Dialogs and Modals

### CobraDialog Component

```tsx
import { CobraDialog } from 'styles/styledComponents';

<CobraDialog
  open={isOpen}
  onClose={handleClose}
  title="Dialog Title"
  customDialogWidth={400}
  contentWidth={400}
>
  <DialogContent>
    {/* Dialog content */}
  </DialogContent>
  <Stack direction="row" justifyContent="flex-end" spacing={1}>
    <CobraLinkButton onClick={handleClose}>
      Cancel
    </CobraLinkButton>
    <CobraPrimaryButton onClick={handleSave}>
      Save
    </CobraPrimaryButton>
  </Stack>
</CobraDialog>
```

### Dialog Styling
- **Background**: `#f8f8f8` (matches page background)
- **Title bar**: Primary main color (`#c0c0c0`), 40px height
- **Content padding**: 15px
- **Close button**: Top right (or top left for RTL)
- **Action buttons**: Bottom right, 20px padding top

### Dialog Size Guidelines
- **Small**: 400px width
- **Medium**: 600-800px width
- **Large**: 1000px+ width

---

## Tabs

### Tab Implementation

```tsx
import { CobraTabs, CobraTab } from 'styles/styledComponents';

<CobraTabs value={currentTab} onChange={handleTabChange}>
  <CobraTab
    label="Tab 1"
    value="tab1"
  />
  <CobraTab
    label="Tab 2"
    value="tab2"
    badgeMessage="3"
  />
  <CobraTab
    label="Tab 3"
    value="tab3"
    onDelete={handleTabDelete}
    deleteMenuItemText="Close"
    deleteMenuItemIcon={faXmark}
  />
</CobraTabs>
```

### Tab Features
- **Badge support**: Display notification count
- **Closable tabs**: Optional delete/close functionality
- **Context menu**: Edit and delete actions
- **Hover states**: Light primary color on hover
- **Selected state**: Primary contrast text color

### Tab Styling
- Text transform: none (preserves case)
- Min width: 0 (allows flexible sizing)
- Padding: 5px all sides
- Min height: 48px

---

## Navigation

### Navigation Menu (Left Sidebar)

**Closed state**: 64px wide
**Open state**: 288px wide

#### Menu Item Structure
- **Icon**: 20px FontAwesome icon
- **Text**: Hidden when closed, visible when open
- **Hover**: Light primary background
- **Selected**: Border indicator (4px)

#### Menu Sections
1. **Home link** (top)
2. **Tools/Pages** (middle, scrollable)
3. **Admin link + Collapse button** (bottom)

### Header Structure

**Height**: 54px

**Layout**:
```
┌──────────────────────────────────────────────────┐
│ Event Menu | Event Status | Inbox | User Menu   │
├──────────────────────────────────────────────────┤
│ Breadcrumb > Navigation > Current Page | Position│
└──────────────────────────────────────────────────┘
```

**Colors**:
- Background: `#dadbdd` (primary light)
- Breadcrumb bar: `#F1F1F1`
- Text: `#848482` (secondary text)

### Breadcrumbs

```tsx
// Breadcrumb segments
const segments: BreadcrumbSegment[] = [
  { Title: "Home", Url: homeRoute },
  { Title: "Facilities", Url: facilitiesRoute },
  { Title: "Edit Facility" } // No URL = current page
];
```

**Separator**: Forward slash (/)
**Link color**: `#848482`
**Current page**: Not a link, same color

---

## Files to Copy

For creating a new prototype application that matches COBRA's styling:

### Essential Files

1. **Theme Configuration**
   - `src/styles/Theme.ts` - Complete theme definition
   - `src/styles/CobraStyles.ts` - Spacing/padding constants
   - `src/styles/LayoutStyles.ts` - Layout components

2. **Styled Components Directory**
   - Copy entire `src/styles/styledComponents/` folder
   - Contains all button, form, and UI component definitions

3. **Grid Styling**
   - `src/components/shared/Grid/CobraGrid.css` - AG Grid customization

4. **Custom Styles Provider**
   - `src/styles/CustomStylesProvider.tsx` - Theme provider setup
   - `src/styles/CssOverrides.tsx` - Global CSS overrides

### Optional Files (for advanced features)

5. **Grid Components**
   - `src/components/shared/Grid/CobraPaginatedGrid.tsx`
   - `src/components/shared/Grid/PageSizeSelector.tsx`
   - `src/components/shared/Grid/PaginationControls.tsx`

6. **Form Controls**
   - `src/components/shared/FormControls/` - Custom form components

---

## Quick Start for Prototypes

### 1. Install Dependencies

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/sharp-light-svg-icons @fortawesome/sharp-solid-svg-icons
npm install ag-grid-community ag-grid-react ag-grid-enterprise
```

### 2. Setup Theme Provider

```tsx
// App.tsx
import { ThemeProvider } from '@mui/material/styles';
import { cobraTheme } from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={cobraTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### 3. Create a Basic Page

```tsx
import { Stack } from '@mui/material';
import { CobraNewButton, CobraPrimaryButton } from 'styles/styledComponents';

function MyPrototypePage() {
  return (
    <Stack
      direction="column"
      spacing={2}
      padding="18px"
      style={{ height: '100%' }}
    >
      <Stack direction="row" justifyContent="space-between">
        <span style={{ fontWeight: 'bold' }}>Page Title</span>
        <CobraNewButton>Create New</CobraNewButton>
      </Stack>

      {/* Your content */}
    </Stack>
  );
}
```

### 4. Create a Form

```tsx
import { Stack } from '@mui/material';
import { CobraTextField, CobraPrimaryButton, CobraLinkButton } from 'styles/styledComponents';

function MyForm() {
  return (
    <Stack spacing={1.5}>
      <CobraTextField label="Name" fullWidth />
      <CobraTextField label="Description" fullWidth multiline rows={3} />
      <CobraTextField label="Category" select fullWidth>
        <MenuItem value="1">Category 1</MenuItem>
        <MenuItem value="2">Category 2</MenuItem>
      </CobraTextField>

      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        <CobraLinkButton>Cancel</CobraLinkButton>
        <CobraPrimaryButton>Save</CobraPrimaryButton>
      </Stack>
    </Stack>
  );
}
```

### 5. Import AG Grid Styles

```tsx
// In your main component or App.tsx
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './styles/CobraGrid.css'; // Custom COBRA grid styles
```

---

## Best Practices

### 1. Consistency
- Always use `CobraStyles.Padding` and `CobraStyles.Spacing` constants
- Prefer COBRA styled components over plain MUI components
- Use theme colors instead of hardcoded hex values

### 2. Responsive Design
- Use MUI's `Stack` component for layouts
- Use `flex` values for grid columns instead of fixed widths
- Test with different screen sizes

### 3. Accessibility
- Include `aria-label` on icon buttons
- Use semantic HTML elements
- Ensure sufficient color contrast

### 4. Performance
- Use React.memo for expensive components
- Implement virtualization for long lists
- Use AG Grid's server-side row model for large datasets

### 5. Internationalization
- Use translation keys for all user-facing text
- Support RTL layouts where needed
- Consider cultural date/time formats

---

## Component Examples Reference

### Reference Pages in COBRA
- **Logbooks**: [src/pages/Logbooks/Logbook.tsx](src/pages/Logbooks/Logbook.tsx)
- **Logbook Dashboard**: [src/pages/Logbooks/LogbookDashboard.tsx](src/pages/Logbooks/LogbookDashboard.tsx)
- **Facilities**: [src/pages/Facilities/Facilities.tsx](src/pages/Facilities/Facilities.tsx)

These pages demonstrate:
- Proper page layout with padding and spacing
- Grid implementation with server-side data
- Form dialogs and modals
- Tab implementation with badges
- Action buttons and toolbars
- Breadcrumb integration

---

## Common Patterns

### Master-Detail Page

```tsx
<Stack direction="column" spacing={2} padding="18px" style={{height: '100%'}}>
  {/* Header */}
  <Stack direction="row" justifyContent="space-between">
    <span style={{fontWeight: 'bold'}}>Items</span>
    <CobraNewButton onClick={handleCreate}>Create New</CobraNewButton>
  </Stack>

  {/* Grid */}
  <CobraPaginatedGrid gridRef={gridRef} gridOptions={gridOptions} />
</Stack>
```

### Form Dialog

```tsx
<CobraDialog
  open={isOpen}
  onClose={handleClose}
  title="Add Item"
  customDialogWidth={600}
>
  <Stack spacing={1.5}>
    {/* Form fields */}
  </Stack>
  <Stack direction="row" justifyContent="flex-end" spacing={1} paddingTop={2}>
    <CobraLinkButton onClick={handleClose}>Cancel</CobraLinkButton>
    <CobraPrimaryButton onClick={handleSave}>Save</CobraPrimaryButton>
  </Stack>
</CobraDialog>
```

### Toolbar

```tsx
<Stack direction="row" spacing={1} alignItems="center">
  <CobraIconButton onClick={handleAction1}>
    <FontAwesomeIcon icon={faIcon1} />
  </CobraIconButton>
  <CobraToolbarSeparator />
  <CobraIconButton onClick={handleAction2}>
    <FontAwesomeIcon icon={faIcon2} />
  </CobraIconButton>
</Stack>
```

### Toggle Button Group

```tsx
<ToggleButtonGroup
  exclusive
  value={viewMode}
  onChange={handleViewChange}
>
  <ToggleButton value="list">
    <FontAwesomeIcon icon={faList} />
  </ToggleButton>
  <ToggleButton value="grid">
    <FontAwesomeIcon icon={faGrid} />
  </ToggleButton>
</ToggleButtonGroup>
```

---

## Troubleshooting

### Issue: Colors don't match
**Solution**: Ensure you're using the theme colors via `theme.palette.*` instead of hardcoded values

### Issue: Buttons look wrong
**Solution**: Import from `styles/styledComponents` not `@mui/material` directly

### Issue: Grid styling is off
**Solution**: Import `CobraGrid.css` and use `ag-theme-alpine` class

### Issue: Spacing is inconsistent
**Solution**: Use `CobraStyles.Padding.*` and `CobraStyles.Spacing.*` constants

---

## Additional Resources

### Internal Documentation
- Styled Components README: [src/styles/styledComponents/README.md](src/styles/styledComponents/README.md)
- Layout Styles: [src/styles/LayoutStyles.ts](src/styles/LayoutStyles.ts)

### External Documentation
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- [AG Grid Documentation](https://www.ag-grid.com/react-data-grid/)
- [FontAwesome Icons](https://fontawesome.com/icons)

---

## Version Information

**Document Version**: 1.0
**COBRA Version**: Current (as of analysis date)
**MUI Version**: 7.0.2
**Last Updated**: 2025-11-21

---

## Contact

For questions about this styling guide or COBRA development standards, please contact the COBRA development team.
