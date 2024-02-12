import {useContext} from 'react';

import {FormContext} from '@/context/form';

const useForm = () => useContext(FormContext);

export default useForm;
