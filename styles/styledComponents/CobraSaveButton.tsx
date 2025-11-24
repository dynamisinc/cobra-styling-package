import { ButtonProps} from '@mui/material';
import { CobraPrimaryButton } from './CobraPrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { IconSizes } from 'utilities/icons/icons';

interface SaveButtonProps extends ButtonProps {
  isSaving?: boolean;
}
export const CobraSaveButton = (props: SaveButtonProps) => {

  return (
    <CobraPrimaryButton 
      {...props} 
      startIcon={props.isSaving === true ?
        <FontAwesomeIcon icon={faSpinner} fontSize={IconSizes.Small} spin />
        :
        <FontAwesomeIcon icon={faFloppyDisk} />} 
      disabled={props.disabled || props.isSaving === true}
    >
      {props.children}      
    </CobraPrimaryButton>
  );
  
}
