import { Stack, Card, CardContent, Typography, Grid, Box, Divider } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileAlt, faChartLine, faBell, faCog, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
  CobraPrimaryButton,
  CobraSecondaryButton,
  CobraNewButton,
  CobraDeleteButton,
  CobraLinkButton,
  CobraSaveButton,
  CobraIconButton,
  CobraToolbarButton
} from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';
import { useTheme } from '@mui/material/styles';

export const Dashboard = () => {
  const theme = useTheme();

  const stats = [
    { label: 'Total Users', value: '1,234', icon: faUsers, color: theme.palette.buttonPrimary.main },
    { label: 'Documents', value: '456', icon: faFileAlt, color: theme.palette.success.main },
    { label: 'Growth', value: '+12%', icon: faChartLine, color: theme.palette.info.main },
    { label: 'Alerts', value: '8', icon: faBell, color: theme.palette.buttonDelete.main },
  ];

  return (
    <Stack spacing={3} padding={CobraStyles.Padding.MainWindow}>
      {/* Page Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Dashboard
        </Typography>
        <CobraPrimaryButton>Refresh Data</CobraPrimaryButton>
      </Stack>

      {/* Stats Cards */}
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Card elevation={1}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: `${stat.color}20`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <FontAwesomeIcon icon={stat.icon} color={stat.color} size="lg" />
                  </Box>
                  <Stack>
                    <Typography variant="h4" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Info Cards */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={1}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activity
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2">• User John Doe created a new document</Typography>
                <Typography variant="body2">• System backup completed successfully</Typography>
                <Typography variant="body2">• 5 new users registered today</Typography>
                <Typography variant="body2">• Report generated for Q4 2024</Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card elevation={1}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                <CobraPrimaryButton fullWidth size="small">
                  View All Users
                </CobraPrimaryButton>
                <CobraPrimaryButton fullWidth size="small">
                  Generate Report
                </CobraPrimaryButton>
                <CobraPrimaryButton fullWidth size="small">
                  System Settings
                </CobraPrimaryButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Button Examples */}
      <Card elevation={1}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            COBRA Button Components
          </Typography>
          <Divider sx={{ mb: 2 }} />

          <Stack spacing={3}>
            {/* Primary & Secondary */}
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Primary & Secondary Buttons
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <CobraPrimaryButton>Primary</CobraPrimaryButton>
                <CobraPrimaryButton size="small">Small Primary</CobraPrimaryButton>
                <CobraSecondaryButton>Secondary</CobraSecondaryButton>
                <CobraSecondaryButton size="small">Small Secondary</CobraSecondaryButton>
              </Stack>
            </Box>

            {/* Action Buttons */}
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Action Buttons
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                <CobraNewButton>Create New</CobraNewButton>
                <CobraSaveButton>Save Changes</CobraSaveButton>
                <CobraSaveButton isSaving>Saving...</CobraSaveButton>
                <CobraDeleteButton>Delete Item</CobraDeleteButton>
                <CobraLinkButton>Link Button</CobraLinkButton>
              </Stack>
            </Box>

            {/* Icon & Toolbar Buttons */}
            <Box>
              <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                Icon & Toolbar Buttons
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" useFlexGap>
                <CobraIconButton>
                  <FontAwesomeIcon icon={faCog} />
                </CobraIconButton>
                <CobraIconButton>
                  <FontAwesomeIcon icon={faTrash} />
                </CobraIconButton>
                <CobraToolbarButton>
                  <FontAwesomeIcon icon={faCog} style={{ marginRight: 8 }} />
                  Settings
                </CobraToolbarButton>
                <CobraToolbarButton>
                  <FontAwesomeIcon icon={faTrash} style={{ marginRight: 8 }} />
                  Remove
                </CobraToolbarButton>
              </Stack>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};
