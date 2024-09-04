import {Field, FieldArray} from 'formik';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

import SubQuestions from '@/components/SubQuestions';
import TextField from '@/components/TextField';
import {getSubQuestions} from '@/utils/buildQuestions';
import getLastId from '@/utils/getLastId';
import {Option, Section, SubQuestion, Values} from '@/lib/definitions';

interface Props {
  isMultiple: boolean;
  show: boolean;
  disabled: boolean;
  name: string;
  section: Section;
  values: Values;
  subQuestions: SubQuestion[];
  warnings: any;
  options: Option[];
}

function Wrapper({
  isMultiple,
  name,
  values,
  subQuestions = [],
  options = [],
  disabled = false,
  warnings,
  show,
  section,
  ...props
}: Props) {
  if (!show) {
    return null;
  }
  let Component;
  if (isMultiple) {
    Component = (
      <FieldArray
        name={name}
        render={helpers =>
          values.answer.map((answer, index) => (
            <Stack key={answer.id} direction={{xs: 'column', sm: 'row'}} spacing={2} mb={2}>
              <Field {...props} options={options} name={`${name}.${index}.value`} disabled={disabled} warnings={warnings} />
              <SubQuestions
                values={{answer, id: answer.id}}
                subQuestions={subQuestions}
                disabled={disabled}
                warnings={warnings}
                name={`${name}.${index}.specifications`}
                section={section}
              />
              <Stack direction={{xs: 'column', sm: 'row'}} spacing={2} justifyContent="center" sx={{width: '90px'}}>
                {values.answer.length === index + 1 && !disabled && (
                  <IconButton
                    onClick={() =>
                      helpers.push({
                        id: getLastId(values.answer) + 1,
                        value: '',
                        specifications: getSubQuestions(subQuestions)
                      })
                    }
                    color="primary"
                  >
                    <AddCircleIcon />
                  </IconButton>
                )}
                {index > 0 && !disabled && (
                  <IconButton onClick={() => helpers.remove(index)} color="error">
                    <DeleteIcon />
                  </IconButton>
                )}
              </Stack>
            </Stack>
          ))
        }
      />
    );
  } else {
    Component = <Field {...props} options={options} name={`${name}.value`} disabled={disabled} warnings={warnings} />;
  }
  if (subQuestions.length > 0 && options.length > 0 && !isMultiple) {
    Component = (
      <Stack direction={{xs: 'column', sm: 'row'}} spacing={2}>
        {Component}
        <SubQuestions
          values={values}
          subQuestions={subQuestions}
          disabled={disabled}
          warnings={warnings}
          name={`${name}.specifications`}
        />
      </Stack>
    );
  }
  return Component;
}

export default Wrapper;
