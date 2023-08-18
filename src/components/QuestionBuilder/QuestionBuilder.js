import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Checkbox from '@/components/Checkbox';
import DatePicker from '@/components/DatePicker';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';
import getValidationRules from '@/utils/getValidationRules';

import Wrapper from './Wrapper';

const actions = {
  DISABLE: 'disable',
  HIDE: 'hide'
};

const getComponent = (
  section,
  sectionIndex,
  questionIndex,
  disabled,
  warnings,
  values,
  errors
) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  const {
    number,
    label,
    multiple,
    subQuestions,
    type,
    placeholder,
    name,
    options,
    metadata,
    navigation = []
  } = question;
  const questionName = `${section.name}.${sectionIndex}.${name}.answer`;
  const hasError = !!(errors && errors[name]);
  const labelWithNumber = `${number} - ${label}`;
  let show = true;
  const navigationRules = navigation.map(nav => {
    if (!nav) {
      return;
    }
    const rules = getValidationRules({validation: nav, answers: values});
    // eslint-disable-next-line consistent-return
    return {
      action: nav.action,
      result: rules.some(value => value)
    };
  });
  const jump = navigationRules.find(rule => rule.result);
  show = jump?.action !== actions.HIDE;
  const isDisabled = jump?.action === actions.DISABLE || disabled;
  switch (type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = (
      <Wrapper
        component={TextField}
        label={labelWithNumber}
        placeholder={placeholder}
        name={questionName}
        type={type === questionTypes.TEXT_FIELD ? 'text' : 'number'}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  case questionTypes.DROPDOWN:
    QuestionComponent = (
      <Wrapper
        component={Select}
        label={labelWithNumber}
        placeholder={placeholder}
        options={options}
        name={questionName}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  case questionTypes.RADIO:
    QuestionComponent = (
      <Wrapper
        component={Radio}
        options={question.options}
        label={labelWithNumber}
        name={questionName}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = (
      <Wrapper
        component={Checkbox}
        name={questionName}
        options={options}
        label={labelWithNumber}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = (
      <Wrapper
        component={RadioTable}
        options={options}
        label={labelWithNumber}
        name={questionName}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  case questionTypes.DATE:
    QuestionComponent = (
      <Wrapper
        component={DatePicker}
        label={label}
        placeholder={placeholder}
        name={questionName}
        disabled={isDisabled}
        required={hasError}
        warnings={warnings}
        metadata={metadata}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
        show={show}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
};

function QuestionBuilder({values, section, index, disabled, warnings, errors}) {
  return (
    <Grid data-testid="question-builder">
      {Object.values(values).map((value, valueIndex) => value.id && (
        <Grid item key={value.id} mb={2}>
          {getComponent(section, index, valueIndex - 1, disabled, warnings, values, errors)}
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
