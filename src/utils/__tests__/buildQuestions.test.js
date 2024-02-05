import buildQuestions from '../buildQuestions';

describe('buildQuestions', () => {
  let sections;

  describe('when the section is interruptible', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [],
          multiple: true,
          favorite: false,
          interruption: {
            name: 'S1I1',
            interruptible: true,
            reason: 'Select an option for the interruption reason',
            options: [
              {
                id: 1,
                value: '1',
                label: 'Reason 1'
              },
              {
                id: 2,
                value: '2',
                label: 'Reason 2'
              }
            ]
          },
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.interruption.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1I1: {
              id: 'section-1',
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section is not interruptible', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [],
          multiple: true,
          favorite: false,
          interruption: {
            name: 'S1I1',
            interruptible: false,
            reason: 'Select an option for the interruption reason',
            options: [
              {
                id: 1,
                value: '1',
                label: 'Reason 1'
              },
              {
                id: 2,
                value: '2',
                label: 'Reason 2'
              }
            ]
          },
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array without `id` and `answer` for `section.interruption.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.not.objectContaining({
            S1I1: {
              id: 'section-1',
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a checkbox question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Checkbox',
              name: 'S1P1',
              number: '1',
              type: 5,
              options: [
                {
                  id: 1,
                  name: 'S1P1O1',
                  value: '1',
                  label: 'Option 1',
                  subOptions: [
                    {
                      id: 1
                    }
                  ]
                },
                {
                  id: 2,
                  name: 'S1P1O1',
                  value: '2',
                  label: 'Option 2',
                  subOptions: [
                    {
                      id: 1
                    }
                  ]
                },
                {
                  id: 3,
                  name: 'S1P1O1',
                  value: '3',
                  label: 'Option 3',
                  subOptions: [
                    {
                      id: 1
                    }
                  ]
                }
              ],
              multiple: false,
              favorite: false,
              validations: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: []}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a textField question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Text field',
              name: 'S1P1',
              number: '1',
              type: 1,
              options: [],
              multiple: false,
              favorite: false,
              validations: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a numericField question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Text field',
              name: 'S1P1',
              number: '1',
              type: 2,
              options: [],
              multiple: false,
              favorite: false,
              validations: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a Select question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Text field',
              name: 'S1P1',
              number: '1',
              type: 3,
              options: [],
              multiple: false,
              favorite: false,
              validations: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a Radio question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Text field',
              name: 'S1P1',
              number: '1',
              type: 4,
              options: [],
              multiple: false,
              favorite: false,
              validations: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a Date question`s type with range', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Select a date',
              name: 'S1P1',
              number: '1',
              type: 6,
              metadata: {
                dateType: 'rangeWithoutHour'
              },
              validations: [
                {
                  id: 1,
                  type: 'required',
                  params: [
                    {
                      id: 1,
                      message: 'Must select a date'
                    }
                  ],
                  messageType: 'error'
                }
              ],
              userVarName: 's1p1'
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: {start: '', end: ''}}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a Date question`s type without range', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Select a date',
              name: 'S1P1',
              number: '1',
              type: 6,
              metadata: {
                dateType: 'dateWithoutHour'
              },
              validations: [
                {
                  id: 1,
                  type: 'required',
                  params: [
                    {
                      id: 1,
                      message: 'Must select a date'
                    }
                  ],
                  messageType: 'error'
                }
              ],
              userVarName: 's1p1'
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {value: ''}
            }
          })
        ]
      });
    });
  });

  describe('when the section has a RadioTable question`s type', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Select a date',
              name: 'S1P1',
              number: '1',
              type: 7,
              metadata: {},
              options: [
                {
                  id: 1,
                  name: 'S1P1O1',
                  subOptions: [
                    {
                      id: 1,
                      value: '1',
                      label: 'Yes'
                    },
                    {
                      id: 2,
                      value: '2',
                      label: 'No'
                    },
                    {
                      id: 3,
                      value: '3',
                      label: 'DKN'
                    }
                  ],
                  userVarName: 'S1P1O1',
                  title: 'Options 1',
                  repeated: true
                },
                {
                  id: 2,
                  name: 'S1P1O2',
                  subOptions: [
                    {
                      id: 1,
                      value: '1',
                      label: 'Yes'
                    },
                    {
                      id: 2,
                      value: '2',
                      label: 'No'
                    },
                    {
                      id: 3,
                      value: '3',
                      label: 'DKN'
                    }
                  ],
                  userVarName: 'S1P1O2',
                  title: 'Options 2'
                },
                {
                  id: 3,
                  name: 'S1P1O3',
                  subOptions: [
                    {
                      id: 1,
                      value: '1',
                      label: 'Yes'
                    },
                    {
                      id: 2,
                      value: '2',
                      label: 'No'
                    },
                    {
                      id: 3,
                      value: '3',
                      label: 'DKN'
                    }
                  ],
                  userVarName: 'S1P1O3',
                  title: 'Options 3'
                }
              ],
              validations: [
                {
                  id: 1,
                  type: 'required',
                  params: [
                    {
                      id: 1,
                      message: 'Must select a date'
                    }
                  ],
                  messageType: 'error'
                }
              ],
              userVarName: 's1p1'
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {
                value: {
                  S1P1O1: undefined,
                  S1P1O2: undefined,
                  S1P1O3: undefined
                }
              }
            }
          })
        ]
      });
    });
  });

  describe('when the section has a question with subQuestions', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              id: 1,
              label: 'Select an option',
              name: 'S1P1',
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: {
                value: '',
                specifications: {
                  S1P1SQ1: {id: 1, answer: {value: ''}},
                  S1P1SQ2: {id: 2, answer: {value: ''}}
                }
              }
            }
          })
        ]
      });
    });
  });

  describe('when the section has a question that can be answer multiple times', () => {
    beforeEach(() => {
      sections = [
        {
          id: 1,
          name: 'S1',
          label: 'Sección 1',
          questions: [
            {
              label: 'Cell number',
              name: 'S1P1',
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
              id: 1,
              userVarName: 'S1P3',
              subQuestions: []
            }
          ],
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
          headers: [],
          userVarName: 'S1'
        }
      ];
    });

    it('should return an array with `id` and `answer` for `section.question.name`', () => {
      expect(buildQuestions(sections)).toEqual({
        S1: [
          expect.objectContaining({
            S1P1: {
              id: 1,
              answer: [{id: 1, value: ''}]
            }
          })
        ]
      });
    });
  });
});
