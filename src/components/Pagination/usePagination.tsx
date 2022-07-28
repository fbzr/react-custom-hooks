import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export const ITEMS_PER_PAGE_OPTIONS = [25, 50, 100];

export const usePagination = (data: any[]): [any[], JSX.Element] => {
  const [currentItems, setCurrentItems] = useState<any[]>([]);
  const [itemsPerPage, setItemsPerPage] = useState<number>(25);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
  }, [itemOffset, data, itemsPerPage]);

  useEffect(() => {
    setItemOffset(0);
  }, [itemsPerPage]);

  return [
    currentItems,
    <Pagination
      data={data}
      itemsPerPage={itemsPerPage}
      itemOffset={itemOffset}
      setItemsPerPage={setItemsPerPage}
      setItemOffset={setItemOffset}
    />,
  ];
};
