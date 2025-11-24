import { GridOptions, GridReadyEvent, GridApi } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { useRef } from 'react';
import { PageSizeSelector } from './PageSizeSelector';
import { PaginationControls } from './PaginationControls';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import './CobraGrid.css';
import { useCustomStyles } from '../../../styles/CustomStylesProvider';

interface ICobraPaginatedGrid {
  gridOptions: GridOptions,
  onGridReady?: (gridApiRef: GridApi) => void;
  gridRef?: React.RefObject<AgGridReact | null>;
  pageOptions?: number[];
}

export const CobraPaginatedGridDefaultPageSize = 20;
export const CobraPaginatedGrid = (props: ICobraPaginatedGrid) => {

  const { isRtl } = useCustomStyles();
  const internalGridRef = useRef<AgGridReact | null>(null);

  let gridRef: React.RefObject<AgGridReact | null>;
  
  if (props.gridRef) {
    gridRef = props.gridRef;
  }
  else {
    gridRef = internalGridRef;
  }
  
  props.gridOptions.cacheBlockSize = CobraPaginatedGridDefaultPageSize;
  props.gridOptions.paginationPageSize = CobraPaginatedGridDefaultPageSize;
  props.gridOptions.pagination = true;
  props.gridOptions.rowModelType ='serverSide';

  let pageOptions = props.pageOptions === undefined ? [10,20,50,100] : props.pageOptions;

  props.gridOptions.statusBar = {
    statusPanels: [
      {
        align: 'left',
        statusPanel: PageSizeSelector,
        statusPanelParams: {sizeOptions: pageOptions, defaultSizeOption: CobraPaginatedGridDefaultPageSize}
      },
      {
        align: 'right',
        statusPanel: PaginationControls
      }
    ]
  };

  props.gridOptions.suppressPaginationPanel = true;

  const onGridReady = (grid: GridReadyEvent) => {
    if (props.onGridReady) {
      props.onGridReady(grid.api);
    }
  };

  return (
    <div style={{height: '100%',width:'100%'}}>
      <AgGridReact enableRtl={isRtl} ref={gridRef} gridOptions={props.gridOptions} className="ag-theme-alpine" onGridReady={onGridReady} />
    </div>
  );
};