import React from 'react';
import {Formik, Field} from 'formik';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import Currency from './Currency';

export default {
  title: 'Currency',
  component: Currency,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

const section = {
  id: 1,
  name: 'S1',
  label: 'Sección 1',
  questions: [
    {
      id: 1,
      label: 'Write amount',
      name: 'S1P1',
      number: '1',
      type: 8,
      options: [],
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
          message: {text: 'Must write an amount', type: 'error'}
        },
        {
          id: 2,
          rules: [
            {
              id: 1,
              conditions: [
                {
                  id: 1,
                  question: 'S1P1',
                  value: 3000,
                  type: 'lt',
                  section: 'S1'
                }
              ]
            }
          ],
          message: {text: 'The amount should not be less than 3000', type: 'warning'}
        }
      ],
      subQuestions: [],
      userVarName: 's1p1'
    }
  ]
};

function Template(args) {
  const {withErrors, withWarnings, initialValues, ...props} = args;
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section, sections: [section], initialValues});
  return (
    <Formik
      initialValues={{S1: [{S1P1: {id: 1, answer: {value: initialValues || ''}}}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
      enableReinitialize
    >
      {({values}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return <Field component={Currency} {...props} warnings={warnings} />;
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: {text: 'Write amount'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {}
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  disabled: true,
  label: {text: 'Write amount'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  initialValues: '1.111,21'
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  disabled: false,
  label: {text: 'Write amount'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  withErrors: true
};

export const WithWarnings = Template.bind({});
WithWarnings.args = {
  disabled: false,
  label: {text: 'Write amount'},
  name: 'S1.0.S1P1.answer.value',
  withWarnings: true
};
