# FORM BUILDER 🚀

https://indec-it.github.io/form-builder

## Glossary

1. [Installation](#installation)
1. [Start](#start)
1. [Dependencies](#dependencies)
1. [Components](#components)
1. [Tests](#tests)
1. [Contributing](#contributing)

## Installation

Set up your environment variables for development:

```sh
$ npm install @indec/form-builder
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
