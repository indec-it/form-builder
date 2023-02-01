import React from 'react';

import SectionHeader from './SectionHeader';

export default {
  title: 'SectionHeader',
  component: SectionHeader,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

const section = {
  id: 1,
  name: 'S1',
  label: 'Sección 1',
  multiple: false,
  questions: [
    {
      id: 1,
      label: 'Write your name',
      name: 'S1P1',
      number: '1',
      type: 1,
      options: [],
      validations: [],
      userVarName: 's1p1'
    },
    {
      id: 1,
      label: 'Write your age',
      name: 'S1P2',
      number: '1',
      type: 2,
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
};

function Template(args) {
  return (
    <SectionHeader
      section={section}
      onView={() => {}}
      onEdit={() => {}}
      onDelete={() => {}}
      sectionsLength={1}
      {...args}
    />
  );
}

export const Basic = Template.bind({});
Basic.args = {
  isSurvey: true,
  values: {
    S1P1: {id: 1, answer: ''},
    S1P2: {id: 2, answer: ''}
  }
};

export const WithAnswers = Template.bind({});
WithAnswers.args = {
  isSurvey: true,
  values: {
    S1P1: {id: 1, answer: 'My name'},
    S1P2: {id: 2, answer: 'My age'}
  }
};

export const WithIntroduction = Template.bind({});
WithIntroduction.args = {
  isSurvey: true,
  values: {
    S1P1: {id: 1, answer: ''},
    S1P2: {id: 2, answer: ''}
  },
  section: {...section, introduction: 'this is an introduction text'}
};
