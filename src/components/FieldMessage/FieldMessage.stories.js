import React from 'react';
import {Formik, Field} from 'formik';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import FieldMessage from './FieldMessage';

export default {
  title: 'FieldMessage',
  component: FieldMessage,
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
      multiple: false,
      favorite: false,
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
  ],
  multiple: false,
  favorite: false,
  interruption: {
    name: 'S1I1',
    interruptible: false,
    reason: '',
    options: [
      {
        id: 1
      }
    ]
  },
  headers: [
    {
      id: 1
    }
  ],
  userVarName: 's1'
};

function Template(args) {
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section});
  const {withErrors, withWarnings, ...props} = args;
  return (
    <Formik
      initialValues={{S1: [{S1P1: {id: 1, answer: {value: ''}}}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
    >
      {({values, submitForm}) => {
        React.useEffect(() => {
          submitForm();
        }, []);
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return <Field component={FieldMessage} {...props} warnings={warnings} disabled={false} />;
      }}
    </Formik>
  );
}

export const WithError = Template.bind({});
WithError.args = {
  name: 'S1.0.S1P1.answer.value',
  withErrors: true
};

export const WithWarning = Template.bind({});
WithWarning.args = {
  name: 'S1.0.S1P1.answer.value',
  withWarnings: true
};
