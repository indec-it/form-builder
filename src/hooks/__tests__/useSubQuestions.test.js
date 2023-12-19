import {renderHook} from '@testing-library/react';

import useSubQuestions from '../useSubQuestions';

jest.mock('formik', () => ({
  useFormikContext: jest.fn().mockReturnValue({
    setFieldValue: jest.fn()
  })
}));

const subQuestions = [
  {
    id: 1,
    optionId: 1,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ1',
    validations: [],
    navigation: [],
    userVarName: 'monto1'
  },
  {
    id: 2,
    optionId: 2,
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ2',
    validations: [],
    navigation: [],
    userVarName: 'monto2'
  },
  {
    id: 3,
    optionId: 3,
    type: '1',
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
                value: '2',
                type: 'ne',
                question: 'test',
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
    type: '1',
    label: 'Monto pais',
    name: 'S2P4SQ4',
    validations: [],
    navigation: [],
    userVarName: 'monto4'
  }
];

describe('useSubQuestions', () => {
  it('should filter the subQuestions', () => {
    const {result} = renderHook(() => useSubQuestions({subQuestions, value: {test: {answer: {value: '2'}}}, name: 'test'}));
    expect(result.current.selectedQuestions).toEqual([
      {
        id: 3,
        optionId: 3,
        type: '1',
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
                    value: '2',
                    type: 'ne',
                    question: 'test',
                    section: 'S2'
                  }
                ]
              }
            ],
            action: 'hide'
          }
        ],
        userVarName: 'monto3'
      }
    ]);
  });
});
