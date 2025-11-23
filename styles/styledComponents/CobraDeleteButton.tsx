import { Button, ButtonProps } from '@mui/material';
import React, { FC } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { faTrashCan } from '@fortawesome/sharp-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled(Button)(({ theme }) => ({
  background:  theme.palette.buttonDelete.main,
  borderRadius: 50,
  color: theme.palette.buttonDelete.contrastText,
  paddingBottom: 5,
  paddingLeft: 20,
  paddingRight: 20,
  paddingTop: 5,
  textTransform: 'none',
  '&:hover': {
    background: theme.palette.buttonDelete.light
  },
  '&:active': {
    background: theme.palette.buttonDelete.dark
  }
}));

export const CobraDeleteButton = (props: ButtonProps) => {

  return (
    <StyledButton {...props} startIcon={<FontAwesomeIcon icon={faTrashCan} />}>
      {props.children}
    </StyledButton>
  );
  
}
