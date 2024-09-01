import PropTypes from 'prop-types';

import {DeleteButton, EditButton, MoveButton, ViewButton} from '@/components/Buttons';

function ActionButtons({
  isSectionMultiple,
  sectionsLength,
  onEdit,
  onDelete,
  onView,
  isReadOnly,
  onMoveUp,
  onMoveDown,
  position,
  showEditButton
}) {
  return (
    <div className="flex gap-2">
      <ViewButton onClick={onView} />
      {!isReadOnly && (
        <>
          {sectionsLength > 1 && (
            <>
              {onMoveUp && position > 0 && <MoveButton position="up" onClick={onMoveUp} />}
              {onMoveDown && position < sectionsLength - 1 && <MoveButton position="down" onClick={onMoveDown} />}
            </>
          )}
          {showEditButton && <EditButton onClick={onEdit} />}
          {isSectionMultiple && sectionsLength > 1 && <DeleteButton onClick={onDelete} />}
        </>
      )}
    </div>
  );
}

ActionButtons.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  onMoveDown: PropTypes.func,
  onMoveUp: PropTypes.func,
  sectionsLength: PropTypes.number.isRequired,
  position: PropTypes.number.isRequired,
  isReadOnly: PropTypes.bool.isRequired,
  isSectionMultiple: PropTypes.bool.isRequired,
  showEditButton: PropTypes.bool.isRequired
};

ActionButtons.defaultProps = {
  onMoveDown: undefined,
  onMoveUp: undefined
};

export default ActionButtons;
