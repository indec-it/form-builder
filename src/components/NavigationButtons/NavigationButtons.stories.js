import React from 'react';
import {Formik} from 'formik';

import NavigationButtons from './NavigationButtons';

export default {
  title: 'NavigationButtons',
  component: NavigationButtons,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

function Template(args) {
  return (
    <Formik initialValues={{S1: [{S1P1: ''}]}}>
      <NavigationButtons {...args} />
    </Formik>
  );
}

export const Basic = Template.bind({});
Basic.args = {
  onPrevious: () => {},
  onAddNew: null,
  onInterrupt: null
};

export const WithButtonToAddMore = Template.bind({});
WithButtonToAddMore.args = {
  onPrevious: () => {},
  onAddNew: () => {},
  onInterrupt: null
};

export const WithButtonToInterruptSurvey = Template.bind({});
WithButtonToInterruptSurvey.args = {
  onPrevious: () => {},
  onInterrupt: () => {},
  onAddNew: null
};

export const WithPreviousButtonDisabled = Template.bind({});
WithPreviousButtonDisabled.args = {
  onPrevious: () => {},
  onInterrupt: null,
  onAddNew: null,
  isLastSection: true,
  disablePreviousButton: true
};
