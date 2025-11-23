import { Button, ButtonProps } from '@mui/material';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

export const CobraToolbarButton = styled(Button)(({ theme }) => ({
  background:  'inherit',
  borderRadius: 0,
  color: theme.palette.primary.contrastText,
  fontWeight: 'normal',
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  textTransform: 'none',
  '&:hover': {
    background: theme.palette.primary.light
  },
  "&.Mui-disabled": {
    color: theme.palette.primary.main
  },
  '.svg-inline--fa': {
    fontSize: 16
  }
}));

