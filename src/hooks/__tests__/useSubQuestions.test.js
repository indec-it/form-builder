import {renderHook} from '@testing-library/react';

import useSubQuestions from '../useSubQuestions';

const subQuestions = [
  {
    id: 1,
    optionId: 1,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ1',
    validations: [
      {
        id: 1,
        type: 'notRequired',
        params: [
          {
            id: 1
          }
        ]
      }
    ],
    userVarName: 'monto1'
  },
  {
    id: 2,
    optionId: 2,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ2',
    validations: [
      {
        id: 1,
        type: 'notRequired',
        params: [
          {
            id: 1
          }
        ]
      }
    ],
    userVarName: 'monto2'
  },
  {
    id: 3,
    optionId: 3,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ3',
    validations: [
      {
        id: 1,
        type: 'notRequired',
        params: [
          {
            id: 1
          }
        ]
      }
    ],
    userVarName: 'monto3'
  },
  {
    id: 4,
    optionId: 4,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ4',
    validations: [
      {
        id: 1,
        type: 'notRequired',
        params: [
          {
            id: 1
          }
        ]
      }
    ],
    userVarName: 'monto4'
  }
];

describe('useSubQuestions', () => {
  it('should filter the subQuestions', () => {
    const {result} = renderHook(() => useSubQuestions(subQuestions, '3'));
    expect(result.current.selectedQuestions).toEqual([{
      id: 3,
      optionId: 3,
      type: '1',
      label: 'Monto pais',
      name: 'S2P4SQ3',
      validations: [
        {
          id: 1,
          type: 'notRequired',
          params: [
            {
              id: 1
            }
          ]
        }
      ],
      userVarName: 'monto3'
    }]);
  });
});
