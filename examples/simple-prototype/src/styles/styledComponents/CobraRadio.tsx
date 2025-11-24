import React from 'react';
import { Radio } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CobraRadio = styled(Radio)(({ theme }) => ({

  color: theme.palette.primary.contrastText,
  '&.Mui-checked': {
    color: theme.palette.buttonPrimary.main,
  }
}));

