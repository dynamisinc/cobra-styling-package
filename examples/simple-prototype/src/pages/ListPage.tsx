import { useState, useMemo } from 'react';
import { Stack, Typography, Card, CardContent } from '@mui/material';
import { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { CobraNewButton, CobraLinkButton } from '../styles/styledComponents';
import CobraStyles from '../styles/CobraStyles';
import { useTheme } from '@mui/material/styles';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '../components/shared/Grid/CobraGrid.css';

interface RowData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  lastLogin: string;
}

export const ListPage = () => {
  const theme = useTheme();
  const [gridApi, setGridApi] = useState<any>(null);

  // Generate realistic mock data
  const rowData: RowData[] = useMemo(() => {
    const firstNames = ['John', 'Sarah', 'Michael', 'Emily', 'David', 'Jessica', 'James', 'Ashley', 'Robert', 'Amanda', 'William', 'Jennifer', 'Richard', 'Lisa', 'Daniel'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Wilson', 'Anderson', 'Thomas'];
    const roles = ['Admin', 'Editor', 'Viewer', 'Manager', 'Analyst'];

    return Array.from({ length: 150 }, (_, i) => {
      const firstName = firstNames[i % firstNames.length];
      const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
      const fullName = `${firstName} ${lastName}`;
      const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i > 14 ? Math.floor(i / 15) : ''}@company.com`;

      return {
        id: i + 1,
        name: fullName,
        email: email,
        role: roles[i % roles.length],
        status: i % 5 === 0 ? 'Inactive' : 'Active',
        lastLogin: new Date(2024, 10, Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
      };
    });
  }, []);

  // Column definitions
  const columnDefs: ColDef<RowData>[] = useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
      sortable: true,
      filter: true
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      sortable: true,
      filter: true
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
      sortable: true,
      filter: true
    },
    {
      field: 'role',
      headerName: 'Role',
      width: 120,
      sortable: true,
      filter: true
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      sortable: true,
      filter: true,
      cellStyle: (params) => {
        if (params.value === 'Active') {
          return { color: theme.palette.success.main, fontWeight: 'bold' };
        }
        return { color: theme.palette.text.secondary, fontWeight: 'normal' };
      }
    },
    {
      field: 'lastLogin',
      headerName: 'Last Login',
      width: 150,
      sortable: true,
      filter: true
    },
  ], [theme]);

  const defaultColDef = useMemo(() => ({
    resizable: true,
  }), []);

  const handleCreate = () => {
    alert('Create New User - This would open a dialog or navigate to a form');
  };

  const handleExport = () => {
    if (gridApi) {
      gridApi.exportDataAsCsv({ fileName: 'users.csv' });
    }
  };

  return (
    <Stack spacing={2} padding={CobraStyles.Padding.MainWindow} sx={{ height: '100%' }}>
      {/* Page Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          Users List ({rowData.length} total)
        </Typography>
        <Stack direction="row" spacing={1}>
          <CobraLinkButton onClick={handleExport}>
            Export CSV
          </CobraLinkButton>
          <CobraNewButton onClick={handleCreate}>
            Create New User
          </CobraNewButton>
        </Stack>
      </Stack>

      {/* Grid */}
      <Card elevation={1} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 0, '&:last-child': { paddingBottom: 0 } }}>
          <div className="ag-theme-alpine" style={{ height: '100%', width: '100%' }}>
            <AgGridReact
              rowData={rowData}
              columnDefs={columnDefs}
              defaultColDef={defaultColDef}
              pagination={true}
              paginationPageSize={20}
              paginationPageSizeSelector={[10, 20, 50, 100]}
              rowSelection="multiple"
              animateRows={true}
              onGridReady={(params) => setGridApi(params.api)}
            />
          </div>
        </CardContent>
      </Card>
    </Stack>
  );
};
