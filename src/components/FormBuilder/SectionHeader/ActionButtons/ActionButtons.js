import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

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
    <Stack direction="row" spacing={1}>
      <IconButton data-testid="read-only-button" color="warning" onClick={onView}>
        <VisibilityIcon />
      </IconButton>
      {!isReadOnly && (
        <>
          {sectionsLength > 1 && (
            <>
              {onMoveUp && position > 0 && (
                <IconButton data-testid="move-up-button" color="primary" onClick={onMoveUp}>
                  <ArrowUpwardIcon />
                </IconButton>
              )}
              {onMoveDown && position < sectionsLength - 1 && (
                <IconButton data-testid="move-down-button" color="primary" onClick={onMoveDown}>
                  <ArrowDownwardIcon />
                </IconButton>
              )}
            </>
          )}
          {showEditButton && (
            <IconButton data-testid="edit-button" color="primary" onClick={onEdit}>
              <EditIcon />
            </IconButton>
          )}
          {isSectionMultiple && sectionsLength > 1 && (
            <IconButton data-testid="delete-button" color="error" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </>
      )}
    </Stack>
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
