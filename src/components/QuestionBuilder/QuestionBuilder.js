import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

import Question from './Question';

function QuestionBuilder({values, index, disabled, warnings}) {
  return (
    <Grid data-testid="question-builder" sx={{boxShadow: 2, p: 2}}>
      {Object.values(values).map((value, valueIndex) => {
        if (value.id) {
          return (
            <Grid item key={value.id} mb={2}>
              <Question
                sectionIndex={index}
                questionIndex={valueIndex - 1}
                disabled={disabled}
                warnings={warnings}
                values={values}
              />
            </Grid>
          );
        }
        return null;
      })}
    </Grid>
  );
}

QuestionBuilder.propTypes = {
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
