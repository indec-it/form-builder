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
  const [position, setPosition] = useState();
  const [openModal, setOpenModal] = useState();

  const handleShowSurvey = (sectionId, readOnly, index) => {
    setShowSurvey(sectionId);
    setReadOnlyMode(readOnly);
    setPosition(index);

    if (!readOnly) {
      setTimeout(() => {
        const element = document.getElementById(`section-${sectionId}`);
        if (element) {
          element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
      }, 100);
    }
  };

  const handleOpenModal = (modal, sectionId) => {
    setSelectedSelectionId(sectionId);
    setOpenModal(modal);
  };

  const handleAcceptModal = (allSections, sectionHelpers, onInterrupt, values) => {
    if (openModal === modals.CONFIRM_DELETE_SECTION_MODAL) {
      const index = allSections.findIndex(currentSection => currentSection.id === selectedSectionId);
      sectionHelpers.remove(index);
    }
    if (openModal === modals.INTERRUPTION_MODAL && onInterrupt) {
      onInterrupt(values);
    }
    setOpenModal(undefined);
  };

  const addNewSection = (setValues, values) => {
    const newValues = values;
    const lastSection = getLastId(values[section.name]);
    const emptySection = buildQuestions(section)[section.name][0];
    const newId = lastSection + 1;
    newValues[section.name].push({...emptySection, id: newId});
    setValues(newValues);

    setTimeout(() => {
      const element = document.getElementById(`section-${newId}`);
      if (element) {
        element.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }, 100);
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
    transformedSection,
    position
  };
};

export default useFormBuilder;
