# COBRA Styling Package - Quick Start

## 🚀 30-Second Setup

### Windows (PowerShell)
```powershell
# 1. Go to your React project
cd my-react-project

# 2. Run installer (adjust path to your cobra-styling-package)
..\cobra-spa\cobra-styling-package\install.ps1

# 3. Install dependencies
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
```

### Mac/Linux (Bash)
```bash
# 1. Go to your React project
cd my-react-project

# 2. Run installer (adjust path to your cobra-styling-package)
bash ../cobra-spa/cobra-styling-package/install.sh

# 3. Install dependencies
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core
npm install @fortawesome/free-regular-svg-icons @fortawesome/free-solid-svg-icons
```

## ⚡ Instant Setup (Manual Copy)

```bash
# Copy package to your project
cp -r /path/to/cobra-styling-package/styles src/
cp -r /path/to/cobra-styling-package/components/shared src/components/
cp -r /path/to/cobra-styling-package/docs src/
```

## 🎨 Update App.tsx

```typescript
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { cobraTheme } from './styles/Theme';

function App() {
  return (
    <ThemeProvider theme={cobraTheme}>
      <CssBaseline />
      {/* Your content here */}
    </ThemeProvider>
  );
}

export default App;
```

## ✅ Verify Installation

Create `src/TestPage.tsx`:

```typescript
import { Stack } from '@mui/material';
import { CobraNewButton, CobraPrimaryButton } from './styles/styledComponents';
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
        <span style={{ fontWeight: 'bold' }}>Test COBRA Styling</span>
        <CobraNewButton>Create New</CobraNewButton>
      </Stack>

      <Stack spacing={2} style={{ maxWidth: 400 }}>
        <CobraPrimaryButton>Primary Button</CobraPrimaryButton>
        <div style={{ color: '#0020c2' }}>✅ If this text is cobalt blue, styling is working!</div>
      </Stack>
    </Stack>
  );
};
```

Run `npm start` - you should see COBRA-styled buttons!

## 📚 Next Steps

1. **Read Documentation**: Open `src/docs/STYLING_DOCS_README.md`
2. **Browse Components**: Check `src/styles/styledComponents/index.ts`
3. **Copy Patterns**: See `src/docs/PROTOTYPE_SETUP_GUIDE.md`
4. **Use with AI**: Paste `src/docs/AI_AGENT_CONTEXT.md` to coding agents

## 🎯 Common Tasks

### Create a List Page
See: `src/docs/PROTOTYPE_SETUP_GUIDE.md` > Pattern 1

### Create a Form
See: `src/docs/PROTOTYPE_SETUP_GUIDE.md` > Pattern 2

### Use with Claude Code
```
1. Open Claude Code
2. Paste: src/docs/AI_AGENT_CONTEXT.md
3. Say: "Create a [feature] following COBRA patterns"
```

### Check if Code is Compliant
See: `src/docs/AI_AGENT_CONTEXT.md` > Validation Checklist

---

**Need help?** Check `src/docs/STYLING_DOCS_README.md` for complete navigation guide!
