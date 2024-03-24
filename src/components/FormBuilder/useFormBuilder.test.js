import {act, renderHook} from '@testing-library/react';

import useFormBuilder from './useFormBuilder';

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
  }
];

describe('useFormBuilder', () => {
  describe('handleShowSurvey', () => {
    it('should update `showSurvey` and `readOnlyMode`', () => {
      const {result} = renderHook(() => useFormBuilder({initialValues: undefined, sections, section: sections[0]}));

      act(() => {
        result.current.handleShowSurvey(1, false);
      });

      expect(result.current.showSurvey).toBe(1);
      expect(result.current.readOnlyMode).toBe(false);
    });
  });

  describe('handleOpenModal', () => {
    it('should update `selectedSectionId` and `openModal`', () => {
      const {result} = renderHook(() => useFormBuilder({initialValues: undefined, sections, section: sections[0]}));

      act(() => {
        result.current.handleOpenModal(2, 1);
      });

      expect(result.current.selectedSectionId).toBe(1);
      expect(result.current.openModal).toBe(2);
    });
  });
});
