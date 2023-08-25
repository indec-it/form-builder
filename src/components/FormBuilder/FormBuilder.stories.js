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
    id: 1,
    name: 'S1',
    label: '6. Componentes del hogar (CH)',
    questions: [
      {
        id: 1,
        label: '¿Podría decirme su nombre?',
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              }
            ],
            message: {type: 'error', text: 'Debe ingresar su nombre'}
          }
        ],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P1',
        introduction: 'Registre primero al Jefe/a de Hogar.'
      },
      {
        id: 2,
        label: '¿Cuál es su edad en años cumplidos?',
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
            ],
            label: '',
            value: '',
            needSpecification: false
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P2'
      },
      {
        id: 3,
        label: '¿Cuál es la relación de parentesco con el/la jefe/a de hogar?',
        name: 'S1P3',
        number: '3',
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
            label: 'Jefe/a',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'Cónyuge/pareja',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: 'Hijo/a',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: 'Hijastro/a',
            value: '4'
          },
          {
            id: 5,
            needSpecification: false,
            label: 'Yerno/Nuera',
            value: '5'
          },
          {
            id: 6,
            needSpecification: false,
            label: 'Nieto/a',
            value: '6'
          },
          {
            id: 7,
            needSpecification: false,
            label: 'Padre o Madre',
            value: '7'
          },
          {
            id: 8,
            needSpecification: false,
            label: 'Suegro/a',
            value: '8'
          },
          {
            id: 9,
            needSpecification: false,
            label: 'Hermano/a',
            value: '9'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Cuñado/a',
            value: '10'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Sobrino/a',
            value: '11'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Abuelo/a',
            value: '12'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Otro familiar',
            value: '13'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Otro no familiar',
            value: '14'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P2'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P3'
      },
      {
        id: 4,
        label: '¿Cuál es el sexo?',
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
            label: 'Mujer',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'Varon',
            value: '2'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P2'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P3'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P4'
      },
      {
        id: 5,
        label: 'De acuerdo con la identidad de género, ¿se considera...',
        name: 'S1P5',
        number: '5',
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
            label: '...mujer trans/travesti?',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '...varón trans?',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: '..mujer?',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: '..varón?',
            value: '4'
          },
          {
            id: 5,
            needSpecification: true,
            label: '...otro?',
            value: '5'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P2'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P3'
                  }
                ]
              },
              {
                id: 4,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P4'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [
          {
            id: 1,
            optionId: 5,
            type: '1',
            label: 'Especificar',
            name: 'S1P5SQ1',
            validations: [
              {
                id: 1,
                type: 'required',
                rules: [
                  {
                    id: 1,
                    conditions: []
                  }
                ],
                message: {
                  type: '',
                  text: ''
                }
              }
            ],
            userVarName: 'S1P6E1'
          }
        ],
        metadata: {},
        userVarName: 'S1P5'
      },
      {
        id: 6,
        label: '¿Actualmente está...',
        name: 'S1P6',
        number: '6',
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
            label: '...unido/a?',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '...casado/a?',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: '...separado/a?',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: '...divorciado/a?',
            value: '4'
          },
          {
            id: 5,
            needSpecification: false,
            label: '...viuda/o?',
            value: '5'
          },
          {
            id: 6,
            needSpecification: false,
            label: '...soltero/a?',
            value: '6'
          },
          {
            id: 7,
            needSpecification: false,
            label: 'Ns/Nc',
            value: '99'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P2'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P3'
                  }
                ]
              },
              {
                id: 4,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P5'
                  }
                ]
              },
              {
                id: 5,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P4'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P6'
      },
      {
        id: 7,
        label: '¿Asiste o asistió a algún establecimiento educativo?',
        name: 'S1P7',
        number: '7',
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
            label: 'Asiste',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'Asistió',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: 'Nunca asistió',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: 'Ns/Nc',
            value: '99'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P1'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P2'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P3'
                  }
                ]
              },
              {
                id: 4,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P4'
                  }
                ]
              },
              {
                id: 5,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P5'
                  }
                ]
              },
              {
                id: 6,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P6'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P7'
      },
      {
        id: 8,
        label: '¿El establecimiento es...',
        name: 'S1P8',
        number: '8',
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
            label: '...estatal?',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: '...privado?',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: '...de gestión comunitaria/social?',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: 'Ns/Nc',
            value: '99'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '3',
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '2',
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P8'
      },
      {
        id: 9,
        label: '¿Cuál es el nivel más alto que cursa o cursó?',
        name: 'S1P9',
        number: '9',
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
            label: 'Jardín maternal (45 días a 2 años)',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'Jardín (3 y 4 años)',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: 'Preescolar (5 años)',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: 'Primario',
            value: '4'
          },
          {
            id: 5,
            needSpecification: false,
            label: 'EGB (1° a 9° año)',
            value: '5'
          },
          {
            id: 6,
            needSpecification: false,
            label: 'Secundario (1° a 5° o 6° año)',
            value: '6'
          },
          {
            id: 7,
            needSpecification: false,
            label: 'Polimodal (1° a 3° o 4° año)',
            value: '7'
          },
          {
            id: 8,
            needSpecification: false,
            label: 'Superior no universitario/terciario',
            value: '8'
          },
          {
            id: 9,
            needSpecification: false,
            label: 'Universitario',
            value: '9'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Posgrado universitario',
            value: '10'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Educación especial',
            value: '98'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Ns/Nc',
            value: '99'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: 3,
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P8'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P9'
      },
      {
        id: 10,
        label: '¿Finalizó ese nivel?',
        name: 'S1P10',
        number: '100',
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
            label: 'Si',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'No',
            value: '2'
          }
        ],
        multiple: false,
        favorite: false,
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
                    section: 'S1',
                    value: '3',
                    type: 'eq',
                    question: 'S1P7'
                  },
                  {
                    id: 2,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P9'
                  }
                ]
              },
              {
                id: 2,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '4',
                    type: 'eq',
                    question: 'S1P7'
                  },
                  {
                    id: 2,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P9'
                  }
                ]
              },
              {
                id: 3,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P7'
                  }
                ]
              },
              {
                id: 4,
                conditions: [
                  {
                    id: 1,
                    section: 'S1',
                    value: '1',
                    type: 'eq',
                    question: 'S1P7'
                  },
                  {
                    id: 2,
                    section: 'S1',
                    value: '',
                    type: 'eq',
                    question: 'S1P9'
                  }
                ]
              }
            ],
            action: 'disable'
          }
        ],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P10'
      },
      {
        id: 11,
        label: '¿Cuál fue el último grado/año que aprobó?',
        name: 'S1P10',
        number: '11',
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
            label: 'Ninguno',
            value: '1',
            needSpecification: false
          },
          {
            id: 2,
            needSpecification: false,
            label: 'Primero',
            value: '2'
          },
          {
            id: 3,
            needSpecification: false,
            label: 'Segundo',
            value: '3'
          },
          {
            id: 4,
            needSpecification: false,
            label: 'Tercero',
            value: '4'
          },
          {
            id: 5,
            needSpecification: false,
            label: 'Cuarto',
            value: '5'
          },
          {
            id: 6,
            needSpecification: false,
            label: 'Quinto',
            value: '6'
          },
          {
            id: 7,
            needSpecification: false,
            label: 'Sexto',
            value: '7'
          },
          {
            id: 8,
            needSpecification: false,
            label: 'Séptimo',
            value: '8'
          },
          {
            id: 9,
            needSpecification: false,
            label: 'Octavo',
            value: '9'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Noveno',
            value: '10'
          },
          {
            id: 10,
            needSpecification: false,
            label: 'Ns/Nc',
            value: '99'
          }
        ],
        multiple: false,
        favorite: false,
        validations: [],
        navigation: [],
        subQuestions: [],
        metadata: {},
        userVarName: 'S1P11'
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
    userVarName: 'S1'
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
