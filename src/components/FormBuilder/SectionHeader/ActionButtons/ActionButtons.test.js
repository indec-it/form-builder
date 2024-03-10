import {fireEvent, getByTestId, queryByTestId} from '@testing-library/react';

import ActionButtons from './ActionButtons';

describe('<ActionButtons>', () => {
  let props;
  const getComponent = () => render(ActionButtons, props);
  beforeEach(() => {
    props = {
      onEdit: jest.fn(),
      onDelete: jest.fn(),
      onView: jest.fn(),
      onMoveUp: jest.fn(),
      onMoveDown: jest.fn(),
      isSectionMultiple: false,
      sectionsLength: 1,
      isReadOnly: false,
      position: 0
    };
  });

  it('should render a button to activate read only mode', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'read-only-button')).toBeInTheDocument();
  });

  describe('when the button to active read only mode is clicked', () => {
    beforeEach(() => {
      const {container} = getComponent();
      const button = getByTestId(container, 'read-only-button');
      fireEvent.click(button);
    });

    it('should fire `props.onView`', () => {
      expect(props.onView).toHaveBeenCalledTimes(1);
    });
  });

  describe('when `props.isReadOnly` is `false`', () => {
    beforeEach(() => {
      props.isReadOnly = false;
    });

    it('should render a button to edit survey', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'edit-button')).toBeInTheDocument();
    });

    describe('when the button to edit survey is clicked', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const button = getByTestId(container, 'edit-button');
        fireEvent.click(button);
      });

      it('should fire `props.onEdit`', () => {
        expect(props.onEdit).toHaveBeenCalledTimes(1);
      });
    });

    describe('when `props.sectionsLength` is greater than zero', () => {
      beforeEach(() => {
        props.sectionsLength = 2;
      });

      describe('and `props.position` is greater than zero', () => {
        beforeEach(() => {
          props.position = 1;
        });

        it('should render a button to move up a section', () => {
          const {container} = getComponent();
          expect(getByTestId(container, 'move-up-button')).toBeInTheDocument();
        });

        describe('when the button to move up a section is clicked', () => {
          beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'move-up-button');
            fireEvent.click(button);
          });

          it('should fire `props.onMoveUp`', () => {
            expect(props.onMoveUp).toHaveBeenCalledTimes(1);
          });
        });
      });

      describe('and `props.position` is less than `props.sectionsLength`', () => {
        beforeEach(() => {
          props.position = 0;
        });

        it('should render a button to move down a section', () => {
          const {container} = getComponent();
          expect(getByTestId(container, 'move-down-button')).toBeInTheDocument();
        });

        describe('when the button to move down a section is clicked', () => {
          beforeEach(() => {
            const {container} = getComponent();
            const button = getByTestId(container, 'move-down-button');
            fireEvent.click(button);
          });

          it('should fire `props.onMoveDown`', () => {
            expect(props.onMoveDown).toHaveBeenCalledTimes(1);
          });
        });
      });
    });

    describe('when `props.sectionsLength` is greater than zero and section is multiple', () => {
      beforeEach(() => {
        props.isSectionMultiple = true;
        props.sectionsLength = 2;
      });

      it('should render a button to delete a section', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'delete-button')).toBeInTheDocument();
      });

      describe('when the button to delete a section is clicked', () => {
        beforeEach(() => {
          const {container} = getComponent();
          const button = getByTestId(container, 'delete-button');
          fireEvent.click(button);
        });

        it('should fire `props.onDelete`', () => {
          expect(props.onDelete).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('when `props.sectionsLength` is not greater than zero or section is not multiple', () => {
      beforeEach(() => {
        props.isSectionMultiple = true;
        props.sectionsLength = 1;
      });

      it('should not render a button to delete a section', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'delete-button')).toBeNull();
      });
    });
  });

  describe('when `props.isReadOnly` is `true`', () => {
    beforeEach(() => {
      props.isReadOnly = true;
    });

    it('should not render a button to edit survey', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'edit-button')).toBeNull();
    });

    describe('when `props.sectionsLength` is greater than zero and section is multiple', () => {
      beforeEach(() => {
        props.isSectionMultiple = true;
        props.sectionsLength = 2;
      });

      it('should not render a button to delete a section', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'delete-button')).toBeNull();
      });
    });
  });
});
