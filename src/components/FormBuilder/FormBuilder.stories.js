import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
      },
      {
        label: 'Cell number',
        name: 'S1P3',
        number: '3',
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
        multiple: true,
        favorite: false,
        validations: [
          {
            id: 1,
            type: 'required',
            params: [
              {
                id: 1,
                message: 'Must write your cell number'
              }
            ],
            messageType: 'error',
            dependsOn: '2'
          }
        ],
        id: 3,
        userVarName: 'S1P3'
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
      section={sections[page]}
      page={page}
      onSubmit={() => setPage(page + 1)}
      onPrevious={() => setPage(page - 1)}
      nextSection={sections[page + 1]?.name}
      previousSection={sections[page - 1]?.name}
      isSurvey
      {...args}
    />
  );
}

export const Basic = Template.bind({});

function SectionHeader() {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', backgroundColor: '#98b9ed', height: '100px'
    }}
    >
      <Typography>My custom header</Typography>
    </Box>
  );
}

export const WithCustomSectionHeader = Template.bind({});
WithCustomSectionHeader.args = {
  components: {
    SectionHeader: props => <SectionHeader {...props} />
  }
};

function NavigationButtons() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Button variant="outlined">Go back</Button>
      <Button variant="outlined" color="error">Next</Button>
    </Box>
  );
}

export const WithCustomNavigationButtons = Template.bind({});
WithCustomNavigationButtons.args = {
  components: {
    NavigationButtons: props => <NavigationButtons {...props} />
  }
};
