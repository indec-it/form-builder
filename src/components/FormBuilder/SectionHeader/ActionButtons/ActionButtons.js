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
    <div className="fb:flex fb:flex-row fb:gap-2">
      <button
        type="button"
        data-testid="read-only-button"
        onClick={onView}
        className="fb:p-2 fb:rounded-full fb:text-yellow-600 hover:fb:bg-yellow-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-yellow-500 focus:fb:ring-offset-2"
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
                  className="fb:p-2 fb:rounded-full fb:text-blue-600 hover:fb:bg-blue-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2"
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
                  className="fb:p-2 fb:rounded-full fb:text-blue-600 hover:fb:bg-blue-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2"
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
              className="fb:p-2 fb:rounded-full fb:text-blue-600 hover:fb:bg-blue-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2"
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
              className="fb:p-2 fb:rounded-full fb:text-red-600 hover:fb:bg-red-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-red-500 focus:fb:ring-offset-2"
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
