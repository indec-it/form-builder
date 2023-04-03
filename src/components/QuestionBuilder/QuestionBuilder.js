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

import Wrapper from './Wrapper';

const getComponent = (section, sectionIndex, questionIndex, readOnlyMode, warnings, values) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  const {
    validations,
    number,
    label,
    multiple,
    subQuestions,
    type,
    placeholder,
    name,
    options,
    metadata
  } = question;
  const questionName = `${section.name}.${sectionIndex}.${name}.answer`;
  const isRequired = validations.some(validation => validation.type === 'required');
  const labelWithNumber = `${number} - ${label}`;
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
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
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        metadata={metadata}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={subQuestions}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
};

function QuestionBuilder({values, section, index, readOnlyMode, warnings}) {
  return (
    <Grid container direction="column" spacing={2} data-testid="question-builder">
      {Object.values(values).map((value, valueIndex) => value.id && (
        <Grid item key={value.id}>
          {getComponent(section, index, valueIndex - 1, readOnlyMode, warnings, values)}
        </Grid>
      ))}
    </Grid>
  );
}

QuestionBuilder.propTypes = {
  section: sectionPropTypes.isRequired,
  readOnlyMode: PropTypes.bool,
  values: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  warnings: PropTypes.shape({})
};

QuestionBuilder.defaultProps = {
  readOnlyMode: false,
  warnings: {}
};

export default QuestionBuilder;
