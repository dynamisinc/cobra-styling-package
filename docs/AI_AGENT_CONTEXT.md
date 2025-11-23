# COBRA Styling Context for AI Agents

## Purpose
Copy and paste this file into your conversation with AI coding agents (Claude Code, GitHub Copilot, ChatGPT, etc.) when starting work on COBRA prototypes. It provides essential context for maintaining consistent styling.

---

## Quick Context for AI Agent

```
I'm building a prototype that must match COBRA SPA application styling.

KEY REQUIREMENTS:
1. Use COBRA styled components from 'styles/styledComponents' (NEVER plain MUI)
2. Use CobraStyles constants for spacing and padding
3. Follow COBRA color palette (silver/blue theme)
4. Match patterns from reference implementations

AVAILABLE DOCUMENTATION:
- COBRA_STYLING_GUIDE.md (complete reference)
- STYLING_COMPLIANCE_ANALYSIS.md (working examples)
- PROTOTYPE_SETUP_GUIDE.md (setup instructions)
```

---

## Essential Rules for AI Agents

### 1. Component Imports

✅ **CORRECT:**
```typescript
import { CobraPrimaryButton, CobraTextField } from 'styles/styledComponents';
```

❌ **WRONG:**
```typescript
import { Button, TextField } from '@mui/material';
```

### 2. Spacing and Padding

✅ **CORRECT:**
```typescript
import CobraStyles from 'styles/CobraStyles';

<Stack
  spacing={CobraStyles.Spacing.FormFields}
  padding={CobraStyles.Padding.MainWindow}
>
```

❌ **WRONG:**
```typescript
<Stack spacing={2} padding="20px">
```

### 3. Colors

✅ **CORRECT:**
```typescript
import { useTheme } from '@mui/material/styles';

const theme = useTheme();
backgroundColor: theme.palette.background.default
```

❌ **WRONG:**
```typescript
backgroundColor: '#f8f8f8'
```

### 4. Button Hierarchy

```typescript
// Primary action (main CTA)
<CobraPrimaryButton>Save</CobraPrimaryButton>

// Create new entity
<CobraNewButton>Create New</CobraNewButton>

// Save with loading state
<CobraSaveButton isSaving={isSaving}>Save</CobraSaveButton>

// Destructive action
<CobraDeleteButton>Delete</CobraDeleteButton>

// Secondary action
<CobraSecondaryButton>Make a Copy</CobraSecondaryButton>

// Cancel, Back, or less prominent actions
<CobraLinkButton>Cancel</CobraLinkButton>
```

---

## Common Patterns for AI Agents

### Page Layout Template

```typescript
import { Stack } from '@mui/material';
import CobraStyles from 'styles/CobraStyles';

export const MyPage = () => {
  return (
    <Stack
      direction="column"
      spacing={2}
      padding={CobraStyles.Padding.MainWindow}
      style={{ height: '100%' }}
    >
      {/* Header */}
      <Stack direction="row" justifyContent="space-between">
        <span style={{ fontWeight: 'bold' }}>Page Title</span>
        {/* Action buttons */}
      </Stack>

      {/* Content */}
    </Stack>
  );
};
```

### Form Template

```typescript
import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { CobraTextField, CobraLinkButton, CobraSaveButton } from 'styles/styledComponents';
import CobraStyles from 'styles/CobraStyles';

export const MyForm = () => {
  const { control, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={CobraStyles.Spacing.FormFields}>
        <CobraTextField label="Field 1" fullWidth />

        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <CobraLinkButton>Cancel</CobraLinkButton>
          <CobraSaveButton type="submit">Save</CobraSaveButton>
        </Stack>
      </Stack>
    </form>
  );
};
```

### Dialog Template

```typescript
import { Stack } from '@mui/material';
import { CobraDialog, CobraTextField, CobraLinkButton, CobraPrimaryButton } from 'styles/styledComponents';

export const MyDialog = ({ open, onClose }) => {
  return (
    <CobraDialog
      open={open}
      onClose={onClose}
      title="Dialog Title"
      customDialogWidth={600}
    >
      <Stack spacing={1.5} paddingTop={2}>
        <CobraTextField label="Field 1" fullWidth />

        <Stack direction="row" justifyContent="flex-end" spacing={1} paddingTop={2}>
          <CobraLinkButton onClick={onClose}>Cancel</CobraLinkButton>
          <CobraPrimaryButton>Save</CobraPrimaryButton>
        </Stack>
      </Stack>
    </CobraDialog>
  );
};
```

