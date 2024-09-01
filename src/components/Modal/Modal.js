import PropTypes from 'prop-types';

import modals from '@/constants/modals';

function Modal({modal, onClose, onAccept, children, acceptButtonLabel, cancelButtonLabel, open}) {
  return (
    modal > 0 &&
    open && (
      <div id="default-modal" tabIndex="-1" aria-hidden="true">
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative rounded-lg shadow-lg bg-gray-300">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-lg font-semibold text-gray-900">Atencion</h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">{children}</div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
              <button
                type="button"
                onClick={() => onAccept(modal)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                {acceptButtonLabel}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
              >
                {cancelButtonLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onAccept: PropTypes.func,
  acceptButtonLabel: PropTypes.string,
  cancelButtonLabel: PropTypes.string,
  modal: PropTypes.oneOf(Object.values(modals)),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  open: PropTypes.bool
};

Modal.defaultProps = {
  onAccept: null,
  acceptButtonLabel: 'Aceptar',
  cancelButtonLabel: 'Cancelar',
  modal: undefined,
  children: undefined,
  open: true
};

export default Modal;
