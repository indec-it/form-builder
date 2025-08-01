import ActionButtons from './ActionButtons';
import Headers from './Headers';
import Introduction from './Introduction';
import TitleWithIcon from './TitleWithIcon';

function SectionHeader({
  section,
  sectionsLength,
  onView,
  onEdit,
  onDelete,
  values,
  isReadOnly = false,
  isValid,
  onMoveUp,
  onMoveDown,
  position,
  showEditButton = true
}) {
  return (
    <div className="fb:flex fb:flex-wrap fb:justify-between fb:shadow-md fb:p-4">
      <div className="fb:flex fb:flex-col">
        <TitleWithIcon title={section.label} isValid={isValid} />
        <Introduction introduction={section.introduction} />
        <Headers section={section} values={values} />
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

export default SectionHeader;
