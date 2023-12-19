import {fireEvent, getByTestId, getByText, queryByTestId} from '@testing-library/react';

import NavigationButtons from './NavigationButtons';

describe('<NavigationButtons>', () => {
  let props;
  const getComponent = () => render(NavigationButtons, props, {formik: {initialValues: {test: ''}}});
  beforeEach(() => {
    props = {onPrevious: jest.fn()};
  });

  it('should render a button to go back with `Anterior` as label', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Anterior')).toBeInTheDocument();
  });

  describe('when `props.disablePreviousButton` is `true`', () => {
    beforeEach(() => {
      props.disablePreviousButton = true;
    });

    it('should be disabled the button to go back', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'back-button')).toBeDisabled();
    });
  });

  describe('when `props.disablePreviousButton` is `false`', () => {
    beforeEach(() => {
      props.disablePreviousButton = false;
    });

    it('should not be disabled the button to go back', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'back-button')).not.toBeDisabled();
    });

    describe('and the button is clicked', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const button = getByTestId(container, 'back-button');
        fireEvent.click(button);
      });

      it('should fire `props.onPrevious`', () => {
        expect(props.onPrevious).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when `props.onAddNew` is defined', () => {
    beforeEach(() => {
      props.onAddNew = jest.fn();
    });

    it('should render a button to add a new thing', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'add-new')).toBeInTheDocument();
    });

    describe('and the button is clicked', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const button = getByTestId(container, 'add-new');
        fireEvent.click(button);
      });

      it('should fire `props.onAddNew`', () => {
        expect(props.onAddNew).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when `props.onAddNew` is not defined', () => {
    beforeEach(() => {
      props.onAddNew = undefined;
    });

    it('should not render a button to add a new thing', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'add-new')).toBeNull();
    });
  });

  describe('when `props.onInterrupt` is defined', () => {
    beforeEach(() => {
      props.onInterrupt = jest.fn();
    });

    it('should render a button to interrupt the survey', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'interrupt-survey')).toBeInTheDocument();
    });

    describe('and the button is clicked', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const button = getByTestId(container, 'interrupt-survey');
        fireEvent.click(button);
      });

      it('should fire `props.onInterrupt`', () => {
        expect(props.onInterrupt).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('when `props.onInterrupt` is not defined', () => {
    beforeEach(() => {
      props.onInterrupt = undefined;
    });

    it('should not render a button to interrupt the survey', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'interrupt-survey')).toBeNull();
    });
  });

  describe('when `props.readOnlyMode` is `true`', () => {
    beforeEach(() => {
      props.readOnlyMode = true;
      props.onAddNew = () => {};
      props.onInterrupt = () => {};
    });

    it('should not render the button to add new', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'add-new')).toBeNull();
    });

    it('should not render the button to interrupt survey', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'interrupt-survey')).toBeNull();
    });
  });
});
