import {EyeIcon, ArrowUpIcon, ArrowDownIcon, EditIcon, TrashIcon} from '@/components/Icons';

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
    <div className="flex flex-row gap-2">
      <button
        type="button"
        data-testid="read-only-button"
        onClick={onView}
        className="p-2 rounded-full text-yellow-600 hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
        aria-label="View"
      >
        <EyeIcon />
      </button>
      {!isReadOnly && (
        <>
          {sectionsLength > 1 && (
            <>
              {onMoveUp && position > 0 && (
                <button
                  type="button"
                  data-testid="move-up-button"
                  onClick={onMoveUp}
                  className="p-2 rounded-full text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Move up"
                >
                  <ArrowUpIcon />
                </button>
              )}
              {onMoveDown && position < sectionsLength - 1 && (
                <button
                  type="button"
                  data-testid="move-down-button"
                  onClick={onMoveDown}
                  className="p-2 rounded-full text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="Move down"
                >
                  <ArrowDownIcon />
                </button>
              )}
            </>
          )}
          {showEditButton && (
            <button
              type="button"
              data-testid="edit-button"
              onClick={onEdit}
              className="p-2 rounded-full text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Edit"
            >
              <EditIcon />
            </button>
          )}
          {isSectionMultiple && sectionsLength > 1 && (
            <button
              type="button"
              data-testid="delete-button"
              onClick={onDelete}
              className="p-2 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Delete"
            >
              <TrashIcon />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default ActionButtons;
