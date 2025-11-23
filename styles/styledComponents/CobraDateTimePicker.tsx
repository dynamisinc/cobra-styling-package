import { DateTimePicker } from '@mui/x-date-pickers';
import { styled } from '@mui/material/styles';


export const CobraDateTimePicker = styled(DateTimePicker)(({ theme }) => ({
  '.MuiPickersOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.buttonPrimary.main,
    },
    '&.Mui-focused fieldset.MuiPickersOutlinedInput-notchedOutline': {
      borderColor: theme.palette.buttonPrimary.main,
    }
  },
  '& .MuiPickersInputBase-sectionsContainer': {
    paddingBottom: 9,
    paddingTop: 8.5
  },
  '& .MuiPickersOutlinedInput-root': {
    background:  theme.palette.background.paper
  },
  '& .MuiInputLabel-outlined.Mui-focused': {
    color: theme.palette.buttonPrimary.main,
  }
}));

