import {CloseIcon} from '@/components/Icons';

function Modal({
  modal,
  onClose,
  onAccept,
  children,
  acceptButtonLabel = 'Aceptar',
  cancelButtonLabel = 'Cancelar',
  open = true
}) {
  if (!(modal > 0 && open)) return null;

  return (
    <>
      <div
        className="fb:fixed fb:inset-0 fb:bg-white fb:bg-opacity-60 fb:backdrop-blur-md fb:z-40 fb:transition-opacity fb:duration-300 fb:ease-out"
        onClick={onClose}
        onKeyDown={e => {
          if (e.key === 'Escape') onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      <div className="fb:fixed fb:inset-0 fb:z-50 fb:overflow-y-auto">
        <div className="fb:flex fb:min-h-full fb:items-center fb:justify-center fb:p-4 fb:text-center sm:fb:p-0">
          <div className="fb:relative fb:transform fb:overflow-hidden fb:rounded-2xl fb:bg-white fb:px-6 fb:pb-6 fb:pt-8 fb:text-left fb:shadow-2xl fb:transition-all fb:duration-300 fb:ease-out fb:scale-100 fb:opacity-100 sm:fb:my-8 sm:fb:w-full sm:fb:max-w-lg sm:fb:p-8 fb:ring-1 fb:ring-gray-200">
            <div className="fb:absolute fb:right-0 fb:top-0 fb:pr-6 fb:pt-6">
              <button
                type="button"
                data-testid="close-button-icon"
                onClick={onClose}
                className="fb:rounded-full fb:bg-gray-100 fb:p-2 fb:text-gray-400 hover:fb:bg-gray-200 hover:fb:text-gray-600 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2 fb:transition-colors fb:duration-200"
              >
                <span className="fb:sr-only">Close</span>
                <CloseIcon />
              </button>
            </div>

            <div className="fb:mt-2">
              <div className="fb:text-gray-900">{children}</div>
            </div>

            <div className="fb:mt-8 fb:flex fb:flex-col-reverse fb:gap-3 sm:fb:flex-row sm:fb:justify-end">
              <button
                type="button"
                data-testid="close-button"
                onClick={onClose}
                className="fb:inline-flex fb:justify-center fb:rounded-xl fb:border fb:border-gray-300 fb:bg-white fb:px-6 fb:py-3 fb:text-sm fb:font-medium fb:text-gray-700 fb:shadow-sm hover:fb:bg-gray-50 hover:fb:border-gray-400 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2 fb:transition-all fb:duration-200 sm:fb:w-auto"
              >
                {cancelButtonLabel}
              </button>
              {onAccept && (
                <button
                  type="button"
                  data-testid="accept-button"
                  onClick={() => onAccept(modal)}
                  className="fb:inline-flex fb:justify-center fb:rounded-xl fb:bg-blue-600 fb:px-6 fb:py-3 fb:text-sm fb:font-medium fb:text-white fb:shadow-lg hover:fb:bg-blue-700 hover:fb:shadow-xl focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-blue-500 focus:fb:ring-offset-2 fb:transition-all fb:duration-200 fb:transform hover:fb:scale-105 sm:fb:w-auto"
                >
                  {acceptButtonLabel}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
