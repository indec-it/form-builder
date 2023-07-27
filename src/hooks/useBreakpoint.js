/* eslint-disable camelcase */
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import breakpoints from '@/constants/breakpoints';

const useBreakpoint = () => {
  const theme = useTheme();

  const mq_xs = useMediaQuery(theme.breakpoints.only(breakpoints.EXTRA_SMALL));
  const mq_sm = useMediaQuery(theme.breakpoints.only(breakpoints.SMALL));
  const mq_md = useMediaQuery(theme.breakpoints.only(breakpoints.MEDIUM));
  const mq_lg = useMediaQuery(theme.breakpoints.only(breakpoints.LARGE));
  const mq_xl = useMediaQuery(theme.breakpoints.only(breakpoints.EXTRA_LARGE));

  const getBreakPointName = () => {
    if (mq_xs) {
      return breakpoints.EXTRA_SMALL;
    }
    if (mq_sm) {
      return breakpoints.SMALL;
    }
    if (mq_md) {
      return breakpoints.MEDIUM;
    }
    if (mq_lg) {
      return breakpoints.LARGE;
    }
    if (mq_xl) {
      return breakpoints.EXTRA_LARGE;
    }
    return null;
  };

  return {
    breakpoint: getBreakPointName()
  };
};

export default useBreakpoint;
