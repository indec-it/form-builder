import {useState} from 'react';
import PropTypes from 'prop-types';
import {Formik, FieldArray} from 'formik';
import Box from '@mui/material/Box';

import modals from '@/constants/modals';
import NavigationButtons from '@/components/NavigationButtons';
import QuestionBuilder from '@/components/QuestionBuilder';
import useSectionInitialValues from '@/hooks/useSectionInitialValues';
import buildQuestions from '@/utils/buildQuestions';
import getWarnings from '@/utils/getWarnings';
import sectionPropTypes from '@/utils/propTypes/section';
import getSchemas from '@/utils/getSchemas';

import Modals from './Modals';

import SectionHeader from './SectionHeader';

function FormBuilder({
  section,
  nextSection,
  page,
  onSubmit,
  onPrevious,
  isSurvey,
  components
}) {
  const [readOnlyMode, setReadOnlyMode] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedSectionId, setSelectedSelectionId] = useState();
  const [openModal, setOpenModal] = useState();
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  const {initialValues} = useSectionInitialValues(section);

  const handleShowSurvey = (sectionId, readOnly) => {
    setShowSurvey(sectionId);
    setReadOnlyMode(readOnly ? sectionId : false);
  };

  const handleOpenModal = (modal, sectionId) => {
    setSelectedSelectionId(sectionId);
    setOpenModal(modal);
  };

  const handleAcceptModal = (allSections, sectionHelpers) => {
    if (openModal === modals.CONFIRM_DELETE_SECTION_MODAL) {
      const index = allSections.findIndex(currentSection => currentSection.id === selectedSectionId);
      sectionHelpers.remove(index);
    }
    setOpenModal(undefined);
  };

  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      enableReinitialize
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {({values, setFieldValue}) => {
        const warnings = getWarnings(warningSchema, values) || {};
        return (
          <Box component="form" noValidate sx={{width: '100%'}}>
            <>
              <FieldArray
                name={section.name}
                render={
                  sectionHelpers => values
                && values[section.name]
                && values[section.name].map((currentSection, index) => (
                  <Box key={section.id} mb={2}>
                    {
                      components.SectionHeader
                        ? <components.SectionHeader values={currentSection} />
                        : (
                          <SectionHeader
                            onView={() => handleOpenModal(modals.PREVIEW_MODAL, section.id)}
                            onEdit={() => handleShowSurvey(section.id, false)}
                            onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, section.id)}
                            sectionsLength={values[section.name].length}
                            section={section}
                            answers={section}
                            isSurvey={isSurvey}
                          />
                        )
                    }
                    {(!isSurvey || showSurvey === section.id) && (
                      <Box sx={{backgroundColor: '#fff', boxShadow: 2, p: 2}}>
                        <QuestionBuilder
                          section={currentSection}
                          index={index}
                          currentSection={section}
                          readOnlyMode={readOnlyMode === section.id}
                          warnings={warnings}
                        />
                      </Box>
                    )}
                    <Modals
                      open={selectedSectionId === section.id}
                      section={currentSection}
                      index={index}
                      currentSection={section}
                      readOnlyMode
                      cancelButtonLabel="Cerrar"
                      options={section.interruption.options}
                      label={section.interruption.reason}
                      name={`${section.name}.${index}.${section.interruption.name}`}
                      onAccept={
                        [modals.CONFIRM_DELETE_SECTION_MODAL, modals.INTERRUPTION_MODAL].includes(openModal)
                          ? () => handleAcceptModal(values[section.name], sectionHelpers)
                          : undefined
                      }
                      onClose={() => setOpenModal(undefined)}
                      modal={openModal}
                    />
                  </Box>
                ))
                }
              />
              {
                components.NavigationButtons
                  ? <components.NavigationButtons schema={validateSchema} values={values ? values[section.name] : {}} />
                  : (
                    <NavigationButtons
                      onPrevious={onPrevious}
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
                  )
              }
            </>
          </Box>
        );
      }}
    </Formik>
  );
}

FormBuilder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  section: sectionPropTypes.isRequired,
  page: PropTypes.number.isRequired,
  nextSection: PropTypes.string,
  isSurvey: PropTypes.bool,
  components: PropTypes.shape({
    SectionHeader: PropTypes.node,
    NavigationButtons: PropTypes.node
  })
};

FormBuilder.defaultProps = {
  nextSection: undefined,
  isSurvey: true,
  components: {}
};

export default FormBuilder;