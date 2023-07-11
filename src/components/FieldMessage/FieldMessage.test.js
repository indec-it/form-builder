import {getByText} from '@testing-library/react';
import FieldMessage from './FieldMessage';

describe('<FieldMessage>', () => {
  let props;
  const getComponent = () => render(FieldMessage, props);
  beforeEach(() => {
    props = {
      disabled: false,
      label: 'test',
      field: {name: 'test'},
      form: {submitCount: 0, errors: {}, touched: {test: false}},
      warnings: {}
    };
  });

  describe('when `props.disabled` is `false` and there is an error', () => {
    beforeEach(() => {
      props.disabled = false;
      props.form.errors = {test: 'there is an error'};
      props.form.touched = {test: true};
    });

    it('should display `props.form.errors` message', () => {
      const {container} = getComponent();
      expect(getByText(container, props.form.errors.test)).toBeInTheDocument();
    });
  });

  describe('when `props.disabled` is `false`, there is not an error and there is a warning', () => {
    beforeEach(() => {
      props.disabled = false;
      props.form.errors = {};
      props.form.touched = {test: true};
      props.warnings = {test: 'there is a warning'};
    });

    it('should display `props.warnings` message', () => {
      const {container} = getComponent();
      expect(getByText(container, props.warnings.test)).toBeInTheDocument();
    });
  });
});
