import React from 'react';
import {Formik, Field} from 'formik';
import {Button} from '@mui/material';

import getWarningsAndErrorsSchemas from '@/utils/getWarningsAndErrorsSchemas';
import getWarnings from '@/utils/getWarnings';

import Radio from './Radio';

export default {
  title: 'Radio',
  component: Radio,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

const options = [
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
];

const section = {
  id: 1,
  name: 'S1',
  label: 'Sección 1',
  questions: [
    {
      id: 1,
      label: 'Ingrese su nombre',
      name: 'S1P1',
      number: '1',
      type: 1,
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
  const {errorSchema: validateSchema, warningSchema} = getWarningsAndErrorsSchemas(section);
  const {withErrors, withWarnings, ...props} = args;
  return (
    <Formik
      initialValues={{S1: [{S1P1: ''}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
    >
      {({values, submitForm}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <>
            <Field
              component={Radio}
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
  readOnlyMode: false,
  label: 'Select an option',
  required: false,
  name: 'S1.0.S1P1',
  warnings: {},
  options
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  readOnlyMode: true,
  label: 'Select an option',
  required: false,
  name: 'S1.0.S1P1',
  warnings: {},
  options
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  readOnlyMode: false,
  label: 'Select an option',
  required: true,
  name: 'S1.0.S1P1',
  warnings: {},
  withErrors: true,
  options
};
