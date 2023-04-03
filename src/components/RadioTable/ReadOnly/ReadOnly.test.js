import {getByTestId, getByText} from '@testing-library/react';

import ReadOnly from './ReadOnly';

describe('<ReadOnly>', () => {
  let props;
  const getComponent = () => render(ReadOnly, props);
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

  it('should display `props.options.title` and the selected option', () => {
    const {container} = getComponent();
    props.options.forEach(option => {
      expect(getByText(container, option.title)).toBeInTheDocument();
      const selectedOption = getByTestId(container, `selected-option-${option.id}`);
      expect(getByText(selectedOption, 'Sin respuesta.')).toBeInTheDocument();
    });
  });
});
