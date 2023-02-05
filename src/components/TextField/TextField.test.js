import {
  fireEvent, getByTestId, getByText, queryByTestId
} from '@testing-library/react';

import TextField from './TextField';

describe('<TextField>', () => {
  let props;
  const getComponent = () => render(TextField, props);
  beforeEach(() => {
    props = {
      label: 'Write your name',
      readOnlyMode: false,
      field: {value: '', name: 'test', onChange: jest.fn()},
      form: {errors: {}, submitCount: 0},
      required: false
    };
  });

  it('should render InputLabel component', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'input-label')).toBeInTheDocument();
  });

  describe('when `props.readOnlyMode` is `false`', () => {
    beforeEach(() => {
      props.readOnlyMode = false;
    });

    it('should render an input', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'text-field')).toBeInTheDocument();
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

  describe('when `props.readOnlyMode` is `true`', () => {
    beforeEach(() => {
      props.readOnlyMode = true;
    });

    it('should not render an input', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'text-field')).toBeNull();
    });

    describe('and the input has a value', () => {
      beforeEach(() => {
        props.field.value = 'this is a text';
      });

      it('should display `props.field.value`', () => {
        const {container} = getComponent();
        expect(getByText(container, props.field.value)).toBeInTheDocument();
      });
    });

    describe('and the input has not a value', () => {
      beforeEach(() => {
        props.field.value = undefined;
      });

      it('should display `Sin respuesta.`', () => {
        const {container} = getComponent();
        expect(getByText(container, 'Sin respuesta.')).toBeInTheDocument();
      });
    });
  });
});
