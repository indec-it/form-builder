import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useFormikContext} from 'formik';

import sectionPropTypes from '@/utils/propTypes/section';
import buildQuestions from '@/utils/buildQuestions';
import getQuestionProps from '@/utils/getQuestionProps';
import getQuestionComponent from '@/utils/getQuestionComponent';

import Wrapper from './Wrapper';

const getComponent = (
  section,
  sectionIndex,
  questionIndex,
  disabled,
  warnings,
  values
) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  const {setFieldValue} = useFormikContext();
  const {
    props, questionName, jump, questionType
  } = getQuestionProps({sectionIndex, section, question, values, disabled, warnings});
  let shouldClean = false;
  if (!!jump?.action && !shouldClean) {
    shouldClean = true;
  }

  useEffect(() => {
    if (shouldClean) {
      const defaultAnswerValue = buildQuestions(section)[section.name][0][question.name].answer;
      setFieldValue(questionName, defaultAnswerValue);
      shouldClean = false;
    }
  }, [shouldClean, questionName]);

  const Component = getQuestionComponent(questionType);
  return Component
    ? <Wrapper component={Component} {...props} />
    : <Typography>Invalid component.</Typography>;
};

function QuestionBuilder({values, section, index, disabled, warnings}) {
  return (
    <Grid data-testid="question-builder">
      {Object.values(values).map((value, valueIndex) => value.id && (
        <Grid item key={value.id} mb={2}>
          {getComponent(section, index, valueIndex - 1, disabled, warnings, values)}
        </Grid>
      ))}
    </Grid>
  );
}

QuestionBuilder.propTypes = {
  section: sectionPropTypes.isRequired,
  disabled: PropTypes.bool,
  values: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  warnings: PropTypes.shape({}),
  errors: PropTypes.shape({})
};

QuestionBuilder.defaultProps = {
  disabled: false,
  warnings: {},
  errors: undefined
};

export default QuestionBuilder;
