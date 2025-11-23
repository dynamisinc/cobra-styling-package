import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { useTheme } from '@mui/material/styles';


interface ICobraCheckboxProps extends CheckboxProps {
  label: string;
}
export const CobraCheckbox: FC<ICobraCheckboxProps> = ({ label, ...checkboxProps }) => {
  const theme = useTheme();

  return (
    <FormControlLabel control={
      <Checkbox
      sx={{
        color: theme.palette.primary.contrastText,
        '&.Mui-checked': {
          color: theme.palette.primary.contrastText,
        },
        marginLeft:0, 
        marginRight:0
      }}
        disableRipple
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...checkboxProps}
      />
    } 
    label={label} />
  );
}
