const sections = [{
  id: 1,
  name: 'S1',
  label: 'Componentes del hogar',
  questions: [
    {
      id: 1,
      label: 'Ingrese su nombre',
      name: 'S1P1',
      number: '1.',
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
      userVarName: 'S1P1'
    },
    {
      label: 'Seleccione el usuario',
      name: 'S1P3',
      number: '3',
      type: 3,
      options: [
        {
          value: '1',
          label: 'scarpiello261@est.derecho.uba.ar'
        },
        {
          value: '2',
          label: 'fontanasofia28@gmail.com'
        },
        {
          value: '3',
          label: 'antonellapanaccia2@gmail.com'
        },
        {
          value: '4',
          label: 'mcrocalares@gmail.com'
        },
        {
          value: '5',
          label: 'cyn.lopez.79@gmail.com'
        },
        {
          value: '6',
          label: 'rodri.gimenezs91@gmail.com'
        },
        {
          value: '7',
          label: 'carli_bertran@hotmail.com'
        },
        {
          value: '8',
          label: 'ceciliapezet@yahoo.com.ar'
        },
        {
          value: '9',
          label: 'sb.macri@gmail.com'
        },
        {
          value: '10',
          label: 'frankomaldonado93@hotmail.com'
        },
        {
          value: '11',
          label: 'violetacastanongortari@gmail.com'
        },
        {
          value: '12',
          label: 'martinleon20@yahoo.com.ar'
        },
        {
          value: '13',
          label: 'hpolo64@hotmail.com'
        },
        {
          value: '14',
          label: 'natisumma@gmail.com'
        },
        {
          value: '15',
          label: 'dafnebar@hotmail.com'
        },
        {
          value: '16',
          label: 'braian.ivan.11@hotmail.com'
        },
        {
          value: '17',
          label: 'mcuneosumma@gmail.com'
        },
        {
          value: '18',
          label: 'lucila.orguilia@hotmail.com'
        },
        {
          value: '19',
          label: 'rosarioorguilia@gmail.com'
        },
        {
          value: '20',
          label: 'sgcordobesa69@gmail.com'
        },
        {
          value: '21',
          label: 'ye-777@hotmail.com'
        },
        {
          value: '22',
          label: 'fernandacalarotajust@gmail.com'
        },
        {
          value: '23',
          label: 'quintosoledad@gmail.com'
        },
        {
          value: '24',
          label: 'lulygrisel@gmail.com'
        },
        {
          value: '25',
          label: 'ludmilareyes8@gmail.com'
        },
        {
          value: '26',
          label: 'roque.marullo@gmail.com'
        },
        {
          value: '27',
          label: 'marieee14@gmail.com'
        },
        {
          value: '28',
          label: 'marcelafigueredoaguiar@gmail.com'
        },
        {
          value: '29',
          label: 'juanigomezm16@gmail.com'
        },
        {
          value: '30',
          label: 'roxanarosas_98@hotmail.com'
        },
        {
          value: '31',
          label: 'jizurietaysea@gmail.com'
        },
        {
          value: '32',
          label: 'elsylop.22@gmail.com'
        }
      ],
      multiple: false,
      favorite: false,
      userVarName: 'S1P3',
      id: 3
    },
    {
      label: 'Ingrese su edad',
      name: 'S1P2',
      number: '4',
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
      multiple: false,
      favorite: false,
      userVarName: 'S1P4',
      id: 2
    },
    {
      label: 'Seleccione las obras sociales',
      name: 'S1P4',
      number: '5',
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
              id: null,
              value: '2',
              label: 'No'
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            }
          ],
          userVarName: 'S1P5O1',
          title: 'Tiene pami?',
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
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            }
          ],
          title: 'Tiene una prepaga?',
          userVarName: 'S1P5O2'
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
              id: null,
              value: '2',
              label: 'No'
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            },
            {
              id: null,
              value: '4',
              label: 'No quiere responder'
            }
          ],
          userVarName: 'S1P5O3',
          title: 'prueba'
        }
      ],
      multiple: false,
      favorite: false,
      userVarName: 'S1P5',
      id: 4
    }
  ],
  multiple: true,
  favorite: true,
  interruption: {
    name: 'S1I1',
    interruptible: true,
    reason: 'Debe seleccionar un motivo por el cual quiere interrumpir la encuesta',
    options: [
      {
        id: 1,
        value: '1',
        label: 'El encuestado no quiere seguir respondiendo'
      },
      {
        id: 2,
        value: '2',
        label: 'Se tuvo que ir'
      }
    ],
    userVarName: 'S1I1'
  },
  headers: [
    {
      id: 1
    }
  ],
  userVarName: 'COMPONENTES_DEL_HOGAR'
}, {
  id: 2,
  name: 'S2',
  label: 'Prueba segunda seccion',
  questions: [
    {
      id: 1,
      label: 'Ingrese su nombre',
      name: 'S1P1',
      number: '1.',
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
      userVarName: 'S1P1'
    },
    {
      label: 'Seleccione el usuario',
      name: 'S1P3',
      number: '3',
      type: 3,
      options: [
        {
          value: '1',
          label: 'scarpiello261@est.derecho.uba.ar'
        },
        {
          value: '2',
          label: 'fontanasofia28@gmail.com'
        },
        {
          value: '3',
          label: 'antonellapanaccia2@gmail.com'
        },
        {
          value: '4',
          label: 'mcrocalares@gmail.com'
        },
        {
          value: '5',
          label: 'cyn.lopez.79@gmail.com'
        },
        {
          value: '6',
          label: 'rodri.gimenezs91@gmail.com'
        },
        {
          value: '7',
          label: 'carli_bertran@hotmail.com'
        },
        {
          value: '8',
          label: 'ceciliapezet@yahoo.com.ar'
        },
        {
          value: '9',
          label: 'sb.macri@gmail.com'
        },
        {
          value: '10',
          label: 'frankomaldonado93@hotmail.com'
        },
        {
          value: '11',
          label: 'violetacastanongortari@gmail.com'
        },
        {
          value: '12',
          label: 'martinleon20@yahoo.com.ar'
        },
        {
          value: '13',
          label: 'hpolo64@hotmail.com'
        },
        {
          value: '14',
          label: 'natisumma@gmail.com'
        },
        {
          value: '15',
          label: 'dafnebar@hotmail.com'
        },
        {
          value: '16',
          label: 'braian.ivan.11@hotmail.com'
        },
        {
          value: '17',
          label: 'mcuneosumma@gmail.com'
        },
        {
          value: '18',
          label: 'lucila.orguilia@hotmail.com'
        },
        {
          value: '19',
          label: 'rosarioorguilia@gmail.com'
        },
        {
          value: '20',
          label: 'sgcordobesa69@gmail.com'
        },
        {
          value: '21',
          label: 'ye-777@hotmail.com'
        },
        {
          value: '22',
          label: 'fernandacalarotajust@gmail.com'
        },
        {
          value: '23',
          label: 'quintosoledad@gmail.com'
        },
        {
          value: '24',
          label: 'lulygrisel@gmail.com'
        },
        {
          value: '25',
          label: 'ludmilareyes8@gmail.com'
        },
        {
          value: '26',
          label: 'roque.marullo@gmail.com'
        },
        {
          value: '27',
          label: 'marieee14@gmail.com'
        },
        {
          value: '28',
          label: 'marcelafigueredoaguiar@gmail.com'
        },
        {
          value: '29',
          label: 'juanigomezm16@gmail.com'
        },
        {
          value: '30',
          label: 'roxanarosas_98@hotmail.com'
        },
        {
          value: '31',
          label: 'jizurietaysea@gmail.com'
        },
        {
          value: '32',
          label: 'elsylop.22@gmail.com'
        }
      ],
      multiple: false,
      favorite: false,
      userVarName: 'S1P3',
      id: 3
    },
    {
      label: 'Ingrese su edad',
      name: 'S1P2',
      number: '4',
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
      multiple: false,
      favorite: false,
      userVarName: 'S1P4',
      id: 2
    },
    {
      label: 'Seleccione las obras sociales',
      name: 'S1P4',
      number: '5',
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
              id: null,
              value: '2',
              label: 'No'
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            }
          ],
          userVarName: 'S1P5O1',
          title: 'Tiene pami?',
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
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            }
          ],
          title: 'Tiene una prepaga?',
          userVarName: 'S1P5O2'
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
              id: null,
              value: '2',
              label: 'No'
            },
            {
              id: null,
              value: '3',
              label: 'Ns/Nc'
            },
            {
              id: null,
              value: '4',
              label: 'No quiere responder'
            }
          ],
          userVarName: 'S1P5O3',
          title: 'prueba'
        }
      ],
      multiple: false,
      favorite: false,
      userVarName: 'S1P5',
      id: 4
    }
  ],
  multiple: true,
  favorite: true,
  interruption: {
    name: 'S1I1',
    interruptible: false,
    reason: 'Debe seleccionar un motivo por el cual quiere interrumpir la encuesta',
    options: [
      {
        id: 1,
        value: '1',
        label: 'El encuestado no quiere seguir respondiendo'
      },
      {
        id: 2,
        value: '2',
        label: 'Se tuvo que ir'
      }
    ],
    userVarName: 'S1I1'
  },
  headers: [
    {
      id: 1
    }
  ],
  userVarName: 'SECCION_2'
}];

// eslint-disable-next-line
export {sections}
