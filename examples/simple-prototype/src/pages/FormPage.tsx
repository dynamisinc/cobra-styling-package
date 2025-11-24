import { useState } from 'react';
import { Stack, Typography, Card, CardContent, Alert } from '@mui/material';
import {
  CobraTextField,
  CobraCheckbox,
  CobraSwitch,
  CobraSaveButton,
  CobraLinkButton,
  CobraSecondaryButton
} from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';

export const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'User',
    isActive: true,
    receiveNotifications: false,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (field: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;

    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    setShowSuccess(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSaving(false);
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      role: 'User',
      isActive: true,
      receiveNotifications: false,
    });
    setShowSuccess(false);
  };

  return (
    <Stack spacing={3} padding={CobraStyles.Padding.MainWindow}>
      {/* Page Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          User Form
        </Typography>
      </Stack>

      {/* Success Message */}
      {showSuccess && (
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          User saved successfully!
        </Alert>
      )}

      {/* Form */}
      <Card elevation={1}>
        <CardContent>
          <Stack spacing={CobraStyles.Spacing.FormFields}>
            <Typography variant="h6">Basic Information</Typography>

            {/* Name Fields */}
            <Stack direction="row" spacing={2}>
              <CobraTextField
                label="First Name"
                value={formData.firstName}
                onChange={handleChange('firstName')}
                fullWidth
                required
              />
              <CobraTextField
                label="Last Name"
                value={formData.lastName}
                onChange={handleChange('lastName')}
                fullWidth
                required
              />
            </Stack>

            {/* Contact Fields */}
            <CobraTextField
              label="Email"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              fullWidth
              required
            />

            <CobraTextField
              label="Phone"
              value={formData.phone}
              onChange={handleChange('phone')}
              fullWidth
            />

            {/* Role Field */}
            <CobraTextField
              label="Role"
              select
              value={formData.role}
              onChange={handleChange('role')}
              fullWidth
              SelectProps={{
                native: true,
              }}
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="User">User</option>
              <option value="Viewer">Viewer</option>
            </CobraTextField>

            <Typography variant="h6" sx={{ paddingTop: 2 }}>
              Settings
            </Typography>

            {/* Checkboxes and Switches */}
            <Stack spacing={1}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CobraSwitch
                  checked={formData.isActive}
                  onChange={handleChange('isActive')}
                />
                <Typography>Account Active</Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={1}>
                <CobraCheckbox
                  checked={formData.receiveNotifications}
                  onChange={handleChange('receiveNotifications')}
                />
                <Typography>Receive Email Notifications</Typography>
              </Stack>
            </Stack>

            {/* Form Actions */}
            <Stack
              direction="row"
              spacing={1}
              justifyContent="flex-end"
              sx={{ paddingTop: 2 }}
            >
              <CobraLinkButton onClick={handleCancel}>
                Cancel
              </CobraLinkButton>
              <CobraSecondaryButton>
                Save as Draft
              </CobraSecondaryButton>
              <CobraSaveButton onClick={handleSave} isSaving={isSaving}>
                Save
              </CobraSaveButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>

    </Stack>
  );
};
