import Stack from '@mui/material/Stack';

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
    <Stack
      direction="row"
      sx={{
        boxShadow: 2,
        p: 2,
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}
    >
      <Stack>
        <TitleWithIcon title={section.label} isValid={isValid} />
        <Introduction introduction={section.introduction} />
        <Headers section={section} values={values} />
      </Stack>
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
    </Stack>
  );
}

export default SectionHeader;
