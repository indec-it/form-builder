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
            <div key={answer.id} className="fb:flex fb:flex-row fb:gap-4 fb:mb-4 fb:items-start">
              <Field {...props} options={options} name={`${name}.${index}.value`} disabled={disabled} warnings={warnings} />
              <SubQuestions
                values={{answer, id: answer.id}}
                subQuestions={subQuestions}
                disabled={disabled}
                warnings={warnings}
                name={`${name}.${index}.specifications`}
                section={section}
              />
              <div className="fb:flex fb:flex-row fb:gap-2 fb:items-center fb:pt-8">
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
                    className="fb:p-2 fb:rounded-full fb:text-blue-600 fb:hover:bg-blue-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-blue-500 fb:focus:ring-offset-2"
                    aria-label="Add item"
                  >
                    <PlusCircleIcon />
                  </button>
                )}
                {index > 0 && !disabled && (
                  <button
                    type="button"
                    onClick={() => helpers.remove(index)}
                    className="fb:p-2 fb:rounded-full fb:text-red-600 fb:hover:bg-red-50 fb:focus:outline-none fb:focus:ring-2 fb:focus:ring-red-500 fb:focus:ring-offset-2"
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
      <div className="fb:flex fb:flex-col fb:sm:flex-row fb:gap-4">
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
