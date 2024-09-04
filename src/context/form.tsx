import {createContext, useMemo, ReactNode} from 'react';

import {Section} from '@/lib/definitions';

export const FormContext = createContext({initialValues: {}, sections: [], section: {}});

interface Props {
  children: ReactNode;
  initialValues: any;
  sections: Section[];
  section: Section;
}

function FormProvider({children, initialValues, sections, section}: Props) {
  const value = useMemo(() => ({initialValues, section, sections}), [initialValues, section, sections]);
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}

export default FormProvider;
