import getQuestionProps from '../getQuestionProps';

describe('getQuestionProps', () => {
  let sectionIndex;
  let section = {};
  let question = {};
  let values = {};
  let disabled;
  const warnings = {};
  const initialValues = {};
  let sections = [];

  describe('when `question.type` is not defined', () => {
    beforeEach(() => {
      section = null;
    });

    it('should return undefined', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toBeUndefined();
    });
  });

  describe('when `section` is not defined', () => {
    beforeEach(() => {
      section = null;
      question = {type: 1, name: 'S1P1'};
    });

    it('should return `questionName` as empty string and `props.name` as empty string', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual(
        expect.objectContaining({
          questionName: '',
          props: expect.objectContaining({name: ''})
        })
      );
    });

    it('should return `props.show` as `true`', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual(
        expect.objectContaining({
          props: expect.objectContaining({show: true})
        })
      );
    });
  });

  describe('when `section` is defined', () => {
    beforeEach(() => {
      sectionIndex = 0;
      section = {name: 'S1'};
      question = {type: 1, name: 'S1P1'};
    });

    it('should return `questionName` defined and `props.name` defined', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual(
        expect.objectContaining({
          questionName: 'S1.0.S1P1.answer',
          props: expect.objectContaining({name: 'S1.0.S1P1.answer'})
        })
      );
    });

    describe('and `question` must be hidden', () => {
      beforeEach(() => {
        section = {
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
              validations: [],
              navigation: [],
              subQuestions: [],
              metadata: {},
              userVarName: 'Transaccion'
            },
            {
              id: 15,
              label: 'Test message',
              name: 'S1P5',
              type: 9,
              navigation: [
                {
                  id: 1,
                  rules: [
                    {
                      id: 1,
                      conditions: [
                        {
                          id: 1,
                          type: 'eq',
                          question: 'S1P1',
                          value: '',
                          section: 'S1'
                        }
                      ]
                    }
                  ],
                  action: 'hide'
                }
              ]
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
        };
        values = {
          id: 1,
          S1P1: {
            id: 1,
            answer: {value: ''}
          }
        };
        sections = [
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
                validations: [],
                navigation: [],
                subQuestions: [],
                metadata: {},
                userVarName: 'Transaccion'
              },
              {
                id: 15,
                label: 'Test message',
                name: 'S1P5',
                type: 9,
                navigation: [
                  {
                    id: 1,
                    rules: [
                      {
                        id: 1,
                        conditions: [
                          {
                            id: 1,
                            type: 'eq',
                            question: 'S1P1',
                            value: '',
                            section: 'S1'
                          }
                        ]
                      }
                    ],
                    action: 'hide'
                  }
                ]
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
        question = {
          id: 15,
          label: 'Test message',
          name: 'S1P5',
          type: 9,
          navigation: [
            {
              id: 1,
              rules: [
                {
                  id: 1,
                  conditions: [
                    {
                      id: 1,
                      type: 'eq',
                      question: 'S1P1',
                      value: '',
                      section: 'S1'
                    }
                  ]
                }
              ],
              action: 'hide'
            }
          ]
        };
      });

      it('should have `props.show` as `false`', () => {
        expect(
          getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
        ).toEqual(
          expect.objectContaining({
            props: expect.objectContaining({show: false})
          })
        );
      });
    });
  });

  describe('when `disabled` is `true`', () => {
    beforeEach(() => {
      disabled = true;
      question = {type: 1, name: 'S1P1'};
    });

    it('should have `props.disabled` as `true`', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual(
        expect.objectContaining({
          props: expect.objectContaining({disabled: true})
        })
      );
    });
  });

  describe('when `question.type` is text', () => {
    beforeEach(() => {
      question = {
        type: 1,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: []
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          placeholder: undefined,
          type: 'text',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1}
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 1,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is number', () => {
    beforeEach(() => {
      question = {
        type: 2,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: []
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          placeholder: undefined,
          type: 'number',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1}
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 2,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is currency', () => {
    beforeEach(() => {
      question = {
        type: 8,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: []
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          placeholder: undefined,
          type: 'text',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1}
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 8,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is dropdown', () => {
    beforeEach(() => {
      question = {
        type: 3,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: [],
        options: [{id: 1, value: '1', label: 'option 1'}]
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          placeholder: undefined,
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1},
          options: [{id: 1, value: '1', label: 'option 1'}]
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 3,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is radio', () => {
    beforeEach(() => {
      question = {
        type: 4,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: [],
        options: [{id: 1, value: '1', label: 'option 1'}]
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1},
          options: [{id: 1, value: '1', label: 'option 1'}]
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 4,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is checkbox', () => {
    beforeEach(() => {
      question = {
        type: 5,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: [],
        options: [{id: 1, value: '1', label: 'option 1'}]
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1},
          options: [{id: 1, value: '1', label: 'option 1'}]
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 5,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is radio table', () => {
    beforeEach(() => {
      question = {
        type: 7,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: [],
        options: [{id: 1, value: '1', label: 'option 1'}]
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1},
          options: [{id: 1, value: '1', label: 'option 1'}]
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 7,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is date', () => {
    beforeEach(() => {
      question = {
        type: 6,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: [],
        metadata: {
          dateType: 'dateWithHour'
        }
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          label: {text: 'question 1', number: '1', introduction: undefined},
          name: 'S1.0.S1P1.answer',
          disabled: true,
          warnings: {},
          isMultiple: false,
          show: true,
          subQuestions: [],
          values: {answer: {value: ''}, id: 1},
          metadata: {
            dateType: 'dateWithHour'
          }
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 6,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is message', () => {
    beforeEach(() => {
      question = {
        type: 9,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: []
      };
    });

    it('should return props', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toEqual({
        props: {
          message: 'question 1',
          show: true
        },
        questionName: 'S1.0.S1P1.answer',
        questionType: 9,
        jump: {valid: true}
      });
    });
  });

  describe('when `question.type` is not a valid type', () => {
    beforeEach(() => {
      question = {
        type: 999,
        name: 'S1P1',
        label: 'question 1',
        number: '1',
        multiple: false,
        subQuestions: []
      };
    });

    it('should return undefined', () => {
      expect(
        getQuestionProps({sectionIndex, section, question, values, disabled, warnings, initialValues, sections})
      ).toBeUndefined();
    });
  });
});
