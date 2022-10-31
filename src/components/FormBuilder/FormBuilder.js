import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FastField, Formik} from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Checkbox from '@components/Checkbox';
import NavigationButtons from '@components/NavigationButtons';
import Radio from '@components/Radio';
import RadioTable from '@components/RadioTable';
import Select from '@components/Select';
import TextField from '@components/TextField';
import questionTypes from '@constants/questionTypes';
import buildQuestions from '@utils/buildQuestions';
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

function FormBuilder({sections}) {
  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState();
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const currentSection = sections[page];

  useEffect(() => {
    const section = sections[page];
    setInitialValues(buildQuestions(section));
  }, [page]);

  const handleOpenModal = readOnly => {
    setShowModal(true);
    setReadOnlyMode(readOnly);
  };

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
        <Box component="form" onSubmit={handleSubmit} sx={{width: '100%'}}>
          {values && (
            <>
              {values[currentSection.name].map((section, index) => (
                <>
                  <Box sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    boxShadow: 2,
                    p: 5,
                    justifyContent: 'space-between'
                  }}
                  >
                    <Box>
                      <Typography variant="h6" fontWeight="bold">{currentSection.label}</Typography>
                      {currentSection.introduction && (
                        <Typography fontWeight="bold" color="gray">{currentSection.introduction}</Typography>
                      )}
                    </Box>
                    <Box>
                      <IconButton color="success" onClick={() => handleOpenModal(true)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="primary" onClick={() => handleOpenModal(false)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                  >
                    <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '100%',
                      bgcolor: 'background.paper',
                      border: '2px solid #000',
                      boxShadow: 24,
                      p: 4
                    }}
                    >
                      <Grid key={section.id} container direction="column" spacing={2}>
                        {Object.values(section).map((question, questionIndex) => (
                          <Grid item key={questionIndex}>
                            {getComponent(currentSection, index, questionIndex, readOnlyMode)}
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Modal>
                </>
              ))}
              <NavigationButtons
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                disableNextButton={!isValid}
                disablePreviousButton={page === 0}
                nextButtonLabel={sections.length === page + 1 ? 'Finalizar' : 'Siguiente'}
                onAddNew={() => {}}
              />
            </>
          )}
        </Box>
      )}
    </Formik>
  );
}

FormBuilder.propTypes = {
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired
};

export default FormBuilder;
