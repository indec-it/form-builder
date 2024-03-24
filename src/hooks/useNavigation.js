import {useEffect, useMemo, useState} from 'react';

import getNavigation from '@/utils/getNavigation';

const useNavigation = ({sections, initialValues, handleFinish}) => {
  const [page, setPage] = useState(0);
  const [nextPage, setNextPage] = useState();
  const section = sections[page];

  const navigation = useMemo(
    () =>
      getNavigation({
        navigation: sections?.[nextPage]?.navigation,
        initialValues,
        sections,
        section
      }),
    [nextPage]
  );

  const handleNextPage = () => {
    setNextPage(page + 1);
  };

  const handlePreviousPage = () => {
    setNextPage(page - 1);
  };

  useEffect(() => {
    if (nextPage >= 0) {
      if (navigation.valid || navigation.action === 'disable') {
        setPage(nextPage);
      }
      const calcPage = nextPage < page ? nextPage - 1 : nextPage + 1;
      const isLastPage = calcPage === sections.length;
      if (navigation.action === 'hide' && !isLastPage) {
        setNextPage(calcPage);
      }
      handleFinish({isLastPage});
    }
  }, [nextPage]);

  return {
    handleNextPage,
    handlePreviousPage,
    navigation,
    page,
    section
  };
};

export default useNavigation;
