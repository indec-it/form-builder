import PropTypes from 'prop-types';
import {FastField} from 'formik';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Checkbox from '@/components/Checkbox';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';

const getComponent = (section, sectionIndex, questionIndex, readOnlyMode, warnings) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  const questionName = `${section.name}.${sectionIndex}.${question.name}.answer`;
  const isRequired = question.validations.some(validation => validation.type === 'required');
  const label = `${question.number} - ${question.label}`;
  switch (question.type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = (
      <FastField
        component={TextField}
        label={label}
        placeholder={question.placeholder}
        name={questionName}
        type={question.type === questionTypes.TEXT_FIELD ? 'text' : 'number'}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
      />
    );
    break;
  case questionTypes.DROPDOWN:
    QuestionComponent = (
      <FastField
        component={Select}
        label={label}
        placeholder={question.placeholder}
        options={question.options}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
      />
    );
    break;
  case questionTypes.RADIO:
    QuestionComponent = (
      <FastField
        component={Radio}
        options={question.options}
        label={label}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
      />
    );
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = (
      <FastField
        component={Checkbox}
        name={questionName}
        options={question.options}
        label={label}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
      />
    );
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = (
      <FastField
        component={RadioTable}
        options={question.options}
        label={label}
        name={questionName}
        readOnlyMode={readOnlyMode}
        required={isRequired}
        warnings={warnings}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
};

function QuestionBuilder({
  section, currentSection, index, readOnlyMode, warnings
}) {
  return (
    <Grid container direction="column" spacing={2}>
      {Object.values(section).map((question, questionIndex) => (
        <Grid item key={question.id}>
          {getComponent(currentSection, index, questionIndex, readOnlyMode, warnings)}
        </Grid>
      ))}
    </Grid>
  );
}

QuestionBuilder.propTypes = {
  currentSection: sectionPropTypes.isRequired,
  readOnlyMode: PropTypes.bool,
  section: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  warnings: PropTypes.shape({})
};

QuestionBuilder.defaultProps = {
  readOnlyMode: false,
  warnings: {}
};

export default QuestionBuilder;
