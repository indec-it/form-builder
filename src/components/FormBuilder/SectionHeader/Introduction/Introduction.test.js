import {getByText, queryByTestId} from '@testing-library/react';

import Introduction from './Introduction';

describe('<Introduction>', () => {
  let props;
  const getComponent = () => render(Introduction, props);
  beforeEach(() => {
    props = {
      introduction: undefined
    };
  });

  describe('when `props.introduction` is not defined', () => {
    beforeEach(() => {
      props.introduction = undefined;
    });

    it('should not display `props.introduction`', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'introduction')).toBeNull();
    });
  });

  describe('when `props.introduction` is defined', () => {
    beforeEach(() => {
      props.introduction = 'this is an introduction';
    });

    it('should display `props.introduction`', () => {
      const {container} = getComponent();
      expect(getByText(container, props.introduction)).toBeInTheDocument();
    });
  });
});
