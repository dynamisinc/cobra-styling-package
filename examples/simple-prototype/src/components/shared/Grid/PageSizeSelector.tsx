import React from 'react';
import { IStatusPanelParams } from 'ag-grid-community';
import { Select, MenuItem, Stack, Typography } from '@mui/material';

interface PageSizeSelectorParams extends IStatusPanelParams {
  sizeOptions: number[];
  defaultSizeOption: number;
}

export const PageSizeSelector: React.FC<PageSizeSelectorParams> = (props) => {
  const [pageSize, setPageSize] = React.useState(props.defaultSizeOption);

  const handleChange = (event: any) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    props.api.paginationSetPageSize(newSize);
  };

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ padding: '8px' }}>
      <Typography variant="body2">Show:</Typography>
      <Select
        value={pageSize}
        onChange={handleChange}
        size="small"
        sx={{ minWidth: 70 }}
      >
        {props.sizeOptions.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>
      <Typography variant="body2">per page</Typography>
    </Stack>
  );
};
