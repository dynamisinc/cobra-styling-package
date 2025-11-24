import { useState } from 'react';
import { Stack, Typography, Card, CardContent, Grid } from '@mui/material';
import {
  CobraPrimaryButton,
  CobraSecondaryButton,
  CobraDeleteButton,
  CobraDialog,
  CobraTextField,
  CobraLinkButton,
  CobraSaveButton
} from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';

export const DialogDemo = () => {
  const [simpleDialogOpen, setSimpleDialogOpen] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [wideDialogOpen, setWideDialogOpen] = useState(false);

  return (
    <Stack spacing={3} padding={CobraStyles.Padding.MainWindow}>
      {/* Page Header */}
      <Typography variant="h5" fontWeight="bold">
        Dialog Examples
      </Typography>

      {/* Dialog Triggers */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={1}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Simple Dialog</Typography>
                <Typography variant="body2" color="text.secondary">
                  Basic dialog with title and content
                </Typography>
                <CobraPrimaryButton onClick={() => setSimpleDialogOpen(true)} fullWidth>
                  Open Simple
                </CobraPrimaryButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={1}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Form Dialog</Typography>
                <Typography variant="body2" color="text.secondary">
                  Dialog with form inputs
                </Typography>
                <CobraPrimaryButton onClick={() => setFormDialogOpen(true)} fullWidth>
                  Open Form
                </CobraPrimaryButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={1}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Confirmation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Confirm destructive action
                </Typography>
                <CobraDeleteButton onClick={() => setConfirmDialogOpen(true)} fullWidth>
                  Open Confirm
                </CobraDeleteButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={1}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="h6">Wide Dialog</Typography>
                <Typography variant="body2" color="text.secondary">
                  Custom width dialog
                </Typography>
                <CobraSecondaryButton onClick={() => setWideDialogOpen(true)} fullWidth>
                  Open Wide
                </CobraSecondaryButton>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>


      {/* Simple Dialog */}
      <CobraDialog
        open={simpleDialogOpen}
        onClose={() => setSimpleDialogOpen(false)}
        title="Simple Dialog"
        customDialogWidth={400}
      >
        <Stack spacing={2}>
          <Typography>
            This is a simple dialog with just some text content and a close button.
          </Typography>
          <Typography color="text.secondary">
            Click the X button or outside the dialog to close.
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <CobraPrimaryButton onClick={() => setSimpleDialogOpen(false)}>
              OK
            </CobraPrimaryButton>
          </Stack>
        </Stack>
      </CobraDialog>

      {/* Form Dialog */}
      <CobraDialog
        open={formDialogOpen}
        onClose={() => setFormDialogOpen(false)}
        title="Create New Item"
        customDialogWidth={600}
      >
        <Stack spacing={CobraStyles.Spacing.FormFields} paddingTop={2}>
          <CobraTextField label="Item Name" fullWidth required />
          <CobraTextField label="Description" fullWidth multiline rows={3} />
          <CobraTextField
            label="Category"
            select
            fullWidth
            SelectProps={{ native: true }}
          >
            <option value="">Select Category</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </CobraTextField>

          <Stack direction="row" justifyContent="flex-end" spacing={1} paddingTop={2}>
            <CobraLinkButton onClick={() => setFormDialogOpen(false)}>
              Cancel
            </CobraLinkButton>
            <CobraSaveButton onClick={() => setFormDialogOpen(false)}>
              Save
            </CobraSaveButton>
          </Stack>
        </Stack>
      </CobraDialog>

      {/* Confirmation Dialog */}
      <CobraDialog
        open={confirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        title="Confirm Deletion"
        customDialogWidth={450}
      >
        <Stack spacing={2}>
          <Typography>
            Are you sure you want to delete this item? This action cannot be undone.
          </Typography>
          <Stack direction="row" justifyContent="flex-end" spacing={1}>
            <CobraLinkButton onClick={() => setConfirmDialogOpen(false)}>
              Cancel
            </CobraLinkButton>
            <CobraDeleteButton onClick={() => setConfirmDialogOpen(false)}>
              Delete
            </CobraDeleteButton>
          </Stack>
        </Stack>
      </CobraDialog>

      {/* Wide Dialog */}
      <CobraDialog
        open={wideDialogOpen}
        onClose={() => setWideDialogOpen(false)}
        title="Wide Dialog Example"
        customDialogWidth={900}
      >
        <Stack spacing={2}>
          <Typography variant="h6">Custom Width Dialog</Typography>
          <Typography>
            This dialog demonstrates a custom width (900px). Useful for displaying
            tables, forms with multiple columns, or detailed information.
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <CobraTextField label="Field 1" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <CobraTextField label="Field 2" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <CobraTextField label="Field 3" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <CobraTextField label="Field 4" fullWidth />
            </Grid>
          </Grid>

          <Stack direction="row" justifyContent="flex-end" spacing={1} paddingTop={2}>
            <CobraLinkButton onClick={() => setWideDialogOpen(false)}>
              Close
            </CobraLinkButton>
            <CobraPrimaryButton onClick={() => setWideDialogOpen(false)}>
              Apply
            </CobraPrimaryButton>
          </Stack>
        </Stack>
      </CobraDialog>
    </Stack>
  );
};
