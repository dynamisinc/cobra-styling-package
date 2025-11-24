import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CobraTextField = styled(TextField)(({ theme }) => ({
  // these exact colors are pending.  gary needs to define them, then they need to be added to the palette in the custom theme if they are to be different than other defined colors
 
  '& .MuiInputBase-root': {
    background:  theme.palette.background.paper,
  },
  '& .Mui-error': {
    margin: 0,
  },
  '& label.Mui-focused': {
    color: theme.palette.buttonPrimary.main,
  },
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.buttonPrimary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.buttonPrimary.main,
    },
  }
}));

