import { ButtonProps} from '@mui/material';
import { CobraPrimaryButton } from './CobraPrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faSpinnerThird } from '@fortawesome/sharp-light-svg-icons';
import { IconSizes } from 'utilities/icons/icons';

interface SaveButtonProps extends ButtonProps {
  isSaving?: boolean;
}
export const CobraSaveButton = (props: SaveButtonProps) => {

  return (
    <CobraPrimaryButton 
      {...props} 
      startIcon={props.isSaving === true ? 
        <FontAwesomeIcon icon={faSpinnerThird} fontSize={IconSizes.Small} spin /> 
        : 
        <FontAwesomeIcon icon={faFloppyDisk} />} 
      disabled={props.disabled || props.isSaving === true}
    >
      {props.children}      
    </CobraPrimaryButton>
  );
  
}
