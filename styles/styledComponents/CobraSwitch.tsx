import { Switch } from '@mui/material';
import React, { FC } from 'react';
import { useTheme, styled, alpha } from '@mui/material/styles';

export const CobraSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme.palette.buttonPrimary.main,
    '&:hover': {
      backgroundColor: alpha(theme.palette.buttonPrimary.main, theme.palette.action.hoverOpacity),
    }
  }
}));

