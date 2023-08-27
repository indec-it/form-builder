import {
  fireEvent, getByTestId, getByText, queryByText
} from '@testing-library/react';

import Checkbox from './Checkbox';

describe('<Checkbox>', () => {
  let props;
  const getComponent = () => render(Checkbox, props);
  beforeEach(() => {
    props = {
      options: [
        {
          id: 1,
          name: 'S1P1O1',
          value: '1',
          label: 'Option 1',
          subOptions: [
            {
              id: 1
            }
          ]
        },
        {
          id: 2,
          name: 'S1P1O1',
          value: '2',
          label: 'Option 2',
          subOptions: [
            {
              id: 1
            }
          ]
        },
        {
          id: 3,
          name: 'S1P1O1',
          value: '3',
          label: 'Option 3',
          subOptions: [
            {
              id: 1
            }
          ]
        }
      ],
      label: {text: 'Select the options'},
      field: {value: [], name: 'test'},
      form: {setFieldValue: jest.fn(), errors: {}, submitCount: 0},
      readOnlyMode: false,
      required: true,
      warnings: {}
    };
  });

  it('should render InputLabel component', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'input-label')).toBeInTheDocument();
  });

  describe('when `props.disabled` is `false`', () => {
    beforeEach(() => {
      props.disabled = false;
    });

    it('should display `props.options.label`', () => {
      const {container} = getComponent();
      props.options.forEach(option => {
        expect(getByText(container, option.label)).toBeInTheDocument();
      });
    });

    describe('when a checkbox is clicked to be mark for first time', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const firstCheckbox = getByTestId(container, 'option-0');
        fireEvent.click(firstCheckbox);
      });

      it('should fire `props.form.setFieldValue` to set the selected value', () => {
        expect(props.form.setFieldValue).toHaveBeenCalled();
        expect(props.form.setFieldValue).toHaveBeenCalledWith('test', ['1']);
      });

      describe('when a checkbox is clicked to mark two values', () => {
        beforeEach(() => {
          props.field.value = ['1'];
          const {container} = getComponent();
          const firstCheckbox = getByTestId(container, 'option-1');
          fireEvent.click(firstCheckbox);
        });

        it('should fire `props.form.setFieldValue` to merge selected values', () => {
          expect(props.form.setFieldValue).toHaveBeenCalled();
          expect(props.form.setFieldValue).toHaveBeenCalledWith('test', ['1', '2']);
        });
      });

      describe('when a checkbox is clicked to be deselected', () => {
        beforeEach(() => {
          props.field.value = ['1'];
          const {container} = getComponent();
          const firstCheckbox = getByTestId(container, 'option-0');
          fireEvent.click(firstCheckbox);
        });

        it('should fire `props.form.setFieldValue` to unset the selected value', () => {
          expect(props.form.setFieldValue).toHaveBeenCalled();
          expect(props.form.setFieldValue).toHaveBeenCalledWith('test', []);
        });
      });
    });

    describe('when there are options selected', () => {
      beforeEach(() => {
        props.field.value = ['1', '2', '3'];
      });

      it('should be checked the selected options', () => {
        const {container} = getComponent();
        const firstSelectedOption = getByTestId(container, 'checkbox-0');
        const secondSelectedOption = getByTestId(container, 'checkbox-1');
        const thirdSelectedOption = getByTestId(container, 'checkbox-2');
        expect(firstSelectedOption.querySelector('input').checked).toBe(true);
        expect(secondSelectedOption.querySelector('input').checked).toBe(true);
        expect(thirdSelectedOption.querySelector('input').checked).toBe(true);
      });

      describe('and an exclusive option is clicked', () => {
        beforeEach(() => {
          props.options = [
            ...props.options,
            {
              id: 4,
              name: 'S1P1O1',
              value: '4',
              label: 'Option 4',
              subOptions: [
                {
                  id: 1
                }
              ],
              exclusive: true
            }
          ];
          const {container} = getComponent();
          const fourthCheckbox = getByTestId(container, 'option-3');
          fireEvent.click(fourthCheckbox);
        });

        it('should fire `props.form.setFieldValue` to set the selected value', () => {
          expect(props.form.setFieldValue).toHaveBeenCalled();
          expect(props.form.setFieldValue).toHaveBeenCalledWith('test', ['4']);
        });
      });
    });

    describe('when the exclusive option is selected', () => {
      beforeEach(() => {
        props.options = [
          ...props.options,
          {
            id: 4,
            name: 'S1P1O1',
            value: '4',
            label: 'Option 4',
            subOptions: [
              {
                id: 1
              }
            ],
            exclusive: true
          }
        ];
        props.field.value = ['4'];
      });

      describe('and a new non exclusive option is clicked', () => {
        beforeEach(() => {
          const {container} = getComponent();
          const thirdCheckbox = getByTestId(container, 'option-2');
          fireEvent.click(thirdCheckbox);
        });

        it('should be unmark the exclusive option', () => {
          expect(props.form.setFieldValue).toHaveBeenCalled();
          expect(props.form.setFieldValue).toHaveBeenCalledWith('test', ['3']);
        });
      });
    });
  });

  describe('when `props.disabled` is `true`', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    describe('and there are selected options', () => {
      beforeEach(() => {
        props.field.value = ['2', '3'];
      });

      it('should be checked the selected options', () => {
        const {container} = getComponent();
        const firstSelectedOption = getByTestId(container, 'checkbox-1');
        const secondSelectedOption = getByTestId(container, 'checkbox-2');
        expect(firstSelectedOption.querySelector('input').checked).toBe(true);
        expect(secondSelectedOption.querySelector('input').checked).toBe(true);
      });

      it('should not be checked the other options', () => {
        const {container} = getComponent();
        const unselectedOption = getByTestId(container, 'checkbox-0');
        expect(unselectedOption.querySelector('input').checked).toBe(false);
      });
    });

    describe('and there are not selected options', () => {
      beforeEach(() => {
        props.field.value = [];
      });

      it('should not display `Sin respuesta.`', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Sin respuesta.')).toBeNull();
      });
    });

    it('should render the list of checkboxes', () => {
      const {container} = getComponent();
      props.options.forEach(option => {
        expect(getByText(container, option.label)).toBeInTheDocument();
      });
    });
  });
});
