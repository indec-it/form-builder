import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Formik, FieldArray} from 'formik';
import Box from '@mui/material/Box';

import formStatuses from '@constants/formStatuses';
import modals from '@constants/modals';
import NavigationButtons from '@components/NavigationButtons';
import QuestionBuilder from '@components/QuestionBuilder';
import buildQuestions from '@utils/buildQuestions';
import sectionPropTypes from '@utils/propTypes/section';

import Modals from './Modals';

import SectionHeader from './SectionHeader';

function FormBuilder({
  sections, onSetDirty, openModal, modalOpened
}) {
  const [page, setPage] = useState(0);
  const [initialValues, setInitialValues] = useState();
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedSectionId, setSelectedSelectionId] = useState();
  const currentSection = sections[page];

  useEffect(() => {
    const section = sections[page];
    setInitialValues(buildQuestions(section));
  }, [page]);

  const handleShowSurvey = (sectionId, readOnly) => {
    setShowSurvey(sectionId);
    setReadOnlyMode(readOnly ? sectionId : false);
  };

  const handleOpenModal = (modal, sectionId) => {
    setSelectedSelectionId(sectionId);
    openModal(modal);
  };

  const handleAcceptModal = (allSections, sectionHelpers) => {
    if (modalOpened === modals.CONFIRM_DELETE_SECTION_MODAL) {
      const index = allSections.findIndex(section => section.id === selectedSectionId);
      sectionHelpers.remove(index);
    }
    openModal(undefined);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log({...values, [values[currentSection.name].status]: formStatuses.COMPLETED})}
      validateOnMount
      enableReinitialize
    >
      {({
        handleSubmit, values, isValid, setFieldValue, dirty
      }) => {
        setTimeout(() => onSetDirty(dirty), 0);
        return (
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
                      onView={() => handleOpenModal(modals.PREVIEW_MODAL, section.id)}
                      onEdit={() => handleShowSurvey(section.id, false)}
                      onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, section.id)}
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
                    <Modals
                      open={selectedSectionId === section.id}
                      section={section}
                      index={index}
                      currentSection={currentSection}
                      readOnlyMode
                      cancelButtonLabel="Cerrar"
                      options={currentSection.interruption.options}
                      label={currentSection.interruption.reason}
                      name={`${currentSection.name}.${index}.${currentSection.interruption.name}`}
                      onAccept={
                        [modals.CONFIRM_DELETE_SECTION_MODAL, modals.INTERRUPTION_MODAL].includes(modalOpened)
                          ? () => handleAcceptModal(values[currentSection.name], sectionHelpers)
                          : undefined
                      }
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
                onInterrupt={
                  currentSection.interruption.interruptible
                    ? () => handleOpenModal(modals.INTERRUPTION_MODAL, currentSection.id)
                    : undefined
                }
              />
            </>
          </Box>
        );
      }}
    </Formik>
  );
}

FormBuilder.propTypes = {
  onSetDirty: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired,
  modalOpened: PropTypes.oneOf(Object.values(modals))
};

FormBuilder.defaultProps = {
  modalOpened: undefined
};

export default FormBuilder;
