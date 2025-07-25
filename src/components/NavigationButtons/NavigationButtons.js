import {ArrowLeftIcon, PlusIcon, XIcon, ArrowRightIcon} from '@/components/Icons';

function NavigationButtons({onPrevious, disablePreviousButton = false, onAddNew, onInterrupt, readOnlyMode = false}) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 justify-between p-4">
      <button
        type="button"
        data-testid="back-button"
        onClick={onPrevious}
        disabled={disablePreviousButton}
        className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2" />
        Anterior
      </button>
      {!readOnlyMode && (
        <div className="flex flex-col sm:flex-row gap-2">
          {onAddNew && (
            <button
              type="button"
              data-testid="add-new"
              onClick={onAddNew}
              className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <PlusIcon className="w-5 h-5 mr-2" />
              Agregar nuevo
            </button>
          )}
          {onInterrupt && (
            <button
              type="button"
              data-testid="interrupt-survey"
              onClick={onInterrupt}
              className="flex items-center justify-center px-4 py-2 border border-red-300 rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <XIcon className="w-5 h-5 mr-2" />
              Interrumpir encuesta
            </button>
          )}
        </div>
      )}
      <button
        type="submit"
        className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Siguiente
        <ArrowRightIcon className="w-5 h-5 ml-2" />
      </button>
    </div>
  );
}

export default NavigationButtons;
