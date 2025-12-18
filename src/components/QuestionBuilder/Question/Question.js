import {useEffect} from 'react';
import {useFormikContext} from 'formik';

import {useForm} from '@/hooks';
import buildQuestions from '@/utils/buildQuestions';
import getQuestionProps from '@/utils/getQuestionProps';
import getQuestionComponent from '@/utils/getQuestionComponent';

import Wrapper from '../Wrapper';

function Question({sectionIndex, questionIndex, disabled = false, warnings = {}, values}) {
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

  const isInHeader = section.headers?.some(header => header.question === question.id);
  let shouldClean = false;
  if (!!jump?.action && !shouldClean) {
    shouldClean = true;
  }

  useEffect(() => {
    if (shouldClean && !question.readOnly && !isInHeader) {
      const defaultAnswerValue = buildQuestions(section)[section.name][0][question.name].answer;
      setFieldValue(questionName, defaultAnswerValue);
      shouldClean = false;
    }
  }, [shouldClean, questionName, isInHeader]);

  const Component = getQuestionComponent(questionType);
  return Component ? (
    <Wrapper component={Component} section={section} {...props} />
  ) : (
    <p className="fb:text-red-600 fb:font-medium">Invalid component.</p>
  );
}

export default Question;
