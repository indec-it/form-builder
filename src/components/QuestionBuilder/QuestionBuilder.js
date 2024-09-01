import PropTypes from 'prop-types';

import Question from './Question';

function QuestionBuilder({values, index, disabled, warnings}) {
  return (
    <div className="flex flex-col gap-3 shadow-md p-3 rounded-md" data-testid="question-builder">
      {Object.values(values).map((value, valueIndex) => {
        if (value.id) {
          return (
            <Question
              key={value.id}
              sectionIndex={index}
              questionIndex={valueIndex - 1}
              disabled={disabled}
              warnings={warnings}
              values={values}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

QuestionBuilder.propTypes = {
  disabled: PropTypes.bool,
  values: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  warnings: PropTypes.shape({}),
  errors: PropTypes.shape({})
};

QuestionBuilder.defaultProps = {
  disabled: false,
  warnings: {},
  errors: undefined
};

export default QuestionBuilder;
