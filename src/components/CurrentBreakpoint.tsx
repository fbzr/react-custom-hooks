import { useCurrentBreakpoint } from '../hooks/useCurrentBreakpoint';

const CurrentBreakpoint = () => {
  const { isMobile, isTablet, isDesktop } = useCurrentBreakpoint();

  const getDevice = () => {
    return isMobile ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';
  };

  return (
    <div>
      <h2>CurrentBreakpoint</h2>
      <p>Device: {getDevice()}</p>
    </div>
  );
};

export default CurrentBreakpoint;
