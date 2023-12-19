import {fireEvent, getByTestId, getByText, queryByTestId, cleanup} from '@testing-library/react';
import Modal from './Modal';

describe('<Modal>', () => {
  let props;
  const getComponent = () => render(Modal, props);
  beforeEach(() => {
    props = {
      onClose: jest.fn(),
      open: true,
      modal: 1,
      children: <h1>test</h1>
    };
  });
  afterEach(() => {
    cleanup();
  });

  it('should render a button to close modal', () => {
    const {baseElement} = getComponent();
    expect(getByTestId(baseElement, 'close-button')).toBeInTheDocument();
  });

  describe('when the button to close modal is clicked', () => {
    beforeEach(() => {
      const {baseElement} = getComponent();
      const button = getByTestId(baseElement, 'close-button');
      fireEvent.click(button);
    });

    it('should fire `props.onClose`', () => {
      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });

  it('should render an icon to close modal', () => {
    const {baseElement} = getComponent();
    expect(getByTestId(baseElement, 'close-button-icon')).toBeInTheDocument();
  });

  describe('when the icon to close modal is clicked', () => {
    beforeEach(() => {
      const {baseElement} = getComponent();
      const button = getByTestId(baseElement, 'close-button-icon');
      fireEvent.click(button);
    });

    it('should fire `props.onClose`', () => {
      expect(props.onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('when `props.onAccept` is defined', () => {
    beforeEach(() => {
      props.onAccept = jest.fn();
    });

    it('should render a button to accept modal', () => {
      const {baseElement} = getComponent();
      expect(getByTestId(baseElement, 'accept-button')).toBeInTheDocument();
    });

    describe('and the button is clicked', () => {
      beforeEach(() => {
        const {baseElement} = getComponent();
        const acceptButton = getByTestId(baseElement, 'accept-button');
        fireEvent.click(acceptButton);
      });

      it('should fire `props.onAccept`', () => {
        expect(props.onAccept).toHaveBeenCalledTimes(1);
        expect(props.onAccept).toHaveBeenCalledWith(props.modal);
      });
    });
  });

  describe('when `props.onAccept` is not defined', () => {
    beforeEach(() => {
      props.onAccept = undefined;
    });

    it('should not render a button to accept modal', () => {
      const {baseElement} = getComponent();
      expect(queryByTestId(baseElement, 'accept-button')).toBeNull();
    });
  });

  it('should render children component', () => {
    const {baseElement} = getComponent();
    expect(getByText(baseElement, 'test')).toBeInTheDocument();
  });
});
