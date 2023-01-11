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
  ]
};

function Template(args) {
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  const {withErrors, withWarnings, ...props} = args;
  return (
    <Formik
      initialValues={{S1: [{S1P1: ''}]}}
      validationSchema={withErrors ? validateSchema : null}
      onSubmit={() => {}}
    >
      {({values, submitForm}) => {
        React.useEffect(() => {
          submitForm();
        }, []);
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <Field
            component={InputLabel}
            {...props}
            warnings={warnings}
            readOnly={false}
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
  name: 'S1.0.S1P1',
  warnings: {}
};

export const WithRequired = Template.bind({});
WithRequired.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: true,
  name: 'S1.0.S1P1',
  warnings: {}
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: true,
  name: 'S1.0.S1P1',
  warnings: {},
  withErrors: true
};

export const WithWarnings = Template.bind({});
WithWarnings.args = {
  readOnlyMode: false,
  label: 'Write your name',
  required: false,
  name: 'S1.0.S1P1',
  withWarnings: true
};
