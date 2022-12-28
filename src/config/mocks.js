const sections = [
  {
    id: 1,
    name: 'S1',
    label: 'Sección 1',
    questions: [
      {
        id: 1,
        label: 'radio table',
        name: 'S1P1',
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
                label: 'si'
              },
              {
                id: 2,
                value: '2',
                label: 'no'
              }
            ],
            userVarName: 'opcion_1',
            title: 'opcion 1',
            repeated: true
          },
          {
            id: 2,
            name: 'S1P1O2',
            subOptions: [
              {
                id: 1,
                value: '1',
                label: 'si'
              },
              {
                id: 2,
                value: '2',
                label: 'no'
              }
            ],
            userVarName: 'opcion_2',
            title: 'opcion 2',
            repeated: true
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
                message: 'Debe ingresar todas las opciones'
              }
            ]
          }
        ],
        userVarName: 'S1P1'
      },
      {
        label: 'checkbox',
        name: 'S1P2',
        number: '2',
        type: 5,
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
                message: 'Debe seleccionar al menos una opcion'
              }
            ]
          }
        ],
        id: 2,
        userVarName: 's1p2'
      },
      {
        label: 'radiooooo',
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
            value: '1',
            label: 'si'
          },
          {
            id: 2,
            value: '2',
            label: 'no'
          },
          {
            id: 3,
            value: '3',
            label: 'ns/nc'
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
                message: 'debe seleccionar una opcion del radio'
              }
            ]
          }
        ],
        id: 3,
        userVarName: 's1p3'
      },
      {
        label: 'input',
        name: 'S1P4',
        number: '4',
        type: 1,
        options: [],
        multiple: false,
        favorite: false,
        validations: [
          {
            id: 1,
            type: 'required',
            params: [
              {
                id: 1,
                message: 'escriba texto'
              }
            ]
          }
        ],
        id: 3,
        userVarName: 's1p3'
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
    userVarName: 'Sq'
  }
];
// eslint-disable-next-line
export {sections}
