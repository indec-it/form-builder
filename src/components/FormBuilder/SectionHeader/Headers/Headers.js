import Typography from '@mui/material/Typography';

import questionTypes from '@/constants/questionTypes';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

const getHeaders = (questions, values, headers) => {
  if (headers.some(header => header.question)) {
    const headerQuestions = headers.map(header => header.question);
    return questions
      .reduce((acc, question) => {
        if (headerQuestions.includes(question.id) && !question.multiple && values[question.name].answer?.value) {
          const {value} = values[question.name].answer;
          if ([questionTypes.TEXT_FIELD, questionTypes.NUMERIC_FIELD].includes(question.type)) {
            acc.push(value);
          } else {
            acc.push(getSelectedOptionLabel(question.options, value));
          }
        }
        return acc;
      }, [])
      .join(' | ');
  }
  return '';
};

function Headers({section, values}) {
  const headers = getHeaders(section.questions, values, section.headers);
  const isHTML = /<[^>]+>/g.test(headers);

  if (isHTML) {
    return (
      <Typography
        dangerouslySetInnerHTML={{__html: headers}}
        sx={{
          whiteSpace: 'pre-line'
        }}
      />
    );
  }
  return <Typography>{headers}</Typography>;
}

export default Headers;
