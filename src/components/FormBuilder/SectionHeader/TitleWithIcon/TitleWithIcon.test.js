import {getByTestId, getByText} from '@testing-library/react';

import TitleWithIcon from './TitleWithIcon';

describe('<TitleWithIcon>', () => {
  let props;
  const getComponent = () => render(TitleWithIcon, props);
  beforeEach(() => {
    props = {
      title: 'My title',
      isValid: true
    };
  });

  it('should display `props.title`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'My title')).toBeInTheDocument();
  });

  describe('when `props.isValid` is `false`', () => {
    beforeEach(() => {
      props.isValid = false;
    });

    it('should display `error` icon', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'error-icon')).toBeInTheDocument();
    });
  });

  describe('when `props.isValid` is `true`', () => {
    beforeEach(() => {
      props.isValid = true;
    });

    it('should display `success` icon', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'success-icon')).toBeInTheDocument();
    });
  });
});
