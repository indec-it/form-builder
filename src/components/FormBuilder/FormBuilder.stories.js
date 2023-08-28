import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
    name: 'S2',
    label: 'INGRESOS',
    questions: [
      {
        id: 1,
        label: 'Tipo de Transaccion',
        name: 'S2P1',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: '1.1 Manufactura sobre insumos fisicos',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '1.1.1 Bienes recibidos del exterior',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: '1.1.2 Bienes devueltos al exterior',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: '1.2 Mantenimiento y reparaciones',
            value: '4'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [
          {
            id: 1,
            rules: [
              {
                id: 1,
                conditions: [
                  {
                    id: 1,
                    question: 'S2P1',
                    value: '',
                    type: 'eq',
                    section: 'S2'
                  }
                ]
              }
            ],
            message: {text: 'Debe seleccionar un tipo de transaccion', type: 'error'}
          }
        ],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'Transaccion'
      },
      {
        id: 2,
        label: 'Modo de suminstro',
        name: 'S2P2',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: '100%',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '20%',
            value: '2'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'suminstro'
      },
      {
        id: 3,
        label: 'Monto Total',
        name: 'S2P3',
        number: '1',
        type: 2,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: '',
            value: '',
            needSpecification: false
          }
        ],
        multiple: false,
        favorite: false,
        validations: [
          {
            id: 1,
            rules: [
              {
                id: 1,
                conditions: [
                  {
                    id: 1,
                    question: 'S2P3',
                    value: '',
                    type: 'eq',
                    section: 'S2'
                  }
                ]
              }
            ],
            message: {text: 'Debe ingresar un monto', type: 'error'}
          }
        ],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'Monto'
      },
      {
        id: 4,
        label: 'Pais de destino',
        name: 'S2P4',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: 'Chile',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'MExico',
            value: '2'
          }
        ],
        multiple: true,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'Pais'
      },
      {
        id: 5,
        label: 'Servicios',
        name: 'S2P5',
        number: '1',
        type: 7,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1,
                value: '1',
                label: 'Si'
              },
              {
                id: 2,
                value: '2',
                label: 'No'
              }
            ],
            label: '',
            value: '',
            needSpecification: false,
            userVarName: 'ServInf',
            title: 'Servicios Informaticos',
            repeated: true
          },
          {
            id: 2,
            name: 'S1P5O2',
            subOptions: [
              {
                id: 1,
                value: '1',
                label: 'Si'
              },
              {
                id: 2,
                value: '2',
                label: 'No'
              }
            ],
            userVarName: 'OtrosServ',
            title: 'Otros Servicios'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'ServTot'
      }
    ],
    multiple: true,
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
    userVarName: 'Ingreso',
    introduction: 'Seleccione aquellos Items para los cuales tuvo Ingresos'
  },
  {
    id: 1,
    name: 'S1',
    label: 'EGRESOS',
    questions: [
      {
        id: 1,
        label: 'Tipo de Transaccion',
        name: 'S1P1',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: '2.1 Manufatura sobre insumos fisicos',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '2.1.1 Bienes enviados al exterior',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: '2.2 Mantenimiento y reparaciones',
            value: '3'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'Transaccion'
      },
      {
        id: 2,
        label: 'Modo de suminstro',
        name: 'S1P2',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: '100%',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '75%',
            value: '2'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'Suministro'
      },
      {
        id: 4,
        label: 'País de destino',
        name: 'S1P4',
        number: '1',
        type: 3,
        options: [
          {
            id: 1,
            name: 'S1P1O1',
            subOptions: [
              {
                id: 1
              }
            ],
            label: 'Brasil',
            value: '1',
            needSpecification: true
          },
          {
            id: 2,
            needSpecification: true,
            label: 'Perú',
            value: '2'
          },
          {
            id: 3,
            needSpecification: true,
            label: 'Corea',
            value: '3'
          },
          {
            id: 4,
            needSpecification: true,
            label: 'Paraguay',
            value: '40'
          }
        ],
        multiple: true,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [
          {
            id: 1,
            optionId: 1,
            type: 1,
            label: 'Monto pais',
            name: 'S2P4SQ1',
            validations: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        type: 'eq',
                        question: 'S2P4SQ1',
                        value: '',
                        section: 'S2'
                      },
                      {
                        id: 2,
                        type: 'eq',
                        question: 'S1P4',
                        value: '1',
                        section: 'S2'
                      }
                    ]
                  }
                ],
                message: {type: 'error', text: 'Debe completar el campo'}
              }
            ],
            navigation: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        type: 'ne',
                        question: 'S1P4',
                        value: '1',
                        section: 'S2'
                      }
                    ]
                  }
                ],
                action: 'hide'
              }
            ],
            userVarName: 'monto1'
          },
          {
            id: 2,
            optionId: 2,
            type: 1,
            label: 'Monto pais',
            name: 'S2P4SQ2',
            validations: [],
            navigation: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        type: 'ne',
                        question: 'S1P4',
                        value: '2',
                        section: 'S2'
                      }
                    ]
                  }
                ],
                action: 'hide'
              }
            ],
            userVarName: 'monto2'
          },
          {
            id: 3,
            optionId: 3,
            type: 1,
            label: 'Monto pais',
            name: 'S2P4SQ3',
            validations: [],
            navigation: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        type: 'ne',
                        question: 'S1P4',
                        value: '3',
                        section: 'S2'
                      }
                    ]
                  }
                ],
                action: 'hide'
              }
            ],
            userVarName: 'monto3'
          },
          {
            id: 4,
            optionId: 4,
            type: 1,
            label: 'Monto pais',
            name: 'S2P4SQ4',
            validations: [],
            navigation: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        type: 'ne',
                        question: 'S1P4',
                        value: '4',
                        section: 'S2'
                      }
                    ]
                  }
                ],
                action: 'hide'
              }
            ],
            userVarName: 'monto4'
          }
        ],
        metadata: {},
        userVarName: 'Pais'
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
        id: 1
      }
    ],
    userVarName: 'Egresos'
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
    <Container>
      <FormBuilder
        {...args}
        section={sections[page]}
        page={page}
        onSubmit={() => setPage(page + 1)}
        onPrevious={() => setPage(page - 1)}
        isLastSection={sections.length - 1 === page}
      />
    </Container>
  );
}

