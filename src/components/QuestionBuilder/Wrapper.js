import PropTypes from 'prop-types';
import {Field, FieldArray} from 'formik';
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
  isMultiple, name, values, subQuestions, options, readOnlyMode, warnings, ...props
}) {
  let Component;
  if (isMultiple) {
    Component = (
      <FieldArray
        name={name}
        render={helpers => values.answer.map((answer, index) => (
          <Stack key={answer.id} direction={{xs: 'column', sm: 'row'}} spacing={2} mb={2}>
            <Field
              {...props}
              options={options}
              name={`${name}.${index}.value`}
              readOnlyMode={readOnlyMode}
              warnings={warnings}
            />
            <SubQuestions
              values={{answer, id: answer.id}}
              subQuestions={subQuestions}
              readOnlyMode={readOnlyMode}
              Component={TextField}
              warnings={warnings}
              name={`${name}.${index}.specifications`}
            />
            {values.answer.length === index + 1 && !readOnlyMode && (
              <Button
                startIcon={<AddCircleIcon />}
                onClick={() => helpers.push({id: getLastId(values.answer) + 1, value: ''})}
              />
            )}
            {index > 0 && !readOnlyMode && (
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
    Component = (
      <Field
        {...props}
        options={options}
        name={`${name}.value`}
        readOnlyMode={readOnlyMode}
        warnings={warnings}
      />
    );
  }
  if (subQuestions.length > 0 && options.length > 0 && !isMultiple) {
    Component = (
      <>
        {Component}
        <SubQuestions
          values={values}
          subQuestions={subQuestions}
          readOnlyMode={readOnlyMode}
          Component={TextField}
          warnings={warnings}
          name={`${name}.specifications`}
        />
      </>
    );
  }
  return Component;
}

Wrapper.propTypes = {
  isMultiple: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  values: valuesPropTypes.isRequired,
  subQuestions: PropTypes.arrayOf(subQuestionPropTypes),
  warnings: PropTypes.shape({})
};

Wrapper.defaultProps = {
  subQuestions: [],
  warnings: {}
};

export default Wrapper;
