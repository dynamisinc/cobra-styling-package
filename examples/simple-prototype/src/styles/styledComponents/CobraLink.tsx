import { Button } from '@mui/material';
import React, { FC } from 'react';
import { useTheme, styled, alpha } from '@mui/material/styles';
import { Link } from 'react-router';

export const CobraLink = styled(Link)(({ theme }) => ({
  color: theme.palette.buttonPrimary.main,
  cursor: 'pointer',
  textTransform: 'none',
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.buttonPrimary.light,
    textDecoration: 'underline'
  },
  '&:active': {
    color: theme.palette.buttonPrimary.dark
  },
  "&.Mui-disabled": {
    color: theme.palette.primary.light
  }
}));

