import {
  fireEvent, getByTestId, getByText, queryByTestId
} from '@testing-library/react';

import SectionHeader from './SectionHeader';

describe('<SectionHeader>', () => {
  let props;
  const getComponent = () => render(SectionHeader, props);
  beforeEach(() => {
    props = {
      onView: jest.fn(),
      onEdit: jest.fn(),
      onDelete: jest.fn(),
      sectionsLength: 1,
      section: {
        id: 1,
        name: 'S1',
        label: 'Sección 1',
        multiple: false,
        questions: [
          {
            id: 1,
            label: 'Write your name',
            name: 'S1P1',
            number: '1',
            type: 1,
            options: [],
            validations: [],
            userVarName: 's1p1'
          },
          {
            id: 1,
            label: 'Write your age',
            name: 'S1P2',
            number: '1',
            type: 2,
            options: [],
            validations: [],
            userVarName: 's1p1'
          }
        ],
        headers: [
          {
            id: 1,
            question: 1
          }
        ]
      },
      isSurvey: true,
      values: {
        S1P1: {id: 1, answer: ''},
        S1P2: {id: 2, answer: ''}
      }
    };
  });

  describe('when `section.introduction` is defined', () => {
    beforeEach(() => {
      props.section.introduction = 'this is an introduction';
    });

    it('should display `props.section.introduction`', () => {
      const {container} = getComponent();
      expect(getByText(container, props.section.introduction)).toBeInTheDocument();
    });
  });

  describe('when `section.introduction` is not defined', () => {
    beforeEach(() => {
      props.section.introduction = undefined;
    });

    it('should not display `props.section.introduction`', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'introduction')).toBeNull();
    });
  });

  describe('when `props.isSurvey` is `true`', () => {
    beforeEach(() => {
      props.isSurvey = true;
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

    describe('when `props.sectionsLength` is greater than zero and section is multiple', () => {
      beforeEach(() => {
        props.section.multiple = true;
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
        props.section.multiple = true;
        props.sectionsLength = 1;
      });

      it('should not render a button to delete a section', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'delete-button')).toBeNull();
      });
    });

    describe('when section has headers', () => {
      beforeEach(() => {
        props.section.headers = [
          {
            id: 1,
            question: 1
          }
        ];
        props.values = {
          S1P1: {id: 1, answer: 'My name'},
          S1P2: {id: 2, answer: 'My age'}
        };
      });

      it('should display header answers', () => {
        const {container} = getComponent();
        expect(getByText(container, 'My name| My age')).toBeInTheDocument();
      });
    });
  });

  describe('when `props.isSurvey` is `false`', () => {
    beforeEach(() => {
      props.isSurvey = false;
    });

    it('should not render a button to activate read only mode', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'read-only-button')).toBeNull();
    });

    it('should not render a button to edit survey', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'edit-button')).toBeNull();
    });

    describe('when `props.sectionsLength` is greater than zero and section is multiple', () => {
      beforeEach(() => {
        props.section.multiple = true;
        props.sectionsLength = 2;
      });

      it('should not render a button to delete a section', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'delete-button')).toBeNull();
      });
    });
  });
});
