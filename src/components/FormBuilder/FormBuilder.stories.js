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
        userVarName: 'S1P1',
        subQuestions: []
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
        userVarName: 'S1P2',
        subQuestions: []
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
        userVarName: 'S1P3',
        subQuestions: []
      },
      {
        id: 4,
        label: 'Select an option',
        name: 'S1P4',
        number: '4',
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
            label: 'Yes',
            value: '1',
            needSpecification: true
          },
          {
            id: 2,
            needSpecification: true,
            label: 'No',
            value: '2'
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
        subQuestions: [
          {
            id: 1,
            optionId: 1,
            type: '1',
            label: 'Add specification',
            name: 'S1P1SQ1',
            validations: [
              {
                id: 1,
                type: 'required',
                params: [
                  {
                    id: 1,
                    message: 'Must add a specification for option 1'
                  }
                ],
                messageType: 'error'
              },
              {
                id: 2,
                type: 'min',
                params: [
                  {
                    id: 1,
                    value: 2,
                    message: 'Should have at least 2 characters'
                  }
                ],
                messageType: 'warning'
              }
            ],
            userVarName: 'S1P1E1'
          },
          {
            id: 2,
            optionId: 2,
            type: '1',
            label: 'Add specification',
            name: 'S1P1SQ2',
            validations: [
              {
                id: 1,
                type: 'required',
                params: [
                  {
                    id: 1,
                    message: 'Must add a specification for option 2'
                  }
                ],
                messageType: 'error'
              }
            ],
            userVarName: 'S1P1E2'
          }
        ],
        metadata: {},
        userVarName: 'S1P4'
      }
    ],
    multiple: true,
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
        id: 1,
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
      isLastSection={sections.length - 1 === page}
      isSurvey
    />
  );
}

export const Basic = Template.bind({});

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  initialValues: {
    S1: [
      {
        id: 1,
        S1P1: {
          id: 1,
          answer: {value: 'test'}
        },
        S1P2: {
          id: 2,
          answer: {value: 26}
        },
        S1P3: {
          id: 3,
          answer: [
            {
              id: 1,
              value: 123456
            },
            {
              id: 2,
              value: 12345678
            }
          ]
        }
      }
    ]
  }
};

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
