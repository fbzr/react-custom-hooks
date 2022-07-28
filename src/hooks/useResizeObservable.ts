import { useEffect, useState } from 'react';
import _debounce from 'lodash.debounce';

export function useResizeObservable(
  targetElementRef: React.RefObject<HTMLElement>,
  debounceTime?: number
) {
  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const callback = (entries: ResizeObserverEntry[]) => {
    const entry = entries[0];
    const { width, height } = entry.contentRect;

    if (width && height) {
      setWidth(width);
      setHeight(height);
    }
  };

  useEffect(() => {
    if (callback && targetElementRef?.current) {
      const observer = new ResizeObserver(
        debounceTime ? _debounce(callback, debounceTime) : callback
      );
      observer.observe(targetElementRef.current);

      return () => {
        if (targetElementRef?.current) {
          observer.unobserve(targetElementRef.current);
        }
      };
    }
  }, [targetElementRef]);

  return {
    width,
    height,
  };
}
