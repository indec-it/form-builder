import {getAllByTestId, queryAllByTestId} from '@testing-library/react';

import TextField from '../TextField';
import SubQuestions from './SubQuestions';

describe('<SubQuestions>', () => {
  let props;
  const getComponent = () => render(SubQuestions, props, {formik: {initialValues: {}}});
  beforeEach(() => {
    props = {
      values: {id: 1, answer: {value: '1'}},
      subQuestions: [
        {
          id: 1,
          optionId: 1,
          type: '1',
          label: 'Add specification',
          name: 'S1P1SQ1',
          validations: [
            {
              id: 1,
              type: 'required',
              params: [
                {
                  id: 1,
                  message: 'Must add a specification for option 1'
                }
              ],
              messageType: 'error'
            },
            {
              id: 2,
              type: 'min',
              params: [
                {
                  id: 1,
                  value: 2,
                  message: 'Should have at least 2 characters'
                }
              ],
              messageType: 'warning'
            }
          ],
          userVarName: 'S1P1E1'
        },
        {
          id: 2,
          optionId: 2,
          type: '1',
          label: 'Add specification',
          name: 'S1P1SQ2',
          validations: [
            {
              id: 1,
              type: 'required',
              params: [
                {
                  id: 1,
                  message: 'Must add a specification for option 2'
                }
              ],
              messageType: 'error'
            }
          ],
          userVarName: 'S1P1E2'
        }
      ],
      Component: TextField,
      readOnlyMode: false,
      name: 'test'
    };
  });

  describe('when `values.answer.value` matches with any subQuestion`s id', () => {
    beforeEach(() => {
      props.values.answer.value = ['1', '2'];
    });

    it('should render the selected subQuestions', () => {
      const {container} = getComponent();
      expect(getAllByTestId(container, 'text-field').length).toBe(2);
    });
  });

  describe('when `values.answer.value` doesn`t match with any subQuestion`s id', () => {
    beforeEach(() => {
      props.values.answer.value = ['3'];
    });

    it('should not render any subQuestions', () => {
      const {container} = getComponent();
      expect(queryAllByTestId(container, 'text-field').length).toBe(0);
    });
  });
});
