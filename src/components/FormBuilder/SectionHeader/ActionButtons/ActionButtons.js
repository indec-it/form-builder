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
        className="fb:p-2 fb:rounded-full fb:text-yellow-600 fb:hover:bg-yellow-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-yellow-500 fb:focus:ring-offset-2"
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
                  className="fb:p-2 fb:rounded-full fb:text-blue-600 fb:hover:bg-blue-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500 fb:focus:ring-offset-2"
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
                  className="fb:p-2 fb:rounded-full fb:text-blue-600 fb:hover:bg-blue-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500 fb:focus:ring-offset-2"
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
              className="fb:p-2 fb:rounded-full fb:text-blue-600 fb:hover:bg-blue-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500 fb:focus:ring-offset-2"
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
              className="fb:p-2 fb:rounded-full fb:text-red-600 fb:hover:bg-red-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-red-500 fb:focus:ring-offset-2"
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
