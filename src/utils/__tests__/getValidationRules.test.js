import getValidationRules from '../getValidationRules';

const validation = {
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
  action: 'hide'
};
const answers = {
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
  }
};

describe('getValidationRules', () => {
  it('should return `true` if all conditions are valid', () => {
    expect(getValidationRules({validation, answers})).toEqual([true]);
  });
});
