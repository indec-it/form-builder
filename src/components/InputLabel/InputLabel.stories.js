import React from 'react';

import InputLabel from './InputLabel';

export default {
  title: 'InputLabel',
  component: InputLabel
};

function ErrorStory() {
  const mockForm = {
    errors: {testField: 'This field is required'},
    touched: {testField: true},
    submitCount: 1
  };
  const mockField = {name: 'testField', value: ''};
  const mockLabel = {
    text: 'Test Label',
    number: '1'
  };

  return <InputLabel label={mockLabel} form={mockForm} field={mockField} warnings={{}} disabled={false} />;
}

export const Error = ErrorStory.bind({});

function WarningStory() {
  const mockForm = {
    errors: {},
    touched: {},
    submitCount: 0
  };
  const mockField = {name: 'testField', value: ''};
  const mockWarnings = {testField: 'This is a warning message'};
  const mockLabel = {
    text: 'Test Label',
    number: '2'
  };

  return <InputLabel label={mockLabel} form={mockForm} field={mockField} warnings={mockWarnings} disabled={false} />;
}

export const Warning = WarningStory.bind({});

function WithIntroductionStory() {
  const mockForm = {
    errors: {},
    touched: {},
    submitCount: 0
  };
  const mockField = {name: 'testField', value: ''};
  const mockLabel = {
    text: 'Test Label with Introduction',
    number: '3',
    introduction: 'This is an introduction text that appears below the label.'
  };

  return <InputLabel label={mockLabel} form={mockForm} field={mockField} warnings={{}} disabled={false} />;
}

export const WithIntroduction = WithIntroductionStory.bind({});
