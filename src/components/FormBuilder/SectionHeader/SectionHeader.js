import PropTypes from 'prop-types';

import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

import ActionButtons from './ActionButtons';
import Introduction from './Introduction';
import TitleWithIcon from './TitleWithIcon';

const getHeaders = (questions, values, headers) => {
  if (headers.some(header => header.question)) {
    const headerQuestions = headers.map(header => header.question);
    return questions
      .reduce((acc, question) => {
        if (headerQuestions.includes(question.id) && !question.multiple && values[question.name].answer?.value) {
          const {value} = values[question.name].answer;
          if ([questionTypes.TEXT_FIELD, questionTypes.NUMERIC_FIELD].includes(question.type)) {
            acc.push(value);
          } else {
            acc.push(getSelectedOptionLabel(question.options, value));
          }
        }
        return acc;
      }, [])
      .join(' | ');
  }
  return '';
};

function SectionHeader({
  section,
  sectionsLength,
  onView,
  onEdit,
  onDelete,
  values,
  isReadOnly,
  isValid,
  onMoveUp,
  onMoveDown,
  position,
  showEditButton
}) {
  return (
    <div className="flex gap-2 justify-between flex-wrap shadow border rounded-md p-3">
      <div>
        <TitleWithIcon title={section.label} isValid={isValid} />
        <Introduction introduction={section.introduction} />
        <p>{getHeaders(section.questions, values, section.headers)}</p>
      </div>
      <ActionButtons
        isSectionMultiple={section.multiple}
        sectionsLength={sectionsLength}
        onEdit={onEdit}
        onDelete={onDelete}
        onView={onView}
        onMoveDown={onMoveDown}
        onMoveUp={onMoveUp}
        isReadOnly={isReadOnly}
        position={position}
        showEditButton={showEditButton}
      />
    </div>
  );
}

SectionHeader.propTypes = {
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMoveUp: PropTypes.func,
  onMoveDown: PropTypes.func,
  sectionsLength: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  section: sectionPropTypes.isRequired,
  values: PropTypes.shape({}).isRequired,
  isValid: PropTypes.bool.isRequired,
  showEditButton: PropTypes.bool,
  isReadOnly: PropTypes.bool
};

SectionHeader.defaultProps = {
  onMoveUp: undefined,
  onMoveDown: undefined,
  isReadOnly: false,
  showEditButton: true
};

export default SectionHeader;
