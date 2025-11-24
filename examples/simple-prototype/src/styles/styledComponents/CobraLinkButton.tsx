import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useTheme, styled, alpha } from '@mui/material/styles';

export const CobraLinkButton = styled(Button)(({ theme }) => ({
  borderRadius: 50,
  color: theme.palette.linkButton.main,
  cursor: 'pointer',
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  textTransform: 'none',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: theme.palette.linkButton.light,
  },
  '&:active': {
    color: theme.palette.linkButton.dark
  },
  "&.Mui-disabled": {
    color: theme.palette.primary.light
  }
}));

