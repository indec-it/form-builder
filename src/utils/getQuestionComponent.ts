import Checkbox from '@/components/Checkbox';
import Currency from '@/components/Currency';
import DatePicker from '@/components/DatePicker';
import Message from '@/components/Message';
import Radio from '@/components/Radio';
import RadioTable from '@/components/RadioTable';
import Select from '@/components/Select';
import TextField from '@/components/TextField';
import {QUESTION_TYPES} from '@/lib/enums';

const getQuestionComponent = (questionType: QUESTION_TYPES) => {
  switch (questionType) {
    case QUESTION_TYPES.NUMERIC_FIELD:
    case QUESTION_TYPES.TEXT_FIELD:
      return TextField;
    case QUESTION_TYPES.CURRENCY:
      return Currency;
    case QUESTION_TYPES.DROPDOWN:
      return Select;
    case QUESTION_TYPES.RADIO:
      return Radio;
    case QUESTION_TYPES.CHECKBOX:
      return Checkbox;
    case QUESTION_TYPES.RADIO_TABLE:
      return RadioTable;
    case QUESTION_TYPES.DATE:
      return DatePicker;
    case QUESTION_TYPES.MESSAGE:
      return Message;
    default:
      return null;
  }
};

export default getQuestionComponent;
