import PropTypes from 'prop-types';
import {FastField, FieldArray} from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import getLastId from '@/utils/getLastId';

function Wrapper({
  isMultiple, name, values, ...props
}) {
  if (isMultiple) {
    return (
      <FieldArray
        name={name}
        render={helpers => values.answer.map((answer, index) => (
          <Stack key={answer.id} direction="row" spacing={2}>
            <FastField {...props} name={`${name}.${index}.value`} />
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
  }
  return (
    <FastField {...props} name={name} />
  );
}

Wrapper.propTypes = {
  isMultiple: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  values: PropTypes.shape({
    id: PropTypes.number.isRequired,
    answer: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          value: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string,
            PropTypes.number
          ])
        })
      ),
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  }).isRequired
};

export default Wrapper;
