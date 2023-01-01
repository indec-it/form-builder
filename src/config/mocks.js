const sections = [
  {
    id: 1,
    name: 'S1',
    label: 'Sección 1',
    questions: [
      {
        id: 1,
        label: 'Ingrese su nombre',
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
                message: 'Deberia ingresar su nombre'
              }
            ],
            messageType: 'error'
          },
          {
            id: 2,
            params: [
              {
                id: 1,
                value: 2,
                message: 'Su nombre debe tener al menos 2 caracteres'
              }
            ],
            type: 'min',
            messageType: 'error'
          },
          {
            id: 3,
            params: [
              {
                id: 1,
                value: 10,
                message: 'Su nombre no debe exceder los 10 caracteres'
              }
            ],
            type: 'max',
            messageType: 'error'
          }
        ],
        userVarName: 's1p1'
      },
      {
        label: 'radoooioo',
        name: 'S1P2',
        number: '2',
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
            label: 'si'
          },
          {
            id: 2,
            value: '2',
            label: 'no'
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
                message: 'aaaaaaaaaa'
              }
            ],
            messageType: 'warning',
            dependsOn: '2'
          }
        ],
        id: 2,
        userVarName: 's1p2'
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
    userVarName: 's1'
  }
];
// eslint-disable-next-line
export {sections}
