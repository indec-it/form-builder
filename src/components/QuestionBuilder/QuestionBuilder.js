import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import sectionPropTypes from '@/utils/propTypes/section';

import Question from './Question';

function QuestionBuilder({values, section, index, disabled, warnings}) {
  return (
    <Grid data-testid="question-builder">
      {Object.values(values).map(
        (value, valueIndex) =>
          value.id && (
            <Grid item key={value.id} mb={2}>
              <Question
                section={section}
                sectionIndex={index}
                questionIndex={valueIndex - 1}
                disabled={disabled}
                warnings={warnings}
                values={values}
              />
            </Grid>
          )
      )}
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
