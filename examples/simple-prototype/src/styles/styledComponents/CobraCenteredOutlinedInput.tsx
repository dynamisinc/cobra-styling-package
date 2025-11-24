import { OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CobraCenteredOutlinedInput = styled(OutlinedInput)(({ theme }) => ({

  backgroundColor: theme.palette.background.paper,

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.buttonPrimary.main,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.buttonPrimary.main,
  },

  '.MuiSelect-select': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
}));

