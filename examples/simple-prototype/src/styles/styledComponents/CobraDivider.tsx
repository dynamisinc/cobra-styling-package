import { Divider} from '@mui/material';
import React, { FC } from 'react';
import { styled } from '@mui/material/styles';


export const CobraDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderWidth: 0,
  height: 2
}));

