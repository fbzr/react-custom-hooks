import { useState, useEffect } from 'react';
import _debounce from 'lodash.debounce';

export function useWindowSize(debounceTime = 150) {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleStatusChange = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    const cb = _debounce(handleStatusChange, debounceTime);

    window.addEventListener('resize', cb);

    return () => {
      window.removeEventListener('resize', cb);
    };
  });

  return { height, width };
}
