import {fireEvent, getByTestId, getByText, queryByTestId, queryByText} from '@testing-library/react';

import Radio from './Radio';

describe('<Radio>', () => {
  let props;
  const getComponent = () => render(Radio, props);
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
      disabled: false,
      required: false,
      label: 'Select an option',
      field: {value: '', name: 'test'},
      form: {setFieldValue: jest.fn(), setFieldTouched: jest.fn(), errors: {}, submitCount: 0}
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

    describe('and there is an option selected', () => {
      beforeEach(() => {
        props.field.value = '3';
      });

      it('should be checked the option selected', () => {
        const {container} = getComponent();
        const radioSelected = getByTestId(container, 'radio-2');
        expect(radioSelected.querySelector('input').checked).toBe(true);
      });

      it('should not be checked another option', () => {
        const {container} = getComponent();
        const radioSelected = getByTestId(container, 'radio-1');
        expect(radioSelected.querySelector('input').checked).toBe(false);
      });

      it('should render a button to clean the selected option', () => {
        const {container} = getComponent();
        expect(getByTestId(container, 'clean-option-2')).toBeInTheDocument();
      });

      describe('when the button to clean the selected option is clicked', () => {
        beforeEach(() => {
          const {container} = getComponent();
          const button = getByTestId(container, 'clean-option-2');
          fireEvent.click(button);
        });

        it('should fire `props.form.setFieldValue`', () => {
          expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
          expect(props.form.setFieldValue).toHaveBeenCalledWith(props.field.name, '');
        });
      });
    });
  });

  describe('when `props.disabled` is `true`', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    describe('and there is an option selected', () => {
      beforeEach(() => {
        props.field.value = '3';
      });

      it('should be checked the option selected', () => {
        const {container} = getComponent();
        const radioSelected = getByTestId(container, 'radio-2');
        expect(radioSelected.querySelector('input').checked).toBe(true);
      });

      it('should not be checked another option', () => {
        const {container} = getComponent();
        const radioSelected = getByTestId(container, 'radio-1');
        expect(radioSelected.querySelector('input').checked).toBe(false);
      });

      it('should not render a button to clean the selected option', () => {
        const {container} = getComponent();
        expect(queryByTestId(container, 'clean-option-2')).toBeNull();
      });
    });

    describe('and there is not a selected option', () => {
      beforeEach(() => {
        props.field.value = '';
      });

      it('should not display `Sin respuesta.`', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Sin respuesta.')).toBeNull();
      });
    });

    it('should render the list of radios', () => {
      const {container} = getComponent();
      props.options.forEach(option => {
        expect(getByText(container, option.label)).toBeInTheDocument();
      });
    });

    it('should not render a button to clean the selected option', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'clean-option-2')).toBeNull();
    });
  });
});
