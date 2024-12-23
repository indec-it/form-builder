import {fireEvent, getByPlaceholderText} from '@testing-library/react';

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
      const textField = getByPlaceholderText(container, 'Ingrese Valor');
      fireEvent.change(textField, {target: {name: props.field.name, value: '1000'}});
    });

    it('should fire `props.field.onChange without thousand separator`', () => {
      expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
      expect(props.form.setFieldValue).toHaveBeenCalledWith(props.field.name, 1000);
    });
  });

  describe('when a value with decimal and greater than 999 is written', () => {
    beforeEach(() => {
      const {container} = getComponent();
      const textField = getByPlaceholderText(container, 'Ingrese Valor');
      fireEvent.change(textField, {target: {name: props.field.name, value: '1000,21'}});
    });

    it('should fire `props.field.onChange without thousand and decimal separator`', () => {
      expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
      expect(props.form.setFieldValue).toHaveBeenCalledWith(props.field.name, 1000.21);
    });
  });
});