---

## Color Palette Quick Reference

```typescript
// Theme colors (use via theme.palette.*)
primary.main: '#c0c0c0'          // silver
primary.light: '#dadbdd'         // silver white
primary.dark: '#696969'          // dim gray
buttonPrimary.main: '#0020c2'    // cobalt blue
buttonDelete.main: '#e42217'     // lava red
background.default: '#f8f8f8'    // light gray page background
background.paper: '#ffffff'      // white card background
text.primary: '#1a1a1a'         // dark gray text
text.secondary: '#848482'       // medium gray text
```

---

## Spacing Constants Quick Reference

```typescript
CobraStyles.Padding.MainWindow: '18px'
CobraStyles.Padding.DialogContent: '15px'
CobraStyles.Padding.PopoverContent: '12px'

CobraStyles.Spacing.FormFields: '12px'
CobraStyles.Spacing.AfterSeparator: '18px'
CobraStyles.Spacing.DashboardWidgets: '20px'
CobraStyles.Spacing.IconAndText: '5px'
```

---

## Available COBRA Components

### Buttons
- CobraPrimaryButton
- CobraSecondaryButton
- CobraNewButton (primary + plus icon)
- CobraDeleteButton (red + trash icon)
- CobraLinkButton
- CobraSaveButton (with isSaving prop)
- CobraIconButton
- CobraToolbarButton

### Form Controls
- CobraTextField
- CobraCheckbox
- CobraSwitch
- CobraRadio
- CobraDateTimePicker
- CobraOutlinedInput
- CobraCenteredOutlinedInput

### Layout
- CobraDialog
- CobraFieldset
- CobraDivider
- CobraFullHeightGrid

### Navigation
- CobraTabs
- CobraTab
- CobraLink

### Display
- CobraBadge
- CobraStripedTableRow
- CobraVariableList
- CobraRichTextReadOnly

### Grid
- CobraPaginatedGrid (AG Grid wrapper)
- CobraBasicClientSideGrid

---

## Validation Checklist for AI Agents

Before providing code, verify:

- [ ] All buttons use COBRA components (not plain MUI)
- [ ] All form fields use COBRA components
- [ ] Spacing uses CobraStyles constants
- [ ] Colors reference theme.palette (no hardcoded hex)
- [ ] Layout follows Stack pattern with proper direction
- [ ] Imports come from 'styles/styledComponents'
- [ ] Page padding is CobraStyles.Padding.MainWindow
- [ ] Form spacing is CobraStyles.Spacing.FormFields

---

## Example Compliance Check

**Input code:**
```typescript
import { Button, TextField } from '@mui/material';

function MyForm() {
  return (
    <div style={{ padding: '20px' }}>
      <TextField label="Name" />
      <Button variant="contained">Save</Button>
    </div>
  );
}
```

**Corrected code:**
```typescript
import { Stack } from '@mui/material';
import { CobraTextField, CobraSaveButton } from 'styles/styledComponents';
import CobraStyles from 'styles/CobraStyles';

function MyForm() {
  return (
    <Stack
      spacing={CobraStyles.Spacing.FormFields}
      padding={CobraStyles.Padding.MainWindow}
    >
      <CobraTextField label="Name" fullWidth />
      <CobraSaveButton>Save</CobraSaveButton>
    </Stack>
  );
}
```

---

## Reference Pages to Study

When the AI agent needs examples:

**Simple Forms:**
- Reference: STYLING_COMPLIANCE_ANALYSIS.md > Admin Role Form
- Use for: Permission management, simple create/edit forms

**Complex Forms:**
- Reference: STYLING_COMPLIANCE_ANALYSIS.md > Facilities Form
- Use for: Multi-section forms, tabs, file uploads, nested dialogs

**List/Grid Pages:**
- Reference: COBRA_STYLING_GUIDE.md > Data Grids section
- Use for: Searchable lists, server-side data, pagination

**Dialogs:**
- Reference: COBRA_STYLING_GUIDE.md > Dialogs and Modals section
- Use for: Modal forms, confirmations, popups

---

## Common Mistakes to Avoid

### Mistake 1: Using Plain MUI Components
```typescript
// ❌ WRONG
import { Button } from '@mui/material';
<Button variant="contained">Save</Button>

// ✅ CORRECT
import { CobraPrimaryButton } from 'styles/styledComponents';
<CobraPrimaryButton>Save</CobraPrimaryButton>
```

