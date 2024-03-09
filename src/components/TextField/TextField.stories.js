import React from 'react';
import {Formik, Field} from 'formik';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import TextField from './TextField';

export default {
  title: 'TextField',
  component: TextField,
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
      label: 'Ingrese su nombre',
      name: 'S1P1',
      number: '1',
      type: 1,
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
          message: {text: 'Must write your name', type: 'error'}
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
                  value: 2,
                  type: 'lt',
                  section: 'S1'
                }
              ]
            }
          ],
          message: {text: 'Your name shouldn`t have less than 2 characters', type: 'warning'}
        }
      ],
      userVarName: 's1p1',
      subQuestions: []
    }
  ],
  userVarName: 's1'
};

function Template(args) {
  const {withErrors, withWarnings, initialValues, ...props} = args;
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section, sections: [section]});
  return (
    <Formik
      initialValues={{S1: [{S1P1: {id: 1, answer: {value: initialValues || ''}}}]}}
      validationSchema={withErrors ? validateSchema : null}
    >
      {({values}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return <Field component={TextField} {...props} warnings={warnings} />;
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {}
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  disabled: true,
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  initialValues: 'dummy text'
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  disabled: false,
  label: {text: 'Write your name'},
  tooltip: 'This is an input with tooltip',
  name: 'S1.0.S1P1.answer.value',
  warnings: {}
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  disabled: false,
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  withErrors: true
};

export const WithWarnings = Template.bind({});
WithWarnings.args = {
  disabled: false,
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  withWarnings: true
};

export const WithMultiline = Template.bind({});
WithMultiline.args = {
  disabled: false,
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  multiline: true
};
