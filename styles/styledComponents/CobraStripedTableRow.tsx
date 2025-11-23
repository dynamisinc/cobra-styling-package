import { styled, TableRow } from "@mui/material";

export const CobraStripedTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      background: theme.palette.breadcrumb.background
    },
    '&:nth-of-type(even)': {
      background: theme.palette.background.default
    }
  }));