import { useTranslation } from 'react-i18next';
import ConfirmationDialog from 'utilities/contexts/Notification/ConfirmationDialog';

type CobraUnsavedChangesDialogProps = {
  onConfirm: (item?) => void;
  onCancel: () => void;
}

export const CobraUnsavedChangesDialog = ({ onConfirm, onCancel  }: CobraUnsavedChangesDialogProps) => {

  const { t: translate } = useTranslation();

  return (
    <ConfirmationDialog 
      open={true}
      title={translate("UnsavedChangesDetected")}
      message={translate("AreYouSureYouWantToLeaveThePage")}
      customDialogWidth={400}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmText={translate("YesDiscard")}
      cancelText={translate("NoCancel")}
    />
  )
}