### Mistake 2: Hardcoded Spacing
```typescript
// ❌ WRONG
<Stack spacing={2} padding="20px">

// ✅ CORRECT
import CobraStyles from 'styles/CobraStyles';
<Stack spacing={CobraStyles.Spacing.FormFields}
       padding={CobraStyles.Padding.MainWindow}>
```

### Mistake 3: Hardcoded Colors
```typescript
// ❌ WRONG
style={{ backgroundColor: '#f8f8f8' }}

// ✅ CORRECT
import { useTheme } from '@mui/material/styles';
const theme = useTheme();
style={{ backgroundColor: theme.palette.background.default }}
```

### Mistake 4: Wrong Button for Action
```typescript
// ❌ WRONG - Delete action using primary button
<CobraPrimaryButton>Delete</CobraPrimaryButton>

// ✅ CORRECT
<CobraDeleteButton>Delete</CobraDeleteButton>
```

### Mistake 5: Inconsistent Import Paths
```typescript
// ❌ WRONG - Importing individual components
import { CobraPrimaryButton } from 'styles/styledComponents/CobraPrimaryButton';

// ✅ CORRECT - Import from index
import { CobraPrimaryButton } from 'styles/styledComponents';
```

---

## AI Agent Response Template

When reviewing code, AI agents should respond in this format:

```
✅ COMPLIANCE CHECK RESULTS

CORRECTLY IMPLEMENTED:
- Uses CobraPrimaryButton for main action
- Spacing uses CobraStyles.Spacing.FormFields
- Layout uses Stack with proper direction

⚠️ ISSUES FOUND:
1. Line X: Using plain MUI TextField instead of CobraTextField
2. Line Y: Hardcoded padding '20px' instead of CobraStyles.Padding.MainWindow
3. Line Z: Color '#0020c2' hardcoded instead of theme.palette.buttonPrimary.main

📝 CORRECTED CODE:
[Provide fully corrected code here]

📚 REFERENCES:
- COBRA_STYLING_GUIDE.md > Buttons section
- COBRA_STYLING_GUIDE.md > Spacing Standards section
```

---

## Quick Start Prompt for New Features

Copy and paste this when starting a new feature:

```
Create a [feature description] using COBRA styling standards.

REQUIREMENTS:
1. Review COBRA_STYLING_GUIDE.md for component usage
2. Use only COBRA styled components from 'styles/styledComponents'
3. Apply CobraStyles constants for all spacing and padding
4. Follow the [List/Form/Dashboard] pattern from examples
5. Include proper TypeScript types

SPECIFIC NEEDS:
- [List specific requirements]

Please provide:
1. Complete component code
2. Required imports
3. Brief explanation of COBRA components used
4. Any deviations from standard patterns (if necessary)
```

---

## Integration with Popular AI Agents

### Claude Code / Claude.ai
```
Before we start, please review these COBRA styling guidelines:
[Paste relevant sections from COBRA_STYLING_GUIDE.md]

Keep these rules in mind for all code you generate.
```

### GitHub Copilot
Add this to workspace settings (.vscode/settings.json):
```json
{
  "github.copilot.advanced": {
    "inlineSuggestCount": 3,
    "listCount": 10,
    "docContext": [
      "src/docs/COBRA_STYLING_GUIDE.md",
      "src/docs/AI_AGENT_CONTEXT.md"
    ]
  }
}
```

### ChatGPT / GPT-4
```
I'm working on a COBRA-styled React application.

STYLING RULES (enforce these for all code):
[Paste this entire AI_AGENT_CONTEXT.md file]

For each response:
1. Use COBRA styled components only
2. Apply spacing constants
3. Follow color palette
4. Verify compliance before responding
```

---

## Document Usage Stats

Track how often you reference each section:

- [ ] Component Imports (every feature)
- [ ] Spacing and Padding (every feature)
- [ ] Color Palette (as needed)
- [ ] Button Hierarchy (every page with actions)
- [ ] Page Layout Template (new pages)
- [ ] Form Template (new forms)
- [ ] Dialog Template (new dialogs)

---

**Quick Tip**: Bookmark this file and keep it open in a browser tab when working with AI agents. Copy relevant sections as needed for context.

---

**Document Version**: 1.0
**Last Updated**: 2025-11-21
**Purpose**: AI Agent Context and Quick Reference
