import {ArrowLeftIcon, PlusIcon, XIcon, ArrowRightIcon} from '@/components/Icons';

function NavigationButtons({onPrevious, disablePreviousButton = false, onAddNew, onInterrupt, readOnlyMode = false}) {
  return (
    <div className="fb:flex fb:flex-col fb:sm:flex-row fb:gap-2 fb:sm:gap-4 fb:justify-between fb:p-4">
      <button
        type="button"
        data-testid="back-button"
        onClick={onPrevious}
        disabled={disablePreviousButton}
        className="fb:flex fb:items-center fb:justify-center fb:px-4 fb:py-2 fb:border fb:border-gray-300 fb:rounded-md fb:text-gray-700 fb:bg-white hover:fb:bg-gray-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-offset-2 focus:fb:ring-blue-500 disabled:fb:opacity-50 disabled:fb:cursor-not-allowed"
      >
        <ArrowLeftIcon className="fb:w-5 fb:h-5 fb:mr-2" />
        Anterior
      </button>
      {!readOnlyMode && (
        <div className="fb:flex fb:flex-col fb:sm:flex-row fb:gap-2">
          {onAddNew && (
            <button
              type="button"
              data-testid="add-new"
              onClick={onAddNew}
              className="fb:flex fb:items-center fb:justify-center fb:px-4 fb:py-2 fb:border fb:border-gray-300 fb:rounded-md fb:text-gray-700 fb:bg-white hover:fb:bg-gray-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-offset-2 focus:fb:ring-blue-500"
            >
              <PlusIcon className="fb:w-5 fb:h-5 fb:mr-2" />
              Agregar nuevo
            </button>
          )}
          {onInterrupt && (
            <button
              type="button"
              data-testid="interrupt-survey"
              onClick={onInterrupt}
              className="fb:flex fb:items-center fb:justify-center fb:px-4 fb:py-2 fb:border fb:border-red-300 fb:rounded-md fb:text-red-700 fb:bg-white hover:fb:bg-red-50 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-offset-2 focus:fb:ring-red-500"
            >
              <XIcon className="fb:w-5 fb:h-5 fb:mr-2" />
              Interrumpir encuesta
            </button>
          )}
        </div>
      )}
      <button
        type="submit"
        className="fb:flex fb:items-center fb:justify-center fb:px-4 fb:py-2 fb:border fb:border-transparent fb:rounded-md fb:text-white fb:bg-blue-600 hover:fb:bg-blue-700 focus:fb:outline-none focus:fb:ring-2 focus:fb:ring-offset-2 focus:fb:ring-blue-500"
      >
        Siguiente
        <ArrowRightIcon className="fb:w-5 fb:h-5 fb:ml-2" />
      </button>
    </div>
  );
}

export default NavigationButtons;
