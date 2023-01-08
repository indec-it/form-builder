/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {render} from '@testing-library/react';
import {Formik} from 'formik';

global.React = React;

global.render = (Component, props = {}, options = {}) => {
  let component = <Component {...props} />;
  if (options.formik) {
    component = <Formik onSubmit={() => ({})} initialValues={options.formik.initialValues}>{component}</Formik>;
  }
  return render(component);
};
