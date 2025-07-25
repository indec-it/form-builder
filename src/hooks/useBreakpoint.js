import {useState, useEffect} from 'react';

import breakpoints from '@/constants/breakpoints';

const getBreakpoint = () => {
  if (typeof window === 'undefined') return breakpoints.MEDIUM;

  const width = window.innerWidth;

  if (width < 640) return breakpoints.EXTRA_SMALL;
  if (width < 768) return breakpoints.SMALL;
  if (width < 1024) return breakpoints.MEDIUM;
  if (width < 1280) return breakpoints.LARGE;
  return breakpoints.EXTRA_LARGE;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    breakpoint
  };
};

export default useBreakpoint;
