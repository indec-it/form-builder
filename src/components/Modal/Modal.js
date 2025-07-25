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
        className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out"
        onClick={onClose}
        onKeyDown={e => {
          if (e.key === 'Escape') onClose();
        }}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-2xl bg-white px-6 pb-6 pt-8 text-left shadow-2xl transition-all duration-300 ease-out scale-100 opacity-100 sm:my-8 sm:w-full sm:max-w-lg sm:p-8 ring-1 ring-gray-200">
            <div className="absolute right-0 top-0 pr-6 pt-6">
              <button
                type="button"
                data-testid="close-button-icon"
                onClick={onClose}
                className="rounded-full bg-gray-100 p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
              >
                <span className="sr-only">Close</span>
                <CloseIcon />
              </button>
            </div>

            <div className="mt-2">
              <div className="text-gray-900">{children}</div>
            </div>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                data-testid="close-button"
                onClick={onClose}
                className="inline-flex justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 sm:w-auto"
              >
                {cancelButtonLabel}
              </button>
              {onAccept && (
                <button
                  type="button"
                  data-testid="accept-button"
                  onClick={() => onAccept(modal)}
                  className="inline-flex justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 sm:w-auto"
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
