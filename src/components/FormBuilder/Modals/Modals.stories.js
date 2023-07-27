import React from 'react';
import {Formik} from 'formik';

import Modals from './Modals';

export default {
  title: 'Modals',
  component: Modals,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

function Template(args) {
  return (
    <Formik initialValues={{S1: {id: 1, answer: ''}}} onSubmit={() => {}}>
      <Modals
        acceptButtonLabel="Accept"
        cancelButtonLabel="Cancel"
        onClose={() => {}}
        onAccept={() => {}}
        open
        {...args}
      />
    </Formik>
  );
}

export const Interruption = Template.bind({});
Interruption.args = {
  modal: 2,
  label: 'Select an option',
  options: [
    {
      value: '1',
      label: 'Yes'
    },
    {
      value: '2',
      label: 'No'
    }
  ],
  name: 'S1'
};

export const ConfirmDeleteSection = Template.bind({});
ConfirmDeleteSection.args = {modal: 3};
