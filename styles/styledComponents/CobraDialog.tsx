import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useTheme,} from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/sharp-solid-svg-icons';
import CobraStyles from 'styles/CobraStyles';
import { useCustomStyles } from 'styles/CustomStylesProvider';


type CobraDialogProps = {
  contentHeight?: string | number;
  contentWidth?: string | number;
  hideCloseButton?: boolean;
  onClose?: () => void;
  open: boolean;
  title?: string;
  customDialogWidth?: string | number;
}
export const CobraDialog = ({ children, contentHeight, contentWidth, hideCloseButton, onClose, open, title, customDialogWidth }: PropsWithChildren<CobraDialogProps>) => {
  const theme = useTheme();

  const { getLtrRtlStyle } = useCustomStyles();
  
  const DialogStyles = {backgroundColor: theme.palette.background.default, width: customDialogWidth ? customDialogWidth: "unset"}
  const DialogContentStyles = {height: contentHeight, width: contentWidth, padding: CobraStyles.Padding.DialogContent}

  return (
    <Dialog open={open} slotProps={{paper: {style: DialogStyles}}} aria-labelledby="modal-title" maxWidth={false}>
      {title != null && 
        <DialogTitle style={{backgroundColor: theme.palette.primary.main, height: "40px", paddingLeft: CobraStyles.Padding.DialogContent, paddingTop: 5}}>
          {title}
        </DialogTitle>
      }
      
      {!hideCloseButton && <IconButton aria-label="Close" onClick={onClose} sx={getLtrRtlStyle({ padding: "4px", position: 'absolute', right: 8, left: "unset", top: 2 })}>
        <FontAwesomeIcon icon={faClose} />
      </IconButton>}
      <DialogContent style={DialogContentStyles}>
        {children}
      </DialogContent>
    </Dialog>
  );
}
