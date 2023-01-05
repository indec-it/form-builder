import React from 'react';

import FormBuilder from './FormBuilder';

export default {
  title: 'FormBuilder',
  component: FormBuilder,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
};

const sections = [
  {
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
            type: 'required',
            params: [
              {
                id: 1,
                message: 'Must write your name'
              }
            ],
            messageType: 'error'
          }
        ],
        userVarName: 'S1P1'
      },
      {
        label: 'Write your age',
        name: 'S1P2',
        number: '2',
        type: 2,
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
            type: 'required',
            params: [
              {
                id: 1,
                message: 'Must write your age'
              }
            ],
            messageType: 'error',
            dependsOn: '2'
          }
        ],
        id: 2,
        userVarName: 'S1P2'
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
        id: 1,
        question: 1
      },
      {
        id: 2,
        question: 2
      }
    ],
    userVarName: 'S1'
  },
  {
    name: 'S2',
    label: 'Sección 2',
    questions: [
      {
        label: 'Select the correct option',
        name: 'S2P1',
        number: '1',
        type: 4,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            value: '1',
            label: 'Yes'
          },
          {
            id: 2,
            value: '2',
            label: 'No'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [
          {
            id: 1,
            type: 'required',
            params: [
              {
                id: 1,
                message: 'Must select an option'
              }
            ],
            messageType: 'error'
          }
        ],
        userVarName: 'S2P1'
      }
    ],
    multiple: false,
    favorite: false,
    interruption: {
      name: 'S2I',
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
    id: 2,
    userVarName: 'S2'
  }
];

function Template(args) {
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    if (!sections[page]) {
      setPage(0);
    }
  }, [page]);
  return (
    <FormBuilder
      {...args}
      section={sections[page]}
      page={page}
      onSubmit={() => setPage(page + 1)}
      onPrevious={() => setPage(page - 1)}
      nextSection={sections[page + 1]?.name}
      previousSection={sections[page - 1]?.name}
      isSurvey
    />
  );
}

export const Basic = Template.bind({});
