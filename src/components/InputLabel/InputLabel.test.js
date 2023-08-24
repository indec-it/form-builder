import {getByTestId, getByText} from '@testing-library/react';
import InputLabel from './InputLabel';

describe('<InputLabel>', () => {
  let props;
  const getComponent = () => render(InputLabel, props);
  beforeEach(() => {
    props = {
      disabled: false,
      label: {text: 'test'},
      field: {name: 'test'},
      form: {submitCount: 0, errors: {}, touched: {test: false}},
      required: false
    };
  });

  it('should display `props.label`', () => {
    const {container} = getComponent();
    expect(getByText(container, props.label.text)).toBeInTheDocument();
  });

  describe('when there is an error and `props.disabled` is `false`', () => {
    beforeEach(() => {
      props.form.errors = {test: 'there is an error'};
      props.form.touched = {test: true};
    });

    it('should render error icon', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'error-icon')).toBeInTheDocument();
    });
  });

  describe('when there is not an error, `props.disabled` is `false` and there`s a warning', () => {
    beforeEach(() => {
      props.form.errors = {};
      props.form.touched = {test: true};
      props.warnings = {test: 'there is a warning'};
    });

    it('should render warning icon', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'warning-icon')).toBeInTheDocument();
    });
  });
});