export const Basic = Template.bind({});

export const WithInitialValues = Template.bind({});
WithInitialValues.args = {
  initialValues: {
    S2: [
      {
        id: 1,
        S2P1: {
          id: 1,
          answer: {
            value: '1'
          }
        },
        S2P2: {
          id: 2,
          answer: {
            value: '1'
          }
        },
        S2P3: {
          id: 3,
          answer: {
            value: 12345
          }
        },
        S2P4: {
          id: 4,
          answer: [
            {
              id: 1,
              value: '1'
            }
          ]
        },
        S2P5: {
          id: 5,
          answer: {
            value: {
              S1P1O1: '1',
              S1P5O2: '2'
            }
          }
        }
      },
      {
        id: 2,
        S2P1: {
          id: 1,
          answer: {
            value: '3'
          }
        },
        S2P2: {
          id: 2,
          answer: {
            value: '2'
          }
        },
        S2P3: {
          id: 3,
          answer: {
            value: 54321
          }
        },
        S2P4: {
          id: 4,
          answer: [
            {
              id: 1,
              value: '2'
            }
          ]
        },
        S2P5: {
          id: 5,
          answer: {
            value: {
              S1P1O1: '2',
              S1P5O2: '2'
            }
          }
        }
      }
    ],
    S1: [
      {
        id: 1,
        S1P1: {
          id: 1,
          answer: {
            value: '3'
          }
        },
        S1P2: {
          id: 2,
          answer: {
            value: '2'
          }
        },
        S1P4: {
          id: 4,
          answer: [
            {
              id: 1,
              value: '3',
              specifications: {
                S2P4SQ1: {
                  id: 1,
                  answer: {
                    value: ''
                  }
                },
                S2P4SQ2: {
                  id: 2,
                  answer: {
                    value: ''
                  }
                },
                S2P4SQ3: {
                  id: 3,
                  answer: {
                    value: '1234'
                  }
                },
                S2P4SQ4: {
                  id: 4,
                  answer: {
                    value: ''
                  }
                }
              }
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

export const WithReadOnlyMode = Template.bind({});
WithReadOnlyMode.args = {
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
  },
  isReadOnly: true
};
