import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { cobraTheme } from './styles/Theme';

// Import AG Grid styles
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import './components/shared/Grid/CobraGrid.css';

// Import pages
import { Dashboard } from './pages/Dashboard';
import { ListPage } from './pages/ListPage';
import { FormPage } from './pages/FormPage';
import { DialogDemo } from './pages/DialogDemo';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
      style={{ height: '100%' }}
    >
      {value === index && <Box sx={{ height: '100%' }}>{children}</Box>}
    </div>
  );
}

function App() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={cobraTheme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Header */}
        <AppBar position="static" sx={{ backgroundColor: cobraTheme.palette.primary.main }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: cobraTheme.palette.primary.contrastText }}>
              COBRA Prototype Foundation
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Navigation Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: 'white' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="navigation tabs">
            <Tab label="Dashboard" />
            <Tab label="List Page" />
            <Tab label="Form Page" />
            <Tab label="Dialogs" />
          </Tabs>
        </Box>

        {/* Content Area */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', backgroundColor: cobraTheme.palette.background.default }}>
          <TabPanel value={tabValue} index={0}>
            <Dashboard />
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <ListPage />
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <FormPage />
          </TabPanel>
          <TabPanel value={tabValue} index={3}>
            <DialogDemo />
          </TabPanel>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
