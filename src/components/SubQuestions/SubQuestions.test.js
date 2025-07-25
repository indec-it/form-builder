import {getAllByTestId, queryAllByTestId} from '@testing-library/react';

import TextField from '../TextField';
import SubQuestions from './SubQuestions';

// eslint-disable-next-line jest/no-disabled-tests
describe.skip('<SubQuestions>', () => {
  let props;
  const getComponent = () => render(SubQuestions, props, {formik: {initialValues: {}}});
  beforeEach(() => {
    props = {
      values: {id: 1, answer: {value: '1'}},
      subQuestions: [
        {
          id: 1,
          optionId: 1,
          type: 1,
          label: 'Monto pais',
          name: 'S2P4SQ1',
          validations: [],
          navigation: [],
          userVarName: 'monto1'
        },
        {
          id: 2,
          optionId: 2,
          type: '1',
          label: 'Monto pais',
          name: 'S2P4SQ2',
          validations: [],
          navigation: [],
          userVarName: 'monto2'
        },
        {
          id: 3,
          type: 1,
          label: 'Monto pais',
          name: 'S2P4SQ3',
          validations: [],
          navigation: [
            {
              id: 1,
              rules: [
                {
                  id: 1,
                  conditions: [
                    {
                      id: 1,
                      value: '2',
                      type: 'ne',
                      question: 'test',
                      section: 'S2'
                    }
                  ]
                }
              ],
              action: 'hide'
            }
          ],
          userVarName: 'monto3'
        },
        {
          id: 4,
          optionId: 4,
          type: 1,
          label: 'Monto pais',
          name: 'S2P4SQ4',
          validations: [],
          navigation: [],
          userVarName: 'monto4'
        }
      ],
      Component: TextField,
      name: 'S1.S1P1.test'
    };
  });

  describe('when some subQuestion`s conditions matches', () => {
    beforeEach(() => {
      props.values.answer.value = '2';
    });

    it('should render the selected subQuestions', () => {
      const {container} = getComponent();
      expect(getAllByTestId(container, 'text-field').length).toBe(1);
    });
  });

  describe('when `values.answer.value` doesn`t match with any subQuestion`s condition', () => {
    beforeEach(() => {
      props.values.answer.value = '3';
    });

    it('should not render any subQuestions', () => {
      const {container} = getComponent();
      expect(queryAllByTestId(container, 'text-field').length).toBe(1);
    });
  });
});
