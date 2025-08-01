import Question from './Question';

function QuestionBuilder({values, index, disabled = false, warnings = {}}) {
  return (
    <div className="fb:shadow-lg fb:p-4" data-testid="question-builder">
      {Object.values(values).map((value, valueIndex) => {
        if (value.id) {
          return (
            <div key={value.id} className="fb:mb-4">
              <Question
                sectionIndex={index}
                questionIndex={valueIndex - 1}
                disabled={disabled}
                warnings={warnings}
                values={values}
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default QuestionBuilder;
