import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

import sectionPropTypes from '@/utils/propTypes/section';

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
  isReadOnly,
  isValid,
  onMoveUp,
  onMoveDown,
  position,
  showEditButton
}) {
  return (
    <Stack direction="row" boxShadow={2} p={2} justifyContent="space-between" flexWrap="wrap">
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
