import {useState, useMemo} from 'react';

import questionTypes from '@/constants/questionTypes';
import modals from '@/constants/modals';
import validationTypes from '@/constants/validationTypes';
import {useSectionInitialValues} from '@/hooks';
import buildQuestions from '@/utils/buildQuestions';
import getSchemas from '@/utils/getSchemas';
import getLastId from '@/utils/getLastId';

const useFormBuilder = ({sections, initialValues, section}) => {
  const [readOnlyMode, setReadOnlyMode] = useState();
  const [showSurvey, setShowSurvey] = useState();
  const [selectedSectionId, setSelectedSelectionId] = useState();
  const [openModal, setOpenModal] = useState();

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
    const emptySection = buildQuestions(section)[section.name][0];
    newValues[section.name].push({...emptySection, id: lastSection + 1});
    setValues(newValues);
  };

  const transformedSection = useMemo(() => {
    const questions = section.questions.map(question => {
      if (
        [questionTypes.DROPDOWN, questionTypes.RADIO, questionTypes.CHECKBOX].includes(question.type) &&
        question.allOptionsNeedSpecification
      ) {
        return {
          ...question,
          subQuestions: question.options.map((option, index) => ({
            id: index + 1,
            type: question.metadata.specification.type,
            optionId: option.id,
            label: question.metadata.specification.label,
            placeholder: question.metadata.specification.placeholder,
            name: `S${section.id}P${question.id}SQ${index + 1}`,
            userVarName: `${question.userVarName}_${option.value}`,
            validations: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        section: section.name,
                        question: question.name,
                        value: '',
                        type:
                          question.type === questionTypes.CHECKBOX ? validationTypes.NOT_INCLUDES : validationTypes.NOT_EQUAL
                      },
                      {
                        id: 2,
                        section: section.name,
                        question: `S${section.id}P${question.id}SQ${index + 1}`,
                        value: '',
                        type: validationTypes.EQUAL
                      }
                    ]
                  }
                ],
                message: {text: 'Debe completar el campo', type: 'error'}
              }
            ],
            navigation: [
              {
                id: 1,
                rules: [
                  {
                    id: 1,
                    conditions: [
                      {
                        id: 1,
                        section: section.name,
                        question: question.name,
                        value: option.value,
                        type:
                          question.type === questionTypes.CHECKBOX ? validationTypes.NOT_INCLUDES : validationTypes.NOT_EQUAL
                      }
                    ]
                  }
                ],
                action: 'hide'
              }
            ]
          }))
        };
      }
      return question;
    });
    return {...section, questions};
  }, [section]);

  const {initialValues: formInitialValues} = useSectionInitialValues(initialValues, transformedSection);
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section: transformedSection, sections, initialValues});

  return {
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
  };
};

export default useFormBuilder;
