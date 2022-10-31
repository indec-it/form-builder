const sections = [
  {
    id: 1,
    label: '6. Componentes del hogar (CH)',
    questions: [
      {
        id: 1,
        label: '¿Podría decirme su nombre?',
        name: 'S1P1',
        number: '2.',
        type: 1,
        options: [
          {
            id: 1,
            value: '',
            label: ''
          }
        ],
        multiple: false,
        favorite: false,
        placeholder: 'Registre primero al Jefe/a de Hogar.',
        required: true
      },
      {
        label: '¿Cuál es su edad en años cumplidos?',
        name: 'S1P2',
        number: '3.',
        type: 4,
        options: [
          {
            id: 1,
            value: '1',
            label: 'Edad'
          },
          {
            id: 2,
            value: '999',
            label: 'Ns/Nc'
          }
        ],
        multiple: false,
        favorite: false,
        id: 2
      },
      {
        label: '¿El establecimiento es...',
        name: 'S1P3',
        number: '4.',
        placeholder: 'Seleccione una opcion',
        type: 3,
        options: [
          {
            id: 1,
            value: '1',
            label: '...estatal?'
          },
          {
            id: 2,
            value: '2',
            label: '...privado?'
          },
          {
            id: 3,
            label: '...de gestión comunitaria/social?',
            value: '3'
          },
          {
            id: 4,
            value: '99',
            label: 'Ns/Nc'
          }
        ],
        multiple: false,
        favorite: false,
        id: 3
      },
      {
        id: 1,
        label: '¿Está asociado/a a...',
        name: 'S1P9',
        number: '6.',
        type: 7,
        options: [
          {
            id: 1,
            subOptions: [
              {
                id: 1,
                value: '1',
                label: 'Si'
              },
              {
                id: null,
                value: '2',
                label: 'No'
              }
            ],
            title: '...una obra social?',
            name: 'socialWork',
            repeated: true
          },
          {
            id: 2,
            subOptions: [
              {
                id: 1,
                value: '1',
                label: 'Si'
              },
              {
                id: null,
                value: '2',
                label: 'No'
              }
            ],
            title: '...PAMI?',
            name: 'pami'
          },
          {
            id: 3,
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
              },
              {
                id: 3,
                value: '3',
                label: 'Ns/Nc'
              }
            ],
            title: '...una prepaga a través de obra social?',
            name: 'prepaid'
          }
        ],
        multiple: false,
        favorite: false
      },
      {
        id: 1,
        label: 'prueba checkbox',
        name: 'var_check',
        number: '7.',
        type: 5,
        options: [
          {
            id: 1,
            subOptions: [
              {
                id: 1
              }
            ],
            value: '1',
            label: 'test 1'
          },
          {
            id: 2,
            value: '2',
            label: 'test 2'
          },
          {
            id: 3,
            value: '3',
            label: 'test 3'
          }
        ],
        multiple: false,
        favorite: false
      }
    ],
    multiple: true,
    favorite: false,
    introduction: 'Aca debe ingresar todos los componentes del hogar',
    name: 'S1'
  },
  {
    name: 'S2',
    label: '10. Cuidado de personas de 65 años y más fuera del hogar (AH)',
    questions: [
      {
        label: '¿Cuántos ambientes/habitaciones tiene la vivienda en total?',
        name: 'S2P1',
        number: '1',
        type: 2,
        options: [
          {
            id: 1,
            value: '',
            label: ''
          }
        ],
        multiple: false,
        favorite: false,
        placeholder: '(Sin contar baño, cocina, pasillos, lavadero, garaje)'
      }
    ],
    multiple: false,
    favorite: false,
    id: 2
  }
];

// eslint-disable-next-line
export {sections}
