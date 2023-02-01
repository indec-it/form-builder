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

export const Preview = Template.bind({});
Preview.args = {
  modal: 1,
  index: 0,
  section: {
    id: 1,
    name: 'S1',
    label: 'Sección 1',
    multiple: false,
    questions: [
      {
        id: 1,
        label: 'Ingrese su nombre',
        name: 'S1P1',
        number: '1',
        type: 1,
        options: [],
        validations: [],
        userVarName: 's1p1'
      }
    ],
    headers: [
      {
        id: 1,
        question: 1
      }
    ]
  },
  values: {
    S1: {id: 1, answer: ''}
  }
};

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
