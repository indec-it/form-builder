import React from 'react';
import {Formik, Field} from 'formik';
import {Button} from '@mui/material';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import RadioTable from './RadioTable';

export default {
  title: 'RadioTable',
  component: RadioTable,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

const options = [
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
];

const section = {
  id: 1,
  name: 'S1',
  label: 'Sección 1',
  questions: [
    {
      id: 1,
      label: 'Write your name',
      name: 'S1P1',
      number: '1',
      type: 7,
      options,
      validations: [
        {
          id: 1,
          type: 'required',
          params: [
            {
              id: 1,
              message: 'Must select an option'
            }
          ],
          messageType: 'error'
        }
      ],
      userVarName: 's1p1'
    }
  ]
};

function Template(args) {
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  const {withErrors, withWarnings, initialValues, ...props} = args;
  return (
    <Formik
      initialValues={{
        S1: [
          {
            id: 1,
            multiple: false,
            status: 2,
            S1P1: {
              id: 1,
              answer: {
                value: initialValues || {S1P1O1: undefined, S1P1O2: undefined, S1P1O3: undefined}
              }
            }
          }
        ]
      }}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
    >
      {({values, submitForm}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <>
            <Field
              component={RadioTable}
              {...props}
              warnings={warnings}
            />
            {
              withErrors
                ? <Button onClick={submitForm} variant="contained">Click to validate form</Button>
                : null
            }
          </>
        );
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: 'Select an option',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  options
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  disabled: true,
  label: 'Select an option',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  options,
  initialValues: {S1P1O1: '2', S1P1O2: '1', S1P1O3: '3'}
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  disabled: false,
  label: 'Select an option',
  required: true,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  withErrors: true,
  options
};
