import React from 'react';
import {Formik, Field} from 'formik';
import Button from '@mui/material/Button';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
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
      label: 'Write your name',
      name: 'S1P1',
      number: '1',
      type: 5,
      options,
      validations: [
        {
          id: 1,
          rules: [
            {
              id: 1,
              conditions: [
                {
                  id: 1,
                  question: 'S1P1',
                  value: 1,
                  type: 'lt',
                  section: 'S1'
                }
              ]
            }
          ],
          message: {text: 'Must select an option', type: 'error'}
        }
      ],
      subQuestions: [],
      userVarName: 's1p1'
    }
  ]
};

function Template(args) {
  const {withErrors, withWarnings, initialValues, ...props} = args;
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section, sections: [section]});
  return (
    <Formik
      initialValues={{S1: [{S1P1: {id: 1, answer: {value: initialValues || []}}}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
      enableReinitialize
    >
      {({values, submitForm}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <>
            <Field component={Checkbox} {...props} warnings={warnings} />
            {withErrors ? (
              <Button onClick={submitForm} variant="contained">
                Click to validate form
              </Button>
            ) : null}
          </>
        );
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: {text: 'Select an option'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  options
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  disabled: true,
  label: {text: 'Select an option'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  options,
  initialValues: ['2']
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  disabled: false,
  label: {text: 'Select an option'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  withErrors: true,
  options
};

export const WithExclusiveOptions = Template.bind({});
WithExclusiveOptions.args = {
  disabled: false,
  label: {text: 'Select an option'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  options: [
    ...options,
    {
      id: 4,
      name: 'S1P1O1',
      value: '4',
      label: 'Option 4 (exclusive)',
      subOptions: [
        {
          id: 1
        }
      ],
      exclusive: true
    },
    {
      id: 5,
      name: 'S1P1O1',
      value: '6',
      label: 'DN (exclusive)',
      subOptions: [
        {
          id: 1
        }
      ],
      exclusive: true
    }
  ]
};
