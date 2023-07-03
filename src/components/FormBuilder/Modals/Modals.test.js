import {getByTestId, getByText, queryByTestId} from '@testing-library/react';

import Modals from './Modals';

describe('<Modals>', () => {
  let props;
  const getComponent = () => render(Modals, props, {formik: {initialValues: {}}});
  beforeEach(() => {
    props = {
      onClose: jest.fn()
    };
  });

  describe('when `props.open` is `true`', () => {
    beforeEach(() => {
      props.open = true;
    });

    describe('and `props.modal` is `1`', () => {
      beforeEach(() => {
        props.modal = 1;
        props.index = 0;
        props.section = {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          multiple: false,
          questions: [
            {
              id: 1,
              label: 'Ingrese su nombre',
              name: 'S1P1',
              number: '1',
              type: 1,
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
        };
        props.values = {
          S1: {id: 1, answer: ''}
        };
      });

      it('should not render QuestionBuilder component', () => {
        const {baseElement} = getComponent();
        expect(queryByTestId(baseElement, 'question-builder')).toBeNull();
      });
    });

    describe('and `props.modal` is `2`', () => {
      beforeEach(() => {
        props.modal = 2;
        props.name = 'S1';
        props.label = 'Label';
        props.options = [
          {
            id: 1,
            value: '1',
            label: 'Option 1'
          },
          {
            id: 2,
            value: '2',
            label: 'Option 2'
          }
        ];
      });

      it('should render Radio component', () => {
        const {baseElement} = getComponent();
        expect(getByTestId(baseElement, 'radio')).toBeInTheDocument();
      });
    });

    describe('and `props.modal` is `3`', () => {
      beforeEach(() => {
        props.modal = 3;
      });

      it('should display a message', () => {
        const {baseElement} = getComponent();
        expect(getByText(baseElement, 'Atención')).toBeInTheDocument();
        expect(getByText(baseElement, '¿Esta seguro que desea borrar esta sección?')).toBeInTheDocument();
      });
    });
  });
});
