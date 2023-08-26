import {fireEvent, getByTestId} from '@testing-library/react';

import Currency from './Currency';

describe('<Currency>', () => {
  let props;
  const getComponent = () => render(Currency, props);
  beforeEach(() => {
    props = {
      label: {text: 'Write amount'},
      disabled: false,
      field: {value: '', name: 'test', onChange: jest.fn()},
      form: {errors: {}, submitCount: 0, setFieldValue: jest.fn(), setFieldTouched: jest.fn()}
    };
  });

  describe('when a value without decimal and greater than 999 is written', () => {
    beforeEach(() => {
      const {container} = getComponent();
      const textField = getByTestId(container, 'text-field');
      fireEvent.change(textField, {target: {name: props.field.name, value: '1000'}});
    });

    it('should fire `props.field.onChange with thousand separator`', () => {
      expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
      expect(props.form.setFieldValue).toHaveBeenCalledWith(props.field.name, '1.000');
    });
  });

  describe('when a value with decimal and greater than 999 is written', () => {
    beforeEach(() => {
      const {container} = getComponent();
      const textField = getByTestId(container, 'text-field');
      fireEvent.change(textField, {target: {name: props.field.name, value: '1000,21'}});
    });

    it('should fire `props.field.onChange with thousand and decimal separator`', () => {
      expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
      expect(props.form.setFieldValue).toHaveBeenCalledWith(props.field.name, '1.000,21');
    });
  });
});
