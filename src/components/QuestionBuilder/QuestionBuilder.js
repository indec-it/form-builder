import PropTypes from 'prop-types';
import {FastField} from 'formik';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Checkbox from '@components/Checkbox';
import Radio from '@components/Radio';
import RadioTable from '@components/RadioTable';
import Select from '@components/Select';
import TextField from '@components/TextField';
import questionTypes from '@constants/questionTypes';
import sectionPropTypes from '@utils/propTypes/section';

const getComponent = (section, sectionIndex, questionIndex, readOnlyMode) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  const questionName = `${section.name}.${sectionIndex}.${question.name}`;
  switch (question.type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = (
      <FastField
        component={TextField}
        label={`${question.number} ${question.label}`}
        placeholder={question.placeholder}
        required={question.required}
        name={questionName}
        type={question.type === questionTypes.TEXT_FIELD ? 'text' : 'number'}
        readOnlyMode={readOnlyMode}
      />
    );
    break;
  case questionTypes.DROPDOWN:
    QuestionComponent = (
      <FastField
        component={Select}
        label={`${question.number} ${question.label}`}
        placeholder={question.placeholder}
        required={question.required}
        options={question.options}
        name={questionName}
        readOnlyMode={readOnlyMode}
      />
    );
    break;
  case questionTypes.RADIO:
    QuestionComponent = (
      <FastField
        component={Radio}
        options={question.options}
        label={`${question.number} ${question.label}`}
        name={questionName}
        readOnlyMode={readOnlyMode}
      />
    );
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = (
      <FastField
        component={Checkbox}
        name={questionName}
        options={question.options}
        label={`${question.number} ${question.label}`}
        readOnlyMode={readOnlyMode}
      />
    );
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = (
      <FastField
        component={RadioTable}
        options={question.options}
        label={`${question.number} ${question.label}`}
        name={questionName}
        readOnlyMode={readOnlyMode}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return QuestionComponent;
};

function QuestionBuilder({
  section, currentSection, index, readOnlyMode
}) {
  return (
    <Grid container direction="column" spacing={2}>
      {Object.values(section).map((question, questionIndex) => (
        <Grid item key={questionIndex}>
          {getComponent(currentSection, index, questionIndex, readOnlyMode)}
        </Grid>
      ))}
    </Grid>
  );
}

QuestionBuilder.propTypes = {
  currentSection: sectionPropTypes.isRequired,
  readOnlyMode: PropTypes.bool,
  section: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

QuestionBuilder.defaultProps = {
  readOnlyMode: false
};

export default QuestionBuilder;
