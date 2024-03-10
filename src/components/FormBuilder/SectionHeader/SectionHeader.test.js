import {getByText} from '@testing-library/react';

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
        S1P1: {id: 1, answer: {value: ''}},
        S1P2: {id: 2, answer: {value: ''}}
      },
      isValid: false
    };
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
        S1P1: {id: 1, answer: {value: 'My name'}},
        S1P2: {id: 2, answer: {value: 'My age'}}
      };
    });

    it('should display header answers', () => {
      const {container} = getComponent();
      expect(getByText(container, 'My name | My age')).toBeInTheDocument();
    });
  });
});
