import { styled } from '@mui/material/styles';
import Grid, { GridProps } from '@mui/material/Grid';
import React, { FC, PropsWithChildren } from 'react';

const StyledGrid = styled(Grid)(({ theme }) => ({
  height: '100%',
}));

interface ICobraFullHeightGrid extends PropsWithChildren, GridProps {}

export const CobraFullHeightGrid: FC<ICobraFullHeightGrid> = (props) => {
  return <StyledGrid {...props}>{props.children}</StyledGrid>;
};

