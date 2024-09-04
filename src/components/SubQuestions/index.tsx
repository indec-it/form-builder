import {Field} from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import {useSubQuestions} from '@/hooks';
import getQuestionComponent from '@/utils/getQuestionComponent';
import getQuestionProps from '@/utils/getQuestionProps';
import {SubQuestion, Values} from '@/lib/definitions';

interface Props {
  disabled: boolean;
  name: string;
  values: Values;
  subQuestions: SubQuestion[];
  warnings: any;
}

function SubQuestions({values, subQuestions, name, disabled = false, warnings, ...props}: Props) {
  const parentName = name.split('.')[2];
  const {selectedQuestions} = useSubQuestions({
    subQuestions,
    value: {[parentName]: values},
    name: parentName,
    specificationsPathName: name
  });

  return selectedQuestions.length > 0 ? (
    <Stack spacing={2} sx={{width: '100%'}} justifyContent="flex-end">
      {selectedQuestions.map(subQuestion => (
        <Box key={subQuestion.id}>
          <Field
            {...getQuestionProps({question: subQuestion, name, values}).props}
            {...props}
            disabled={disabled}
            warnings={warnings}
            component={getQuestionComponent(subQuestion.type)}
            name={`${name}.${subQuestion.name}.answer.value`}
            label={{text: subQuestion.label}}
            placeholder={subQuestion.placeholder}
          />
        </Box>
      ))}
    </Stack>
  ) : null;
}

export default SubQuestions;
