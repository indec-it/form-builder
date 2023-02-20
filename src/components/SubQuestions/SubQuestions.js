import PropTypes from 'prop-types';
import {FastField} from 'formik';
import Box from '@mui/material/Box';

import castArray from '@/utils/castArray';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';

function SubQuestions({values, subQuestions, Component, ...props}) {
  const selectedQuestions = subQuestions.filter(
    subQuestion => castArray(values.answer.value).includes(subQuestion.optionId.toString())
  );
  return (
    <>
      {selectedQuestions.map(subQuestion => (
        <Box key={subQuestion.id} mb={2}>
          <FastField
            component={Component}
            name={subQuestion.name}
            label={subQuestion.label}
            placeholder={subQuestion.placeholder}
            required={subQuestion.validations.some(validation => validation.type === 'required')}
            {...props}
          />
        </Box>
      ))}
    </>
  );
}

SubQuestions.propTypes = {
  Component: PropTypes.func.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired
};

export default SubQuestions;
