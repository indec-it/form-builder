import Grid from '@mui/material/Grid2';

import Question from './Question';

function QuestionBuilder({values, index, disabled = false, warnings = {}}) {
  return (
    <Grid data-testid="question-builder" sx={{boxShadow: 2, p: 2}}>
      {Object.values(values).map((value, valueIndex) => {
        if (value.id) {
          return (
            <Grid
              item
              key={value.id}
              sx={{
                mb: 2
              }}
            >
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

export default QuestionBuilder;
