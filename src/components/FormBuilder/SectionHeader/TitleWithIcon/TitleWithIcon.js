import {CheckCircleIcon, ErrorIcon} from '@/components/Icons';

function TitleWithIcon({title, isValid}) {
  return (
    <div className="fb:flex fb:flex-row fb:gap-4 fb:items-center">
      <h6 className="fb:text-xl fb:font-bold">{title}</h6>
      {isValid ? (
        <CheckCircleIcon className="fb:w-6 fb:h-6 fb:text-green-600" data-testid="success-icon" />
      ) : (
        <ErrorIcon className="fb:w-6 fb:h-6 fb:text-red-600" data-testid="error-icon" />
      )}
    </div>
  );
}

export default TitleWithIcon;
