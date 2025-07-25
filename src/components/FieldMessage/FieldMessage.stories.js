import React from 'react';

import FieldMessage from './FieldMessage';

export default {
  title: 'FieldMessage',
  component: FieldMessage
};

function ErrorStory() {
  const mockForm = {
    errors: {testField: 'This is an error message'},
    touched: {testField: true},
    submitCount: 1
  };
  const mockField = {name: 'testField', value: ''};

  return <FieldMessage form={mockForm} field={mockField} warnings={{}} />;
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

  return <FieldMessage form={mockForm} field={mockField} warnings={mockWarnings} />;
}

export const Warning = WarningStory.bind({});

function ErrorAndWarningStory() {
  const mockForm = {
    errors: {testField: 'This is an error message'},
    touched: {testField: true},
    submitCount: 1
  };
  const mockField = {name: 'testField', value: ''};
  const mockWarnings = {testField: 'This is a warning message'};

  return (
    <div>
      <p>Note: Error takes precedence over warning</p>
      <FieldMessage form={mockForm} field={mockField} warnings={mockWarnings} />
    </div>
  );
}

export const ErrorAndWarning = ErrorAndWarningStory.bind({});
