import { useWindowSize } from './useWindowSize';
import { useEffect, useState } from 'react';

const MOBILE_WIDTH_BREAKPOINT = 480;
const TABLET_WIDTH_BREAKPOINT = 968;

export function useCurrentBreakpoint() {
  const { width } = useWindowSize();

  const [currentBreakpoints, setCurrentBreakpoints] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const isMobile = width <= MOBILE_WIDTH_BREAKPOINT;
    const isTablet = !isMobile && width <= TABLET_WIDTH_BREAKPOINT;
    const isDesktop = !isMobile && !isTablet;

    setCurrentBreakpoints({
      isMobile,
      isTablet,
      isDesktop,
    });
  }, [width]);

  return currentBreakpoints;
}
