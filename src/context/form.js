import {createContext, useMemo} from 'react';

export const FormContext = createContext({initialValues: {}, sections: [], section: {}});

function FormProvider({children, initialValues, sections, section}) {
  const value = useMemo(() => ({initialValues, section, sections}), [initialValues, section, sections]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormProvider;
