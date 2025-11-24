import React, { useState, useEffect } from 'react';
import { IStatusPanelParams } from 'ag-grid-community';
import { Stack, IconButton, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons';

export const PaginationControls: React.FC<IStatusPanelParams> = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const updatePaginationInfo = () => {
      const page = props.api.paginationGetCurrentPage() + 1;
      const total = props.api.paginationGetTotalPages();
      setCurrentPage(page);
      setTotalPages(total);
    };

    // Update on pagination changes
    const listener = () => updatePaginationInfo();
    props.api.addEventListener('paginationChanged', listener);

    // Initial update
    updatePaginationInfo();

    return () => {
      props.api.removeEventListener('paginationChanged', listener);
    };
  }, [props.api]);

  const goToFirstPage = () => props.api.paginationGoToFirstPage();
  const goToPreviousPage = () => props.api.paginationGoToPreviousPage();
  const goToNextPage = () => props.api.paginationGoToNextPage();
  const goToLastPage = () => props.api.paginationGoToLastPage();

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ padding: '4px 8px' }}>
      <IconButton
        onClick={goToFirstPage}
        disabled={isFirstPage}
        size="small"
        title="First Page"
      >
        <FontAwesomeIcon icon={faAnglesLeft} size="sm" />
      </IconButton>

      <IconButton
        onClick={goToPreviousPage}
        disabled={isFirstPage}
        size="small"
        title="Previous Page"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="sm" />
      </IconButton>

      <Typography variant="body2" sx={{ minWidth: 80, textAlign: 'center' }}>
        Page {currentPage} of {totalPages}
      </Typography>

      <IconButton
        onClick={goToNextPage}
        disabled={isLastPage}
        size="small"
        title="Next Page"
      >
        <FontAwesomeIcon icon={faChevronRight} size="sm" />
      </IconButton>

      <IconButton
        onClick={goToLastPage}
        disabled={isLastPage}
        size="small"
        title="Last Page"
      >
        <FontAwesomeIcon icon={faAnglesRight} size="sm" />
      </IconButton>
    </Stack>
  );
};
