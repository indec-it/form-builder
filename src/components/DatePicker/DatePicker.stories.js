import React from 'react';
import {Formik, Field} from 'formik';
import Button from '@mui/material/Button';

import getWarnings from '@/utils/getWarnings';
import getSchemas from '@/utils/getSchemas';

import DatePicker from './DatePicker';

export default {
  title: 'Date',
  component: DatePicker,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

function Template(args) {
  const {
    withErrors, withWarnings, initialValues, section, ...props
  } = args;
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  return (
    <Formik initialValues={initialValues} validationSchema={withErrors ? validateSchema : null}>
      {({values, submitForm}) => {
        const warnings = withWarnings ? getWarnings(warningSchema, values) || {} : {};
        return (
          <>
            <Field
              component={DatePicker}
              warnings={warnings}
              {...props}
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

const section = dateType => ({
  id: 1,
  name: 'S1',
  label: 'Sección 1',
  questions: [
    {
      id: 1,
      label: 'Select a date',
      name: 'S1P1',
      number: '1',
      type: 6,
      metadata: {dateType},
      validations: [
        {
          id: 1,
          type: 'required',
          params: [
            {
              id: 1,
              message: 'Must select a date'
            }
          ],
          messageType: 'error'
        }
      ],
      userVarName: 's1p1'
    }
  ],
  userVarName: 's1'
});

export const Basic = Template.bind({});
Basic.args = {
  readOnlyMode: false,
  label: 'Select dates',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  metadata: {
    dateType: 'dateWithoutHour'
  },
  initialValues: {S1: [{S1P1: {id: 1, answer: {value: ''}}}]},
  section: section('dateWithoutHour')
};

export const DateWithHour = Template.bind({});
DateWithHour.args = {
  readOnlyMode: false,
  label: 'Select dates',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  metadata: {
    dateType: 'dateWithHour'
  },
  initialValues: {S1: [{S1P1: {id: 1, answer: {value: ''}}}]},
  section: section('dateWithHour')
};

export const RangeWithoutHour = Template.bind({});
RangeWithoutHour.args = {
  readOnlyMode: false,
  label: 'Select dates',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  metadata: {
    dateType: 'rangeWithoutHour'
  },
  initialValues: {S1: [{S1P1: {id: 1, answer: {value: {start: '', end: ''}}}}]},
  section: section('rangeWithoutHour')
};

export const RangeWithHour = Template.bind({});
RangeWithHour.args = {
  readOnlyMode: false,
  label: 'Select dates',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  metadata: {
    dateType: 'rangeWithHour'
  },
  initialValues: {S1: [{S1P1: {id: 1, answer: {value: {start: '', end: ''}}}}]},
  section: section('rangeWithHour')
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  readOnlyMode: false,
  label: 'Select dates',
  required: false,
  name: 'S1.0.S1P1.answer.value',
  warnings: {},
  metadata: {
    dateType: 'rangeWithHour'
  },
  initialValues: {S1: [{S1P1: {id: 1, answer: {value: {start: '', end: ''}}}}]},
  withErrors: true,
  section: section('rangeWithHour')
};
