import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Formik} from 'formik';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import NavigationButtons from '@components/NavigationButtons';
import buildQuestions from '@utils/buildQuestions';
import sectionPropTypes from '@utils/propTypes/section';

import QuestionsModal from './QuestionsModal';

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

  const handleOpenModal = (sectionId, readOnly) => {
    setShowModal(sectionId);
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
        handleSubmit, values, isValid, setFieldValue
      }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{width: '100%'}}>
          {values && (
            <>
              {values[currentSection.name].map((section, index) => (
                <Box key={section.id} mb={2}>
                  <Box sx={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    boxShadow: 2,
                    p: 5,
                    justifyContent: 'space-between',
                    flexWrap: 'wrap'
                  }}
                  >
                    <Box>
                      <Typography variant="h6" fontWeight="bold">{currentSection.label}</Typography>
                      {currentSection.introduction && (
                        <Typography fontWeight="bold" color="gray">{currentSection.introduction}</Typography>
                      )}
                    </Box>
                    <Box>
                      <IconButton color="success" onClick={() => handleOpenModal(section.id, true)}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="primary" onClick={() => handleOpenModal(section.id, false)}>
                        <EditIcon />
                      </IconButton>
                      {section.multiple && values[currentSection.name].length > 1 && (
                        <IconButton color="error">
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                  <QuestionsModal
                    open={showModal === section.id}
                    onClose={() => setShowModal(false)}
                    section={section}
                    index={index}
                    currentSection={currentSection}
                    readOnlyMode={readOnlyMode}
                  />
                </Box>
              ))}
              <NavigationButtons
                onPrevious={() => setPage(page - 1)}
                onNext={() => setPage(page + 1)}
                disableNextButton={!isValid}
                disablePreviousButton={page === 0}
                nextButtonLabel={sections.length === page + 1 ? 'Finalizar' : 'Siguiente'}
                onAddNew={currentSection.multiple
                  ? () => setFieldValue(
                    `${currentSection.name}.${values[currentSection.name][values[currentSection.name].length - 1].id}`,
                    {
                      ...buildQuestions(currentSection)[currentSection.name][0],
                      id: values[currentSection.name][values[currentSection.name].length - 1].id + 1
                    }
                  ) : undefined}
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
