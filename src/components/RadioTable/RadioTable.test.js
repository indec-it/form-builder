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
              label: 'DKN',
              exclusive: true
            }
          ],
          userVarName: 'S1P1O3',
          title: 'Options 3'
        }
      ],
      disabled: false,
      required: false,
      label: 'Select the correct options',
      field: {value: {S1P1O1: undefined, S1P1O2: undefined, S1P1O3: undefined}, name: 'test'},
      form: {setFieldValue: jest.fn(), setFieldTouched: jest.fn(), errors: {}, submitCount: 0}
    };
  });

  it('should render InputLabel component', () => {
    const {container} = getComponent();
    expect(getByTestId(container, 'input-label')).toBeInTheDocument();
  });

  describe('when `props.disabled` is `true`', () => {
    beforeEach(() => {
      props.disabled = true;
    });

    it('should not render ReadOnly component', () => {
      const {container} = getComponent();
      expect(queryByTestId(container, 'read-only')).toBeNull();
    });

    describe('and there are selected options', () => {
      beforeEach(() => {
        props.field.value = {S1P1O1: '1', S1P1O2: '2', S1P1O3: '3'};
      });

      it('should be checked the selected options', () => {
        const {container} = getComponent();
        const radioSelectedForFirstOption = getByTestId(container, 'subOption-1-1');
        const radioSelectedForSecondOption = getByTestId(container, 'subOption-2-2');
        const radioSelectedForThirdOption = getByTestId(container, 'subOption-3-3');
        expect(radioSelectedForFirstOption.querySelector('input').checked).toBe(true);
        expect(radioSelectedForSecondOption.querySelector('input').checked).toBe(true);
        expect(radioSelectedForThirdOption.querySelector('input').checked).toBe(true);
      });

      it('should not be checked other options', () => {
        const {container} = getComponent();
        const radioNoSelectedForFirstOption = getByTestId(container, 'subOption-1-2');
        const radioNoSelectedForSecondOption = getByTestId(container, 'subOption-2-1');
        const radioNoSelectedForThirdOption = getByTestId(container, 'subOption-3-2');
        expect(radioNoSelectedForFirstOption.querySelector('input').checked).toBe(false);
        expect(radioNoSelectedForSecondOption.querySelector('input').checked).toBe(false);
        expect(radioNoSelectedForThirdOption.querySelector('input').checked).toBe(false);
      });
    });
  });

  describe('when `props.disabled` is `false`', () => {
    beforeEach(() => {
      props.disabled = false;
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

    describe('when an exclusive subOption is clicked', () => {
      beforeEach(() => {
        props.field.value = {S1P1O1: '1', S1P1O2: '2', S1P1O3: undefined};
        const {container} = getComponent();
        const subOption = getByTestId(container, 'subOption-3-3');
        fireEvent.click(subOption);
      });

      it('should fire `props.form.setFieldValue`', () => {
        expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
        expect(props.form.setFieldValue).toHaveBeenCalledWith('test', {S1P1O1: undefined, S1P1O2: undefined, S1P1O3: '3'});
      });
    });

    describe('when there is an exclusive option selected and a subOption is clicked', () => {
      beforeEach(() => {
        props.field.value = {S1P1O1: undefined, S1P1O2: undefined, S1P1O3: '3'};
        const {container} = getComponent();
        const subOption = getByTestId(container, 'subOption-1-1');
        fireEvent.click(subOption);
      });

      it('should fire `props.form.setFieldValue`', () => {
        expect(props.form.setFieldValue).toHaveBeenCalledTimes(1);
        expect(props.form.setFieldValue).toHaveBeenCalledWith('test', {S1P1O1: '1', S1P1O2: undefined, S1P1O3: undefined});
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
        expect(props.form.setFieldValue).toHaveBeenCalledWith('test', {S1P1O1: '1', S1P1O2: undefined, S1P1O3: undefined});
      });
    });
  });
});
