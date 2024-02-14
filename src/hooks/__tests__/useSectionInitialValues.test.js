import {renderHook} from '@testing-library/react';

import useSectionInitialValues from '../useSectionInitialValues';

const section = {
  name: 'S2',
  label: 'COMPONENTES DEL HOGAR (CH)',
  questions: [
    {
      id: 1,
      label: '¿Cuál es el nombre de pila?',
      name: 'S2P1',
      number: '1',
      type: 3,
      options: [],
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
          message: {text: 'Debe completar el campo', type: 'error'}
        }
      ],
      subQuestions: [],
      metadata: {},
      userVarName: 'Transaccion'
    },
    {
      id: 2,
      label: '¿Cuál es la relación de parentesco con el/la jefe/a de hogar?',
      name: 'S2P2',
      number: '2',
      type: 4,
      options: [
        {
          id: 1,
          name: 'S1P1O1',
          value: '2',
          label: 'Cónyuge/Pareja',
          subOptions: [
            {
              id: 1
            }
          ]
        },
        {
          id: 2,
          name: 'S1P1O2',
          value: '2',
          label: 'Hijo/a Hijastro/a',
          subOptions: [
            {
              id: 1
            }
          ]
        },
        {
          id: 3,
          name: 'S1P1O3',
          value: '3',
          label: 'Padre/Madre',
          subOptions: [
            {
              id: 1
            }
          ]
        },
        {
          id: 3,
          name: 'S1P1O4',
          value: '4',
          label: 'Hermano/a',
          subOptions: [
            {
              id: 1
            }
          ]
        }
      ],
      multiple: false,
      favorite: false,
      validations: [],
      subQuestions: [],
      metadata: {},
      userVarName: 'suminstro'
    },
    {
      id: 3,
      label: '¿Es varón o mujer?',
      name: 'S2P3',
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
};

describe('useSectionInitialValues', () => {
  describe('when `values` is provided', () => {
    const values = {
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
      ]
    };
    it('should return `values`', () => {
      const {result} = renderHook(() => useSectionInitialValues(values, section));
      expect(result.current.initialValues).toEqual(values);
    });
  });

  describe('when `values` is not provided', () => {
    const values = {
      S2: [
        {
          id: 1,
          S2P1: {
            id: 1,
            answer: {
              value: ''
            }
          },
          S2P2: {
            id: 2,
            answer: {
              value: ''
            }
          },
          S2P3: {
            id: 3,
            answer: {
              value: ''
            }
          },
          S2P4: {
            id: 4,
            answer: [
              {
                id: 1,
                value: ''
              }
            ]
          },
          S2P5: {
            id: 5,
            answer: {
              value: {
                S1P1O1: undefined,
                S1P5O2: undefined
              }
            }
          }
        }
      ]
    };
    it('should return `values`', () => {
      const {result} = renderHook(() => useSectionInitialValues(null, section));
      expect(result.current.initialValues).toEqual(values);
    });
  });
});
