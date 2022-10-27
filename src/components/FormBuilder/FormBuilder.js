import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  FastField, FieldArray, Formik
} from 'formik';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';

import Checkbox from '@components/Checkbox';
import NavigationButtons from '@components/NavigationButtons';
import Radio from '@components/Radio';
import RadioTable from '@components/RadioTable';
import Select from '@components/Select';
import TextField from '@components/TextField';
import questionTypes from '@constants/questionTypes';
import buildQuestions from '@utils/buildQuestions';

const getComponent = (section, questionIndex, values) => {
  const question = section.questions[questionIndex];
  if (!question) {
    return null;
  }
  let QuestionComponent;
  switch (question.type) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    QuestionComponent = (
      <FastField
        component={TextField}
        label={`${question.number} ${question.label}`}
        placeholder={question.placeholder}
        required={question.required}
        name={`questions.${questionIndex}.${question.name}`}
        type={questionTypes.TEXT_FIELD ? 'text' : 'number'}
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
        name={`questions.${questionIndex}.${question.name}`}
      />
    );
    break;
  case questionTypes.RADIO:
    QuestionComponent = (
      <FastField
        component={Radio}
        options={question.options}
        label={`${question.number} ${question.label}`}
        name={`questions.${questionIndex}.${question.name}`}
      />
    );
    break;
  case questionTypes.CHECKBOX:
    QuestionComponent = (
      <FastField
        component={Checkbox}
        name={`questions.${questionIndex}.${question.name}`}
        options={question.options}
        label={`${question.number} ${question.label}`}
      />
    );
    break;
  case questionTypes.RADIO_TABLE:
    QuestionComponent = (
      <FastField
        component={RadioTable}
        options={question.options}
        label={`${question.number} ${question.label}`}
        name={`questions.${questionIndex}.${question.name}`}
      />
    );
    break;
  default:
    QuestionComponent = <Typography>Invalid component.</Typography>;
  }
  return (
    <>
      {question.introduction && <Typography fontWeight="bold">{question.introduction}</Typography>}
      {question.multiple ? (
        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}
        >
          <FieldArray
            name={`questions.${questionIndex}.${question.name}`}
            render={questionHelpers => (
              <>
                {values.questions[questionIndex][question.name].map((currentQuestion, index) => (
                  <Box key={currentQuestion.id} sx={{width: '100%', mt: 2, mb: 2}}>
                    {QuestionComponent}
                    {values.questions[questionIndex][question.name].length === index + 1 && (
                      <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <IconButton
                          onClick={() => questionHelpers.push({id: currentQuestion.id + 1})}
                          color="primary"
                          sx={{fontSize: '14px'}}
                        >
                          <AddIcon />
                          {' '}
                          Agregar más
                        </IconButton>
                      </Box>
                    )}
                  </Box>
                ))}
              </>
            )}
          />
        </Box>
      ) : (
        QuestionComponent
      )}
    </>
  );
};

function FormBuilder({sections}) {
  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState();
  const currentSection = sections[page];

  useEffect(() => {
    const section = currentSection;
    setInitialValues({questions: buildQuestions(section)});
  }, [page]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validateOnMount
      enableReinitialize
    >
      {({
        handleSubmit, values, isValid
      }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            backgroundColor: '#fff', padding: 4, boxShadow: 2, borderRadius: 2, height: '100vh'
          }}
        >
          {values && values.questions && (
            <>
              <Box sx={{display: 'flex', justifyContent: 'center', mb: 3}}>
                <Typography variant="h6" fontWeight="bold">{currentSection.label}</Typography>
              </Box>
              {currentSection.introduction && (
                <Typography fontWeight="bold" color="gray">{currentSection.introduction}</Typography>
              )}
              <Grid container direction="column" spacing={2}>
                <FieldArray
                  name="questions"
                  render={questionsHelpers => (
                    <>
                      {values.questions.map((question, index) => (
                        <Grid item key={Object.keys(question)[0]}>
                          {getComponent(currentSection, index, values)}
                        </Grid>
                      ))}
                      {JSON.stringify(values.questions)}
                    </>
                  )}
                />
                <Grid item>
                  <NavigationButtons
                    onPrevious={() => setPage(page - 1)}
                    onNext={() => setPage(page + 1)}
                    disableNextButton={!isValid || sections.length === page + 1}
                    disablePreviousButton={page === 0}
                  />
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      )}
    </Formik>
  );
}

FormBuilder.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      introduction: PropTypes.string,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          introduction: PropTypes.string,
          type: PropTypes.number.isRequired,
          placeholder: PropTypes.string,
          required: PropTypes.bool.isRequired
        })
      )
    })
  ).isRequired
};

export default FormBuilder;
