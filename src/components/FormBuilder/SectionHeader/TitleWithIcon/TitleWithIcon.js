import {CheckCircleIcon, ErrorIcon} from '@/components/Icons';

function TitleWithIcon({title, isValid}) {
  return (
    <div className="flex flex-row gap-4 items-center">
      <h6 className="text-xl font-bold">{title}</h6>
      {isValid ? (
        <CheckCircleIcon className="w-6 h-6 text-green-600" data-testid="success-icon" />
      ) : (
        <ErrorIcon className="w-6 h-6 text-red-600" data-testid="error-icon" />
      )}
    </div>
  );
}

export default TitleWithIcon;
