import {fireEvent, getByTestId, getByText, queryByTestId} from '@testing-library/react';

import RadioTable from './RadioTable';

describe('<RadioTable>', () => {
  let props;
  const getComponent = () => render(RadioTable, props);
  beforeEach(() => {
    props = {
      options: [
        {
          id: 1,
          name: 'S1P1O1',
          subOptions: [
            {
              id: 1,
              value: '1',
              label: 'Yes'
            },
            {
              id: 2,
              value: '2',
              label: 'No'
            },
            {
              id: 3,
              value: '3',
              label: 'DKN'
            }
          ],
          userVarName: 'S1P1O1',
          title: 'Options 1',
          repeated: true
        },
        {
          id: 2,
          name: 'S1P1O2',
          subOptions: [
            {
              id: 1,
              value: '1',
              label: 'Yes'
            },
            {
              id: 2,
              value: '2',
              label: 'No'
            },
            {
              id: 3,
              value: '3',
              label: 'DKN'
            }
          ],
          userVarName: 'S1P1O2',
          title: 'Options 2'
        },
        {
          id: 3,
          name: 'S1P1O3',
          subOptions: [
            {
              id: 1,
              value: '1',
              label: 'Yes'
            },
            {
              id: 2,
              value: '2',
              label: 'No'
            },
            {
              id: 3,
              value: '3',
              label: 'DKN'
            }
          ],
          userVarName: 'S1P1O3',
          title: 'Options 3'
        }
      ],
      readOnlyMode: false,
      required: false,
      label: 'Select the correct options',
      field: {value: {S1P1O1: undefined, S1P1O2: undefined, S1P1O3: undefined}, name: 'test'},
      form: {setFieldValue: jest.fn(), errors: {}, submitCount: 0}
    };
  });

  it('should render InputLabel component', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'input-label')).toBeInTheDocument();
  });

  describe('when `props.readOnlyMode` is `true`', () => {
    beforeEach(() => {
      props.readOnlyMode = true;
    });

    it('should render ReadOnly component', () => {
      const {container} = getComponent();
      expect(getByTestId(container, 'read-only')).toBeInTheDocument();
    });
  });

  describe('when `props.readOnlyMode` is `false`', () => {
    beforeEach(() => {
      props.readOnlyMode = false;
    });

    it('should not render ReadOnly component', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'read-only')).toBeNull();
    });

    it('should display `props.options.title` and `props.options.subOptions.label`', () => {
      const {container} = getComponent();
      props.options.forEach(option => {
        expect(getByText(container, option.title)).toBeInTheDocument();
        option.subOptions.forEach(subOption => {
          const subOptionField = getByTestId(container, `subOption-${option.id}-${subOption.id}`);
          expect(getByText(subOptionField, subOption.label)).toBeInTheDocument();
        });
      });
    });

    describe('when a subOption is clicked', () => {
      beforeEach(() => {
        const {container} = getComponent();
        const subOption = getByTestId(container, 'subOption-1-1');
        fireEvent.click(subOption);
      });

      it('should fire `props.form.setFieldValue`', () => {
        expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
        expect(props.form.setFieldValue).toHaveBeenCalledWith('test.S1P1O1', '1');
      });
    });
  });
});
