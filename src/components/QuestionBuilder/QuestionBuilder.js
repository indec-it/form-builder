import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useFormikContext} from 'formik';

import Checkbox from '@/components/Checkbox';
import DatePicker from '@/components/DatePicker';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';
import buildQuestions from '@/utils/buildQuestions';
import getQuestionProps from '@/utils/getQuestionProps';

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
  let QuestionComponent;
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

  switch (questionType) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = <Wrapper component={TextField} {...props} />;
    break;
  case questionTypes.DROPDOWN:
    QuestionComponent = <Wrapper component={Select} {...props} />;
    break;
  case questionTypes.RADIO:
    QuestionComponent = <Wrapper component={Radio} {...props} />;
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = <Wrapper component={Checkbox} {...props} />;
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = <Wrapper component={RadioTable} {...props} />;
    break;
  case questionTypes.DATE:
    QuestionComponent = <Wrapper component={DatePicker} {...props} />;
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
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
