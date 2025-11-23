import { ButtonProps} from '@mui/material';
import { CobraPrimaryButton } from './CobraPrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//intentional use of sharp solid
import { faPlus } from '@fortawesome/sharp-solid-svg-icons';

export const CobraNewButton = (props: ButtonProps) => {

  return (
    <CobraPrimaryButton {...props} startIcon={<FontAwesomeIcon icon={faPlus} />} type='button'>
      {props.children}
    </CobraPrimaryButton>
  );
  
}
