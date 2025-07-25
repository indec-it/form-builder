import {useEffect} from 'react';
import {Formik, FieldArray, Form} from 'formik';

import modals from '@/constants/modals';
import NavigationButtons from '@/components/NavigationButtons';
import QuestionBuilder from '@/components/QuestionBuilder';
import FormProvider from '@/context/form';
import {useNavigation} from '@/hooks';
import getWarnings from '@/utils/getWarnings';

import Header from './Header';
import Modals from './Modals';
import useFormBuilder from './useFormBuilder';

function FormBuilder({
  sections,
  onSubmit,
  onFinish,
  onPrevious,
  onInterrupt,
  components = {},
  initialValues,
  isReadOnly = false,
  onChange
}) {
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
    transformedSection,
    position
  } = useFormBuilder({sections, initialValues, section});

  const handleSubmit = async values => {
    const canContinue = await onSubmit(values);
    if (canContinue === undefined || canContinue) {
      handleNextPage();
    }
  };

  const handlePrevious = values => {
    handlePreviousPage();
    onPrevious(values);
  };

  const handleKeyDown = keyEvent => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
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

          useEffect(() => {
            if (onChange) {
              onChange({values, position});
            }
          }, [values, onChange, position]);

          return (
            <Form onKeyDown={handleKeyDown}>
              <FieldArray
                name={section.name}
                render={sectionHelpers =>
                  values?.[section.name]?.map((currentSection, index) => (
                    <div key={currentSection.id} className="mb-8">
                      <Header
                        components={components}
                        onView={() => handleShowSurvey(currentSection.id, true)}
                        onEdit={() => handleShowSurvey(currentSection.id, false, index)}
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
                        name={`${section.name}.${index}.${section.interruption.name}.answer.value`}
                        onAccept={
                          [modals.CONFIRM_DELETE_SECTION_MODAL, modals.INTERRUPTION_MODAL].includes(openModal)
                            ? () => handleAcceptModal(values[section.name], sectionHelpers, onInterrupt, values)
                            : undefined
                        }
                        onClose={() => setOpenModal(undefined)}
                        modal={openModal}
                      />
                    </div>
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
                  readOnlyMode={isReadOnly}
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

export default FormBuilder;
