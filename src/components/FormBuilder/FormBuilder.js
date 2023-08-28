import PropTypes from 'prop-types';
import {Formik, FieldArray, Form} from 'formik';
import Box from '@mui/material/Box';

import modals from '@/constants/modals';
import NavigationButtons from '@/components/NavigationButtons';
import QuestionBuilder from '@/components/QuestionBuilder';
import getWarnings from '@/utils/getWarnings';
import sectionPropTypes from '@/utils/propTypes/section';

import Modals from './Modals';
import SectionHeader from './SectionHeader';
import useFormBuilder from './useFormBuilder';

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
  const {
    readOnlyMode,
    showSurvey,
    formInitialValues,
    validateSchema,
    warningSchema,
    selectedSectionId,
    openModal,
    handleAcceptModal,
    addNewSection,
    handleOpenModal,
    handleShowSurvey,
    setOpenModal
  } = useFormBuilder({isReadOnly, section, initialValues});
  return (
    <Formik
      initialValues={formInitialValues}
      validateOnMount
      enableReinitialize
      validationSchema={validateSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
    >
      {({values, setValues}) => {
        const warnings = getWarnings(warningSchema, values) || {};
        return (
          <Form>
            <FieldArray
              name={section.name}
              render={
                sectionHelpers => values?.[section.name]?.map((currentSection, index) => (
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
                            isValid={validateSchema.isValidSync({[section.name]: values?.[section.name]})}
                          />
                        ) : (
                          <SectionHeader
                            onView={() => handleShowSurvey(currentSection.id, true)}
                            onEdit={() => handleShowSurvey(currentSection.id, false)}
                            onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, currentSection.id)}
                            sectionsLength={values[section.name].length}
                            section={section}
                            values={currentSection}
                            isReadOnly={isReadOnly}
                            isValid={validateSchema.isValidSync({[section.name]: values?.[section.name]})}
                          />
                        )
                    }
                    {showSurvey === currentSection.id && (
                      <Box sx={{backgroundColor: '#fff', boxShadow: 2, p: 2}}>
                        <QuestionBuilder
                          values={currentSection}
                          index={index}
                          section={section}
                          disabled={readOnlyMode}
                          warnings={warnings}
                        />
                      </Box>
                    )}
                    <Modals
                      open={selectedSectionId === currentSection.id}
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
                ? (
                  <components.NavigationButtons
                    schema={validateSchema}
                    values={values ? values[section.name] : {}}
                    onAddNew={section.multiple ? () => addNewSection(setValues, values) : undefined}
                    onInterrupt={
                      section.interruption.interruptible
                        ? () => handleOpenModal(modals.INTERRUPTION_MODAL, section.id)
                        : undefined
                    }
                  />
                )
                : (
                  <NavigationButtons
                    onPrevious={onPrevious}
                    disablePreviousButton={page === 0}
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
  isLastSection: false,
  isReadOnly: false,
  components: {},
  initialValues: undefined
};

export default FormBuilder;
