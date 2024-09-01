import PropTypes from 'prop-types';

import {AddButton, BackButton, InterruptButton, NextButton} from '@/components/Buttons';

function NavigationButtons({onPrevious, disablePreviousButton, onAddNew, onInterrupt, readOnlyMode}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-2 gap-2">
      <BackButton onClick={onPrevious} disabled={disablePreviousButton} />
      {!readOnlyMode && (
        <div className="flex gap-2">
          {onAddNew && <AddButton onClick={onAddNew} />}
          {onInterrupt && <InterruptButton onClick={onInterrupt} />}
        </div>
      )}
      <NextButton />
    </div>
  );
}

NavigationButtons.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onInterrupt: PropTypes.func,
  onAddNew: PropTypes.func,
  readOnlyMode: PropTypes.bool,
  disablePreviousButton: PropTypes.bool
};

NavigationButtons.defaultProps = {
  disablePreviousButton: false,
  readOnlyMode: false,
  onAddNew: null,
  onInterrupt: null
};

export default NavigationButtons;
