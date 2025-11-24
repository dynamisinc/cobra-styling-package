import { DialogContent, DialogTitle, DialogActions, Paper } from '@mui/material';
import { styled, Theme } from '@mui/material/styles';

/**
 * Styled component "library" - use for only the most generalized components
 */
const CobraStyles = {
  Padding: {
    MainWindow: '18px',
    DialogContent: '15px',
    PopoverContent: '12px'
  },
  Spacing: {
    AfterSeparator: '18px',
    DashboardWidgets: '20px',
    IconAndText: '5px',
    FormFields: '12px'
  },
  Paper: {
    Large: styled(Paper)(() => ({
      overflow: 'hidden',
      toolbar: {
        paddingLeft: '16px !important',
      },
    })),
  }
};

export default CobraStyles;
