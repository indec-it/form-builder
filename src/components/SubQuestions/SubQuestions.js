import PropTypes from 'prop-types';
import {Field} from 'formik';

import {useSubQuestions} from '@/hooks';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';
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
    <div className="flex justify-end w-full gap-2">
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

SubQuestions.propTypes = {
  name: PropTypes.string.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired
};

export default SubQuestions;
