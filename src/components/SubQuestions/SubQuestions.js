import PropTypes from 'prop-types';
import {Field} from 'formik';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import {useSubQuestions} from '@/hooks';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';
import getQuestionComponent from '@/utils/getQuestionComponent';
import getQuestionProps from '@/utils/getQuestionProps';

function SubQuestions({values, subQuestions, name, ...props}) {
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

SubQuestions.propTypes = {
  name: PropTypes.string.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired
};

export default SubQuestions;
