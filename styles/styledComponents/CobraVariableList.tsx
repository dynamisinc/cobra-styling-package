import { FC } from 'react';
import { VariableSizeList as List, VariableSizeListProps } from 'react-window';
import { styled } from '@mui/material/styles';

const CobraList = styled(List)<VariableSizeListProps>(({ theme }) => ({
  /* width */
  '::-webkit-scrollbar': {
    width: '10px',
  },

  /* Track */
  '::-webkit-scrollbar-track': {
    background: 'none',
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.action.selected,
    borderRadius: '25px',
    transition: 'background-color 1s',
  },

  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.primary.main,
  },
}));

export const CobraVariableList: FC<VariableSizeListProps> = (props) => {
  return <CobraList {...props}>{props.children}</CobraList>;
};

