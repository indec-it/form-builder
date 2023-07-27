import {getByTestId, getByText} from '@testing-library/react';

import MobileRadio from './MobileRadio';

describe('<MobileRadio>', () => {
  let props;
  const getComponent = () => render(MobileRadio, props);
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
      form: {setFieldValue: jest.fn(), errors: {}, submitCount: 0}
    };
  });

  it('should render InputLabel component', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'input-label')).toBeInTheDocument();
  });

  it('should render buttons with `props.options.label` as label', () => {
    const {container} = getComponent();
    props.options.forEach(option => {
      expect(getByText(container, option.label)).toBeInTheDocument();
    });
  });

  describe('when `props.disabled` is `false`', () => {
    beforeEach(() => {
      props.disabled = false;
    });

    it('should render the buttons enabled', () => {
      const {container} = getComponent();
      props.options.forEach((option, index) => {
        expect(getByTestId(container, `radio-${index}`)).not.toBeDisabled();
      });
    });
  });

  describe('when `props.disabled` is `true`', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it('should render the buttons disabled', () => {
      const {container} = getComponent();
      props.options.forEach((_, index) => {
        expect(getByTestId(container, `radio-${index}`)).toBeDisabled();
      });
    });
  });

  describe('when there is an option selected', () => {
    beforeEach(() => {
      props.field.value = '3';
    });

    it('should have a `contained` variant the option selected', () => {
      const {container} = getComponent();
      const optionSelected = getByTestId(container, 'radio-2');
      expect(optionSelected).toHaveClass('MuiButton-contained');
    });

    it('should have a `outlined` variant an option not selected', () => {
      const {container} = getComponent();
      const optionSelected = getByTestId(container, 'radio-1');
      expect(optionSelected).toHaveClass('MuiButton-outlined');
    });
  });
});
