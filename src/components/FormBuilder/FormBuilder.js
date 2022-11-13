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
  section, openModal, modalOpened, previousSection, nextSection, page, changeSection, onNext, onPrevious
}) {
  const [initialValues, setInitialValues] = useState();
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedSectionId, setSelectedSelectionId] = useState();

  useEffect(() => {
    setInitialValues(buildQuestions(section));
  }, [section]);

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
      const index = allSections.findIndex(currentSection => currentSection.id === selectedSectionId);
      sectionHelpers.remove(index);
    }
    openModal(undefined);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log({...values, [values[section.name].status]: formStatuses.COMPLETED})}
      validateOnMount
      enableReinitialize
    >
      {({
        handleSubmit, values, isValid, setFieldValue
      }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{width: '100%'}}>
          <>
            <FieldArray
              name={`${section.name}`}
              render={
                sectionHelpers => values
                && values[section.name]
                && values[section.name].map((currentSection, index) => (
                  <Box key={section.id} mb={2}>
                    <SectionHeader
                      onView={() => handleOpenModal(modals.PREVIEW_MODAL, section.id)}
                      onEdit={() => handleShowSurvey(section.id, false)}
                      onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, section.id)}
                      sectionsLength={values[section.name].length}
                      section={section}
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
                      options={section.interruption.options}
                      label={section.interruption.reason}
                      name={`${section.name}.${index}.${section.interruption.name}`}
                      onAccept={
                        [modals.CONFIRM_DELETE_SECTION_MODAL, modals.INTERRUPTION_MODAL].includes(modalOpened)
                          ? () => handleAcceptModal(values[section.name], sectionHelpers)
                          : undefined
                      }
                    />
                  </Box>
                ))
              }
            />
            <NavigationButtons
              onPrevious={() => (onPrevious ? onPrevious() : changeSection(previousSection))}
              onNext={() => (onNext ? onNext() : changeSection(nextSection))}
              disableNextButton={!isValid}
              disablePreviousButton={page === 0}
              nextButtonLabel={nextSection ? 'Siguiente' : 'Finalizar'}
              isLastSection={!nextSection}
              onAddNew={section.multiple
                ? () => setFieldValue(
                  `${section.name}.${values[section.name][values[section.name].length - 1].id}`,
                  {
                    ...buildQuestions(section)[section.name][0],
                    id: values[section.name][values[section.name].length - 1].id + 1
                  }
                ) : undefined}
              onInterrupt={
                section.interruption.interruptible
                  ? () => handleOpenModal(modals.INTERRUPTION_MODAL, section.id)
                  : undefined
              }
            />
          </>
        </Box>
      )}
    </Formik>
  );
}

FormBuilder.propTypes = {
  openModal: PropTypes.func.isRequired,
  changeSection: PropTypes.func.isRequired,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
  section: sectionPropTypes.isRequired,
  page: PropTypes.number.isRequired,
  nextSection: PropTypes.string,
  previousSection: PropTypes.string,
  modalOpened: PropTypes.oneOf(Object.values(modals))
};

FormBuilder.defaultProps = {
  modalOpened: undefined,
  previousSection: undefined,
  nextSection: undefined,
  onNext: undefined,
  onPrevious: undefined
};

export default FormBuilder;
