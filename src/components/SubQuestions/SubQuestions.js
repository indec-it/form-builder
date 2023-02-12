import PropTypes from 'prop-types';
import {FastField} from 'formik';

import castArray from '@/utils/castArray';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';

function SubQuestions({values, subQuestions, readOnlyMode, Component}) {
  const specifications = values.specifications.filter(
    specification => castArray(values.answer.value).includes(specification.optionId.toString())
  );
  return (
    <>
      {specifications.map(specification => {
        const subQuestion = subQuestions.find(
          currentSubQuestion => currentSubQuestion.optionId === specification.optionId
        );
        const isRequired = subQuestion.validations.some(validation => validation.type === 'required');
        return (
          <FastField
            key={specification.id}
            component={Component}
            name={subQuestion.name}
            label={subQuestion.label}
            placeholder={subQuestion.placeholder}
            required={isRequired}
            readOnlyMode={readOnlyMode}
          />
        );
      })}
    </>
  );
}

SubQuestions.propTypes = {
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired,
  readOnlyMode: PropTypes.bool.isRequired,
  Component: PropTypes.node.isRequired
};

export default SubQuestions;
