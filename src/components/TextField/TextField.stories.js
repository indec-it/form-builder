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
          type: 'required',
          params: [
            {
              id: 1,
              message: 'Must write your name'
            }
          ],
          messageType: 'error'
        },
        {
          id: 2,
          params: [
            {
              id: 1,
              value: 2,
              message: 'Your name shouldn`t have less than 2 characters'
            }
          ],
          type: 'min',
          messageType: 'warning'
        }
      ],
      userVarName: 's1p1'
    }
  ],
  userVarName: 's1'
};

function Template(args) {
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  const {withErrors, withWarnings, ...props} = args;
  return (
    <Formik initialValues={{S1: [{S1P1: {id: 1, answer: ''}}]}} validationSchema={withErrors ? validateSchema : null}>
      {({values}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <Field
            component={TextField}
            {...props}
            warnings={warnings}
          />
        );
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: false,
  name: 'S1.0.S1P1.answer',
  warnings: {}
};

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
  readOnlyMode: true,
  label: 'Write your name',
  required: false,
  name: 'S1.0.S1P1.answer',
  warnings: {}
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  readOnlyMode: false,
  label: 'Write your name',
  tooltip: 'This is an input with tooltip',
  required: false,
  name: 'S1.0.S1P1.answer',
  warnings: {}
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: true,
  name: 'S1.0.S1P1.answer',
  warnings: {},
  withErrors: true
};

export const WithWarnings = Template.bind({});
WithWarnings.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: false,
  name: 'S1.0.S1P1.answer',
  withWarnings: true
};
