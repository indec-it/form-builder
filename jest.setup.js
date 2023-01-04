/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {render} from '@testing-library/react';
import {Formik} from 'formik';

import theme from '@styles/theme';

global.React = React;

global.render = (Component, props = {}, options = {}) => {
  let component = (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...props} />
    </ThemeProvider>
  );
  if (options.formik) {
    component = <Formik onSubmit={() => ({})} initialValues={options.formik.initialValues}>{component}</Formik>;
  }
  return render(component);
};
