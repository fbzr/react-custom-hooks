import React from 'react';
import { MenuItem, Select, IconButton, SelectChangeEvent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { ITEMS_PER_PAGE_OPTIONS } from './usePagination';
import { nanoid } from 'nanoid';
import './Pagination.scss';

interface IProps {
  itemsPerPage: number;
  itemOffset: number;
  data: any[];
  setItemsPerPage: React.Dispatch<React.SetStateAction<number>>;
  setItemOffset: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  itemsPerPage,
  itemOffset,
  data,
  setItemsPerPage,
  setItemOffset,
}: IProps) => {
  const handlePageClick = (direction: 'previous' | 'next') => {
    let newOffset;

    if (direction === 'previous') {
      const newValue = itemOffset - itemsPerPage;
      newOffset = newValue >= 0 ? newValue : 0;
    } else {
      const newValue = itemOffset + itemsPerPage;
      newOffset = newValue <= data.length - 1 ? newValue : data.length - 1;
    }

    setItemOffset(newOffset);
  };

  const handleItemsPerPageChange = (event: SelectChangeEvent<number>) => {
    const { value } = event.target;

    setItemsPerPage(Number(value));
  };

  return (
    <div className="Pagination__container">
      <div className="Pagination__rows-per-page-container">
        <label htmlFor="rows-per-page-select">Rows per page: </label>
        <Select
          variant="standard"
          labelId="rows-per-page-select"
          id="Pagination__rows-select"
          value={itemsPerPage}
          label="Rows per page"
          onChange={handleItemsPerPageChange}
        >
          {ITEMS_PER_PAGE_OPTIONS.map((option) => (
            <MenuItem key={nanoid()} value={option}>
              {option}
            </MenuItem>
          ))}

          {data.length >
            ITEMS_PER_PAGE_OPTIONS[ITEMS_PER_PAGE_OPTIONS.length - 1] && (
            <MenuItem value={data.length}>All</MenuItem>
          )}
        </Select>
      </div>

      <p className="Pagination__count">{`${itemOffset + 1}-${
        itemOffset + itemsPerPage < data.length
          ? itemOffset + itemsPerPage
          : data.length
      } of ${data.length}`}</p>

      <IconButton
        aria-label="previous"
        onClick={() => handlePageClick('previous')}
        disabled={itemOffset <= 0}
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>

      <IconButton
        aria-label="next"
        onClick={() => handlePageClick('next')}
        disabled={itemOffset + itemsPerPage >= data.length}
      >
        <ArrowForwardIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default React.memo(Pagination);
