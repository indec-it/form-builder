import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import {useFormikContext} from 'formik';

import {useForm} from '@/hooks';
import buildQuestions from '@/utils/buildQuestions';
import getQuestionProps from '@/utils/getQuestionProps';
import getQuestionComponent from '@/utils/getQuestionComponent';

import Wrapper from '../Wrapper';

function Question({sectionIndex, questionIndex, disabled, warnings, values}) {
  const {sections, initialValues, section} = useForm();
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  const {setFieldValue} = useFormikContext();
  const {props, questionName, jump, questionType} = getQuestionProps({
    sectionIndex,
    section,
    question,
    values,
    disabled,
    warnings,
    sections,
    initialValues
  });
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
  return Component ? (
    <Wrapper component={Component} section={section} {...props} />
  ) : (
    <Typography>Invalid component.</Typography>
  );
}

Question.propTypes = {
  disabled: PropTypes.bool,
  values: PropTypes.shape({}).isRequired,
  sectionIndex: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  warnings: PropTypes.shape({})
};

Question.defaultProps = {
  disabled: false,
  warnings: {}
};

export default Question;
