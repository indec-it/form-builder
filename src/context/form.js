import {createContext, useMemo} from 'react';
import PropTypes from 'prop-types';

import sectionPropTypes from '@/utils/propTypes/section';

export const FormContext = createContext({initialValues: {}, sections: [], section: {}});

function FormProvider({children, initialValues, sections, section}) {
  const value = useMemo(() => ({initialValues, section, sections}), [initialValues, section, sections]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.shape({}),
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired,
  section: sectionPropTypes.isRequired
};

FormProvider.defaultProps = {
  initialValues: undefined
};

export default FormProvider;
