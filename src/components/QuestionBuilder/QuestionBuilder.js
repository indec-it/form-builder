import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Checkbox from '@/components/Checkbox';
import DatePicker from '@/components/DatePicker';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import Table from '@/components/Table';
import TextField from '@/components/TextField';
import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';

import Wrapper from './Wrapper';

const mapSubQuestions = ({
  sectionName, sectionIndex, questionName, subQuestions
}) => subQuestions.map(subQuestion => ({
  ...subQuestion,
  name: `${sectionName}.${sectionIndex}.${questionName}.answer.specifications.${subQuestion.name}.answer.value`
}));

const getComponent = (section, sectionIndex, questionIndex, readOnlyMode, warnings, values) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  const {
    multiple, subQuestions, type, options, placeholder, metadata, name, label, number, validations, rows, columns
  } = question;
  const questionName = `${section.name}.${sectionIndex}.${name}.answer`;
  const isRequired = validations.some(validation => validation.type === 'required');
  const labelFormatted = `${number} - ${label}`;
  const mappedSubQuestions = subQuestions && subQuestions.length > 0
    ? mapSubQuestions({
      sectionName: section.name, sectionIndex, questionName: name, subQuestions
    })
    : subQuestions;
  switch (type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = (
      <Wrapper
        component={TextField}
        label={labelFormatted}
        placeholder={placeholder}
        name={questionName}
        type={type === questionTypes.TEXT_FIELD ? 'text' : 'number'}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.DROPDOWN:
    QuestionComponent = (
      <Wrapper
        component={Select}
        label={labelFormatted}
        placeholder={placeholder}
        options={options}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.RADIO:
    QuestionComponent = (
      <Wrapper
        component={Radio}
        options={options}
        label={labelFormatted}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = (
      <Wrapper
        component={Checkbox}
        name={questionName}
        options={options}
        label={labelFormatted}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = (
      <Wrapper
        component={RadioTable}
        options={options}
        label={labelFormatted}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.DATE:
    QuestionComponent = (
      <Wrapper
        component={DatePicker}
        label={labelFormatted}
        placeholder={placeholder}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
        metadata={metadata}
        isMultiple={multiple}
        values={values[name]}
        subQuestions={mappedSubQuestions}
      />
    );
    break;
  case questionTypes.TABLE:
    QuestionComponent = (
      <Wrapper
        component={Table}
        label={labelFormatted}
        name={questionName}
        readOnlyMode={readOnlyMode}
        warnings={warnings}
        isMultiple={multiple}
        values={values[name]}
        rows={rows}
        columns={columns}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
};

function QuestionBuilder({
  values, section, index, readOnlyMode, warnings
}) {
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
