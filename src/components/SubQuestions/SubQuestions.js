import {Field} from 'formik';

import {useSubQuestions} from '@/hooks';
import getQuestionComponent from '@/utils/getQuestionComponent';
import getQuestionProps from '@/utils/getQuestionProps';

function SubQuestions({values, subQuestions, name, ...props}) {
  const parentName = name.split('.')[2];
  const {selectedQuestions} = useSubQuestions({
    subQuestions,
    value: {[parentName]: values},
    name: parentName,
    specificationsPathName: name
  });

  return selectedQuestions.length > 0 ? (
    <div className="fb:flex fb:flex-col fb:space-y-2 fb:justify-end fb:w-full">
      {selectedQuestions.map(subQuestion => (
        <div key={subQuestion.id}>
          <Field
            {...getQuestionProps({question: subQuestion, name, values}).props}
            {...props}
            component={getQuestionComponent(subQuestion.type)}
            name={`${name}.${subQuestion.name}.answer.value`}
            label={{text: subQuestion.label}}
            placeholder={subQuestion.placeholder}
          />
        </div>
      ))}
    </div>
  ) : null;
}

export default SubQuestions;
