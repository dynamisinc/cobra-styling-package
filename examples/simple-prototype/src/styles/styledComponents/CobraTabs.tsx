import { Tabs } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CobraTabs = styled(Tabs)(({ theme, orientation }) => ({
  '& .Mui-selected': { backgroundColor: theme.palette.background.default },
  height: orientation === 'vertical' ? '100%' : 48,
  minHeight: orientation === 'vertical' ? '100%' : 48,
  '& .MuiTabs-indicator': {
    backgroundColor: theme.palette.secondary.main,
  },
}));

