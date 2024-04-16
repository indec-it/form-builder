import PropTypes from 'prop-types';
import {Formik, FieldArray, Form} from 'formik';
import Box from '@mui/material/Box';

import modals from '@/constants/modals';
import NavigationButtons from '@/components/NavigationButtons';
import QuestionBuilder from '@/components/QuestionBuilder';
import FormProvider from '@/context/form';
import {useNavigation} from '@/hooks';
import getWarnings from '@/utils/getWarnings';
import sectionPropTypes from '@/utils/propTypes/section';

import Modals from './Modals';
import SectionHeader from './SectionHeader';
import useFormBuilder from './useFormBuilder';

function FormBuilder({sections, onSubmit, onFinish, onPrevious, onInterrupt, components, initialValues, isReadOnly}) {
  const {handleNextPage, handlePreviousPage, navigation, page, section} = useNavigation({
    sections,
    initialValues,
    handleFinish: onFinish
  });
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
    setOpenModal,
    transformedSection
  } = useFormBuilder({sections, initialValues, section});

  const handleSubmit = async values => {
    await onSubmit(values);
    handleNextPage();
  };

  const handlePrevious = values => {
    handlePreviousPage();
    onPrevious(values);
  };

  return (
    <FormProvider section={transformedSection} sections={sections} initialValues={initialValues}>
      <Formik
        initialValues={formInitialValues}
        validateOnMount
        enableReinitialize
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
        validateOnChange={false}
      >
        {({values, setValues}) => {
          const warnings = getWarnings(warningSchema, values) || {};
          return (
            <Form>
              <FieldArray
                name={section.name}
                render={sectionHelpers =>
                  values?.[section.name]?.map((currentSection, index) => (
                    <Box key={currentSection.id} mb={2}>
                      {components.SectionHeader ? (
                        <components.SectionHeader
                          onView={() => handleShowSurvey(currentSection.id, true)}
                          onEdit={() => handleShowSurvey(currentSection.id, false)}
                          onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, currentSection.id)}
                          sectionsLength={values[section.name].length}
                          section={section}
                          values={currentSection}
                          isReadOnly={isReadOnly}
                          isValid={validateSchema.isValidSync({[section.name]: [currentSection]})}
                        />
                      ) : (
                        <SectionHeader
                          onView={() => handleShowSurvey(currentSection.id, true)}
                          onEdit={() => handleShowSurvey(currentSection.id, false)}
                          onDelete={() => handleOpenModal(modals.CONFIRM_DELETE_SECTION_MODAL, currentSection.id)}
                          sectionsLength={values[section.name].length}
                          section={transformedSection}
                          values={currentSection}
                          isReadOnly={isReadOnly}
                          isValid={validateSchema.isValidSync({[section.name]: [currentSection]})}
                          onMoveDown={() => sectionHelpers.swap(index, index + 1)}
                          onMoveUp={() => sectionHelpers.swap(index, index - 1)}
                          position={index}
                          showEditButton={!isReadOnly && navigation.action !== 'disable'}
                        />
                      )}
                      {showSurvey === currentSection.id && (
                        <QuestionBuilder
                          values={currentSection}
                          index={index}
                          disabled={readOnlyMode || isReadOnly || navigation.action === 'disable'}
                          warnings={warnings}
                        />
                      )}
                      <Modals
                        open={selectedSectionId}
                        options={section.interruption.options}
                        label={{text: section.interruption.reason}}
                        name={`${section.name}.${index}.${section.interruption.name}`}
                        onAccept={
                          [modals.CONFIRM_DELETE_SECTION_MODAL, modals.INTERRUPTION_MODAL].includes(openModal)
                            ? () => handleAcceptModal(values[section.name], sectionHelpers, onInterrupt, values)
                            : undefined
                        }
                        onClose={() => setOpenModal(undefined)}
                        modal={openModal}
                      />
                    </Box>
                  ))
                }
              />
              {components.NavigationButtons ? (
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
              ) : (
                <NavigationButtons
                  onPrevious={() => handlePrevious(values)}
                  disablePreviousButton={page === 0}
                  onAddNew={section.multiple ? () => addNewSection(setValues, values) : undefined}
                  onInterrupt={
                    section.interruption.interruptible
                      ? () => handleOpenModal(modals.INTERRUPTION_MODAL, section.id)
                      : undefined
                  }
                  readOnlyMode={isReadOnly}
                />
              )}
            </Form>
          );
        }}
      </Formik>
    </FormProvider>
  );
}

FormBuilder.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  onInterrupt: PropTypes.func,
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired,
  isReadOnly: PropTypes.bool,
  components: PropTypes.shape({
    SectionHeader: PropTypes.node,
    NavigationButtons: PropTypes.node
  }),
  initialValues: PropTypes.shape({})
};

FormBuilder.defaultProps = {
  isReadOnly: false,
  components: {},
  initialValues: undefined,
  onInterrupt: undefined
};

export default FormBuilder;
