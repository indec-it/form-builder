import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Formik, FieldArray} from 'formik';
import Box from '@mui/material/Box';

import NavigationButtons from '@components/NavigationButtons';
import QuestionBuilder from '@components/QuestionBuilder';
import buildQuestions from '@utils/buildQuestions';
import sectionPropTypes from '@utils/propTypes/section';

import ConfirmDeleteSectionModal from './ConfirmDeleteSectionModal';
import PreviewModal from './PreviewModal';
import SectionHeader from './SectionHeader';

function FormBuilder({sections}) {
  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState();
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showConfirmDeleteSectionModal, setShowConfirmDeleteSectionModal] = useState(false);
  const currentSection = sections[page];

  useEffect(() => {
    const section = sections[page];
    setInitialValues(buildQuestions(section));
  }, [page]);

  const handleShowSurvey = (sectionId, readOnly) => {
    setShowSurvey(sectionId);
    setReadOnlyMode(readOnly ? sectionId : false);
  };

  const handleRemoveSection = (sectionId, allSections, sectionHelpers) => {
    setShowConfirmDeleteSectionModal(false);
    const index = allSections.findIndex(section => section.id === sectionId);
    sectionHelpers.remove(index);
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
          <>
            <FieldArray
              name={`${currentSection.name}`}
              render={
                sectionHelpers => values
                && values[currentSection.name]
                && values[currentSection.name].map((section, index) => (
                  <Box key={section.id} mb={2}>
                    <SectionHeader
                      onView={() => setShowPreviewModal(section.id)}
                      onEdit={() => handleShowSurvey(section.id, false)}
                      onDelete={() => setShowConfirmDeleteSectionModal(section.id)}
                      sectionsLength={values[currentSection.name].length}
                      section={currentSection}
                      answers={section}
                    />
                    {showSurvey === section.id && (
                      <Box sx={{backgroundColor: '#fff', boxShadow: 2, p: 2}}>
                        <QuestionBuilder
                          section={section}
                          index={index}
                          currentSection={currentSection}
                          readOnlyMode={readOnlyMode === section.id}
                        />
                      </Box>
                    )}
                    <ConfirmDeleteSectionModal
                      open={showConfirmDeleteSectionModal === section.id}
                      onClose={() => setShowConfirmDeleteSectionModal(false)}
                      onAccept={() => handleRemoveSection(
                        showConfirmDeleteSectionModal,
                        values[currentSection.name],
                        sectionHelpers
                      )}
                    />
                    <PreviewModal
                      open={showPreviewModal === section.id}
                      section={section}
                      index={index}
                      currentSection={currentSection}
                      onClose={() => setShowPreviewModal(false)}
                    />
                  </Box>
                ))
              }
            />
            <NavigationButtons
              onPrevious={() => setPage(page - 1)}
              onNext={() => setPage(page + 1)}
              disableNextButton={!isValid}
              disablePreviousButton={page === 0}
              nextButtonLabel={sections.length === page + 1 ? 'Finalizar' : 'Siguiente'}
              isLastSection={sections.length === page + 1}
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
        </Box>
      )}
    </Formik>
  );
}

FormBuilder.propTypes = {
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired
};

export default FormBuilder;
