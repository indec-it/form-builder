import PropTypes from 'prop-types';

import {Check, Exclamation} from '@/components/Icons';

function TitleWithIcon({title, isValid}) {
  return (
    <div className="flex gap-2 items-center">
      <h6 className="font-bold">{title}</h6>
      {isValid ? <Check /> : <Exclamation />}
    </div>
  );
}

TitleWithIcon.propTypes = {
  title: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired
};

export default TitleWithIcon;
