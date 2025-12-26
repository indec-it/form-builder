import React from 'react';
import {Formik, Field} from 'formik';

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
        label: 'DKN',
        exclusive: true
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
          rules: [
            {
              id: 1,
              conditions: [
                {
                  id: 1,
                  question: 'S1P1',
                  value: '',
                  type: 'eq',
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
            <Field component={RadioTable} {...props} warnings={warnings} />
            {withErrors ? (
              <button
                type="button"
                onClick={submitForm}
                className="fb:px-4 fb:py-2 fb:bg-blue-600 fb:text-white fb:rounded fb:hover:bg-blue-700 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500"
              >
                Click to validate form
              </button>
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
  initialValues: {S1P1O1: '2', S1P1O2: '1', S1P1O3: '3'}
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
