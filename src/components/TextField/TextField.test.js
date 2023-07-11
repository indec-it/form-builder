import {
  fireEvent, getByTestId, queryByText
} from '@testing-library/react';

import TextField from './TextField';

describe('<TextField>', () => {
  let props;
  const getComponent = () => render(TextField, props);
  beforeEach(() => {
    props = {
      label: 'Write your name',
      disabled: false,
      field: {value: '', name: 'test', onChange: jest.fn()},
      form: {errors: {}, submitCount: 0},
      required: false
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

    it('should render an input', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'text-field')).toBeInTheDocument();
    });

    it('should not be disabled', () => {
      const {container} = getComponent();
      const input = getByTestId(container, 'text-field');
      expect(input).not.toBeDisabled();
    });

    describe('and a text is written', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const textField = getByTestId(container, 'text-field');
        fireEvent.change(textField, {target: {name: props.field.name, value: 'test'}});
      });

      it('should fire `props.field.onChange`', () => {
        expect(props.field.onChange).toHaveBeenCalled();
      });
    });
  });

  describe('when `props.disabled` is `true`', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it('should render an input', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'text-field')).toBeInTheDocument();
    });

    it('should be disabled', () => {
      const {container} = getComponent();
      const input = getByTestId(container, 'text-field');
      expect(input).toBeDisabled();
    });

    describe('and the input has a value', () => {
      beforeEach(() => {
        props.field.value = 'this is a text';
      });

      it('should display `props.field.value`', () => {
        const {container} = getComponent();
        const input = getByTestId(container, 'text-field');
        expect(input.value).toBe(props.field.value);
      });
    });

    describe('and the input has not a value', () => {
      beforeEach(() => {
        props.field.value = undefined;
      });

      it('should not display `Sin respuesta.`', () => {
        const {container} = getComponent();
        expect(queryByText(container, 'Sin respuesta.')).toBeNull();
      });
    });
  });
});
