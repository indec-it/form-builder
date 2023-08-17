import {useState} from 'react';

import modals from '@/constants/modals';
import useSectionInitialValues from '@/hooks/useSectionInitialValues';
import buildQuestions from '@/utils/buildQuestions';
import getSchemas from '@/utils/getSchemas';
import getLastId from '@/utils/getLastId';

const useFormBuilder = ({isReadOnly, section, initialValues}) => {
  const [readOnlyMode, setReadOnlyMode] = useState(isReadOnly);
  const [showSurvey, setShowSurvey] = useState();
  const [selectedSectionId, setSelectedSelectionId] = useState();
  const [openModal, setOpenModal] = useState();
  const {initialValues: formInitialValues} = useSectionInitialValues(initialValues, section);
  const {errorSchema: validateSchema, warningSchema} = getSchemas({section});

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
    setOpenModal
  };
};

export default useFormBuilder;
