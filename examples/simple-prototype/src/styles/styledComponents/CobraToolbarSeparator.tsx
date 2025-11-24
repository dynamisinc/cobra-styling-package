import React, { FC } from 'react';
import { styled } from '@mui/material/styles';

export const CobraToolbarSeparator = styled('div')(({ theme }) => ({
  background:  'inherit',
  borderRight: '1px solid ' + theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 'normal',
  height: 25,
  paddingBottom: 5,
  marginLeft: 20,
  marginRight: 20,
  paddingTop: 5,
  textTransform: 'none'
}));

