import Checkbox from '@/components/Checkbox';
import Currency from '@/components/Currency';
import DatePicker from '@/components/DatePicker';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import questionTypes from '@/constants/questionTypes';

const getQuestionComponent = questionType => {
  switch (questionType) {
  case questionTypes.NUMERIC_FIELD:
  case questionTypes.TEXT_FIELD:
    return TextField;
  case questionTypes.CURRENCY:
    return Currency;
  case questionTypes.DROPDOWN:
    return Select;
  case questionTypes.RADIO:
    return Radio;
  case questionTypes.CHECKBOX:
    return Checkbox;
  case questionTypes.RADIO_TABLE:
    return RadioTable;
  case questionTypes.DATE:
    return DatePicker;
  default:
    return null;
  }
};

export default getQuestionComponent;
