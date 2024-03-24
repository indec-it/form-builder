import {useEffect, useState} from 'react';

import getNavigation from '@/utils/getNavigation';

const status = {FINISHED: '9999'};

const useNavigation = ({sections, initialValues, handleFinish}) => {
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState();
  const section = sections[page];

  const navigation = getNavigation({
    navigation: sections?.[nextPage]?.navigation,
    initialValues,
    sections,
    section
  });

  const handleNextPage = () => {
    setNextPage(page + 1 < sections.length ? page + 1 : status.FINISHED);
  };

  const handlePreviousPage = () => {
    setNextPage(page - 1);
  };

  useEffect(() => {
    if (nextPage >= 0 && nextPage !== status.FINISHED) {
      const calcPage = nextPage < page ? nextPage - 1 : nextPage + 1;
      if (navigation.valid || navigation.action === 'disable') {
        setPage(nextPage);
      }
      if (navigation.action === 'hide') {
        setNextPage(calcPage < sections.length ? calcPage : status.FINISHED);
      }
    }
    if (nextPage === status.FINISHED) {
      handleFinish({isLastPage: true});
    }
  }, [nextPage, navigation]);

  return {
    handleNextPage,
    handlePreviousPage,
    navigation,
    page,
    section
  };
};

export default useNavigation;
