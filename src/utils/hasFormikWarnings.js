import {getIn} from 'formik';

const hasFormikWarnings = ({form, warnings, field}) => {
  const warning = getIn(warnings, field.name);
  const touched = getIn(form.touched, field.name);
  return {
    hasWarning: !!((form.submitCount > 0 || touched) && warning),
    warning
  };
};

export default hasFormikWarnings;
