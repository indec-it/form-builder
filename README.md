# FORM BUILDER 🚀

## Glossary

1. [Set up](#set-up)
1. [Start](#start)
1. [Dependencies](#dependencies)
1. [Components](#components)
1. [Tests](#tests)
1. [Contributing](#contributing)

## Set up

Install the package as dependency

```sh
$ npm install @indec/form-builder
```

Usage

```js
import {FormBuilder} from '@indec/form-builder/components';

function MyComponent({sections}) {
  const handleStoreValues = sectionValues => {
    console.log(sectionValues); // here are the completed values of the form
  };

  return <FormBuilder onPrevious={handleStoreValues} sections={sections} onSubmit={handleStoreValues} />;
}
```

When you have sections with answers you can send the prop `initialValues` to the component `FormBuilder` to render those values.

```js
import {FormBuilder} from '@indec/form-builder/lib/components';

function MyComponent({sections}) {
  const handleStoreValues = sectionValues => {
    console.log(sectionValues); // here are the completed values of the form
  };

  return (
    <FormBuilder
      onPrevious={handleStoreValues}
      sections={sections}
      onSubmit={handleStoreValues}
      initialValues={{
        S1: [
          {
            id: 1,
            S1P1: {
              id: 1,
              answer: 'test'
            },
            S1P2: {
              id: 2,
              answer: 26
            },
            S1P3: {
              id: 3,
              answer: [
                {
                  id: 1,
                  value: 123456
                },
                {
                  id: 2,
                  value: 12345678
                }
              ]
            }
          }
        ]
      }}
    />
  );
}
```

If you want to change the default navigation button or change the header, pass to FormBuilder component the prop `components`

```js
function SectionHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#98b9ed',
        height: '100px'
      }}
    >
      <Typography>My custom header</Typography>
    </Box>
  );
}

function NavigationButtons() {
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      <Button variant="outlined">Go back</Button>
      <Button variant="outlined" color="error">
        Next
      </Button>
    </Box>
  );
}

function MyComponent({sections}) {
  const handleStoreValues = sectionValues => {
    console.log(sectionValues); // here are the completed values of the form
  };
  
  return (
    <FormBuilder
      onPrevious={handleStoreValues}
      sections={sections}
      onSubmit={handleStoreValues}
      components={{
        SectionHeader: props => <SectionHeader {...props} />,
        NavigationButtons: props => <NavigationButtons {...props} />
      }}
    />
  );
}
```

## Start

To start storybook you must run the following command:

```sh
$ npm run storybook
```

## Dependencies

These are the core dependencies you'll need to get acquainted yourself with:

- [React](https://reactjs.org)
- [Material ui](https://mui.com) (component library our UI is built upon)
- [Formik](https://jaredpalmer.com/formik/docs/api/formik#validationschema-schema-gt-schema) (to make it easier to write forms with React)
- [Yup](https://github.com/jquense/yup) (handles form validation)
- [Storybook](https://storybook.js.org) (component library)
- [Jest](https://jestjs.io) (testing framework)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) (DOM interface for testing)
- [EsLint](https://eslint.org) (used to lint code)

## Components

We use [Storybook](https://storybook.js.org) to build our UI components isolated of the application.

If you want to see our available components, please check it out here: [Form Builder](https://indec-it.github.io/form-builder)

## Tests

To run the tests you must run the following command:

```sh
$ npm run test
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
