import PropTypes from 'prop-types';
import {Field} from 'formik';
import Box from '@mui/material/Box';

import useSubQuestions from '@/hooks/useSubQuestions';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';
import getQuestionComponent from '@/utils/getQuestionComponent';
import getQuestionProps from '@/utils/getQuestionProps';

function SubQuestions({values, subQuestions, name, ...props}) {
  const parentName = name.split('.')[2];
  const {selectedQuestions} = useSubQuestions({subQuestions, value: {[parentName]: values}, name: parentName});
  return (
    <>
      {selectedQuestions.map(subQuestion => (
        <Box key={subQuestion.id} mb={2}>
          <Field
            {...getQuestionProps({question: subQuestion, name, values}).props}
            {...props}
            component={getQuestionComponent(subQuestion.type)}
            name={`${name}.${subQuestion.name}.answer.value`}
            label={{text: subQuestion.label}}
            placeholder={subQuestion.placeholder}
            sx={{minWidth: '300px'}}
          />
        </Box>
      ))}
    </>
  );
}

SubQuestions.propTypes = {
  name: PropTypes.string.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired
};

export default SubQuestions;
