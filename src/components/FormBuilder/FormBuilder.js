import {useState} from 'react';
import PropTypes from 'prop-types';
import {Formik, FieldArray, Form} from 'formik';
import Box from '@mui/material/Box';

import modals from '@/constants/modals';
import NavigationButtons from '@/components/NavigationButtons';
import QuestionBuilder from '@/components/QuestionBuilder';
import useSectionInitialValues from '@/hooks/useSectionInitialValues';
import getWarnings from '@/utils/getWarnings';
import sectionPropTypes from '@/utils/propTypes/section';
import getSchemas from '@/utils/getSchemas';
import getLastId from '@/utils/getLastId';

import Modals from './Modals';

import SectionHeader from './SectionHeader';

function FormBuilder({
  section,
  isLastSection,
  page,
  onSubmit,
  onPrevious,
  components,
  initialValues,
  isReadOnly
}) {
  const [readOnlyMode, setReadOnlyMode] = useState(isReadOnly);
  const [showSurvey, setShowSurvey] = useState(false);
  const [selectedSectionId, setSelectedSelectionId] = useState();
  const [openModal, setOpenModal] = useState();
  const {errorSchema: validateSchema, warningSchema} = getSchemas(section);
  const {initialValues: formInitialValues} = useSectionInitialValues(initialValues, section);

  const handleShowSurvey = (sectionId, readOnly) => {
    setShowSurvey(sectionId);
    setReadOnlyMode(readOnly);
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

  const addNewSection = (setValues, values) => {
    const newValues = values;
    const lastSection = getLastId(values[section.name]);
    newValues[section.name].push({...formInitialValues[section.name][0], id: lastSection + 1});
    setValues(newValues);
  };

  return (
    <Formik
      initialValues={formInitialValues}
      validateOnMount
      enableReinitialize
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {({values, setValues}) => {
        const warnings = getWarnings(warningSchema, values) || {};
        return (
          <Form>
            <FieldArray
              name={section.name}
              render={
                sectionHelpers => values
                && values[section.name]
                && values[section.name].map((currentSection, index) => (
                  <Box key={currentSection.id} mb={2}>
                    {
                      components.SectionHeader
                        ? (
                          <components.SectionHeader
                            onView={() => handleShowSurvey(currentSection.id, true)}
                            onEdit={() => handleShowSurvey(currentSection.id, false)}
                            onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, currentSection.id)}
                            sectionsLength={values[section.name].length}
                            section={section}
                            values={currentSection}
                            isReadOnly={isReadOnly}
                          />
                        )
                        : (
                          <SectionHeader
                            onView={() => handleShowSurvey(currentSection.id, true)}
                            onEdit={() => handleShowSurvey(currentSection.id, false)}
                            onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, currentSection.id)}
                            sectionsLength={values[section.name].length}
                            section={section}
                            values={currentSection}
                            isReadOnly={isReadOnly}
                          />
                        )
                    }
                    {showSurvey === currentSection.id && (
                      <Box sx={{backgroundColor: '#fff', boxShadow: 2, p: 2}}>
                        <QuestionBuilder
                          values={currentSection}
                          index={index}
                          section={section}
                          readOnlyMode={readOnlyMode}
                          warnings={warnings}
                        />
                      </Box>
                    )}
                    <Modals
                      open={selectedSectionId === currentSection.id}
                      values={currentSection}
                      index={index}
                      section={section}
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
                    nextButtonLabel={isLastSection ? 'Finalizar' : 'Siguiente'}
                    isLastSection={isLastSection}
                    onAddNew={section.multiple ? () => addNewSection(setValues, values) : undefined}
                    onInterrupt={
                      section.interruption.interruptible
                        ? () => handleOpenModal(modals.INTERRUPTION_MODAL, section.id)
                        : undefined
                    }
                    readOnlyMode={isReadOnly}
                  />
                )
            }
          </Form>
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
  isLastSection: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  components: PropTypes.shape({
    SectionHeader: PropTypes.node,
    NavigationButtons: PropTypes.node
  }),
  initialValues: PropTypes.shape({})
};

FormBuilder.defaultProps = {
  initialValues: undefined
};

FormBuilder.defaultProps = {
  isLastSection: false,
  isReadOnly: false,
  components: {}
};

export default FormBuilder;
