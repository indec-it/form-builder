import {getIn} from 'formik';

const hasFormikErrors = ({form, field}) => {
  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);
  return {
    hasError: !!((form.submitCount > 0 || touched) && error),
    error
  };
};

export default hasFormikErrors;
