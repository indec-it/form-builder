import React from 'react';
import {Formik, Field} from 'formik';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import InputLabel from './InputLabel';

export default {
  title: 'InputLabel',
  component: InputLabel,
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
      label: 'Write your name',
      name: 'S1P1',
      number: '1',
      type: 1,
      options: [
        {
          id: 1,
          name: 'S1P1O1',
          subOptions: [
            {
              id: 1
            }
          ]
        }
      ],
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
                  section: 'S2'
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
                  section: 'S2'
                }
              ]
            }
          ],
          message: {text: 'Your name shouldn`t have less than 2 characters', type: 'warning'}
        }
      ],
      userVarName: 's1p1'
    }
  ]
};

function Template(args) {
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section});
  const {withErrors, withWarnings, ...props} = args;
  return (
    <Formik
      initialValues={{S1: [{S1P1: {answer: {value: ''}}}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
    >
      {({values, submitForm}) => {
        React.useEffect(() => {
          submitForm();
        }, []);
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return <Field component={InputLabel} {...props} warnings={warnings} disabled={false} />;
      }}
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {}
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  withErrors: true
};

export const WithWarnings = Template.bind({});
WithWarnings.args = {
  label: {text: 'Write your name'},
  name: 'S1.0.S1P1.answer.value',
  withWarnings: true
};
