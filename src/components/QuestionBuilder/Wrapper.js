import PropTypes from 'prop-types';
import {FastField, FieldArray} from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import SubQuestions from '@/components/SubQuestions';
import TextField from '@/components/TextField';
import getLastId from '@/utils/getLastId';
import subQuestionPropTypes from '@/utils/propTypes/subQuestion';
import valuesPropTypes from '@/utils/propTypes/values';

function Wrapper({
  isMultiple, name, values, subQuestions, options, readOnlyMode, ...props
}) {
  let Component;
  if (isMultiple) {
    Component = (
      <FieldArray
        name={name}
        render={helpers => values.answer.map((answer, index) => (
          <Stack key={answer.id} direction="row" spacing={2}>
            <FastField {...props} options={options} name={`${name}.${index}.value`} readOnlyMode={readOnlyMode} />
            {values.answer.length === index + 1 && (
              <Button
                startIcon={<AddCircleIcon />}
                onClick={() => helpers.push({id: getLastId(values.answer) + 1, value: ''})}
              />
            )}
            {index > 0 && (
              <Button
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => helpers.remove(index)}
              />
            )}
          </Stack>
        ))}
      />
    );
  } else {
    Component = <FastField {...props} options={options} name={name} readOnlyMode={readOnlyMode} />;
  }
  if (subQuestions.length > 0 && options.length > 0) {
    Component = (
      <>
        {Component}
        <SubQuestions values={values} subQuestions={subQuestions} readOnlyMode={readOnlyMode} Component={TextField} />
      </>
    );
  }
  return Component;
}

Wrapper.propTypes = {
  isMultiple: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes).isRequired
};

export default Wrapper;
