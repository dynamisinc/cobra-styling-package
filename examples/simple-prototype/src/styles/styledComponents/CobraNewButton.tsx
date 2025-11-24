import { ButtonProps} from '@mui/material';
import { CobraPrimaryButton } from './CobraPrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const CobraNewButton = (props: ButtonProps) => {

  return (
    <CobraPrimaryButton {...props} startIcon={<FontAwesomeIcon icon={faPlus} />} type='button'>
      {props.children}
    </CobraPrimaryButton>
  );
  
}
