import { Button, ButtonProps } from '@mui/material';
import React, { FC } from 'react';
import { useTheme, styled } from '@mui/material/styles';

export const CobraSecondaryButton = styled(Button)(({ theme }) => ({
  background: theme.palette.buttonPrimary.contrastText,
  border: 2,
  borderRadius: 50,
  borderStyle: 'solid',
  color:  theme.palette.buttonPrimary.main,
  paddingBottom: 3,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 3,
  textTransform: 'none',
  '&:hover': {
    borderColor: theme.palette.buttonPrimary.light,
    color: theme.palette.buttonPrimary.light
  },
  '&:active': {
    borderColor: theme.palette.buttonPrimary.dark,
    color: theme.palette.buttonPrimary.dark
  },
  "&.Mui-disabled": {
    borderColor: theme.palette.primary.dark,
    color: theme.palette.primary.dark
  }
}));