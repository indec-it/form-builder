import {Field, FieldArray} from 'formik';

import SubQuestions from '@/components/SubQuestions';
import TextField from '@/components/TextField';
import {getSubQuestions} from '@/utils/buildQuestions';
import getLastId from '@/utils/getLastId';
import {PlusCircleIcon, DeleteIcon} from '@/components/Icons';

function Wrapper({
  isMultiple,
  name,
  values,
  subQuestions = [],
  options = [],
  disabled = false,
  warnings = {},
  show,
  section,
  ...props
}) {
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
            <div key={answer.id} className="flex flex-col sm:flex-row gap-4 mb-4">
              <Field {...props} options={options} name={`${name}.${index}.value`} disabled={disabled} warnings={warnings} />
              <SubQuestions
                values={{answer, id: answer.id}}
                subQuestions={subQuestions}
                disabled={disabled}
                warnings={warnings}
                name={`${name}.${index}.specifications`}
                section={section}
              />
              <div className="flex flex-col sm:flex-row gap-2 justify-center w-20">
                {values.answer.length === index + 1 && !disabled && (
                  <button
                    type="button"
                    onClick={() =>
                      helpers.push({
                        id: getLastId(values.answer) + 1,
                        value: '',
                        specifications: getSubQuestions(subQuestions)
                      })
                    }
                    className="p-2 rounded-full text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Add item"
                  >
                    <PlusCircleIcon />
                  </button>
                )}
                {index > 0 && !disabled && (
                  <button
                    type="button"
                    onClick={() => helpers.remove(index)}
                    className="p-2 rounded-full text-red-600 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label="Delete item"
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>
            </div>
          ))
        }
      />
    );
  } else {
    Component = <Field {...props} options={options} name={`${name}.value`} disabled={disabled} warnings={warnings} />;
  }
  if (subQuestions.length > 0 && options.length > 0 && !isMultiple) {
    Component = (
      <div className="flex flex-col sm:flex-row gap-4">
        {Component}
        <SubQuestions
          values={values}
          subQuestions={subQuestions}
          disabled={disabled}
          Component={TextField}
          warnings={warnings}
          name={`${name}.specifications`}
          section={section}
        />
      </div>
    );
  }
  return Component;
}

export default Wrapper;
