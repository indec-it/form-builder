import Grid from '@mui/material/Grid';

import Question from './Question';

interface Props {
  values: {
    id: string;
  };
  index: number;
  disabled: boolean;
  warnings: any;
}

function QuestionBuilder({values, index, disabled = false, warnings}: Props) {
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

export default QuestionBuilder;
