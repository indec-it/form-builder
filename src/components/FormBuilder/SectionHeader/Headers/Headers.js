import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

import questionTypes from '@/constants/questionTypes';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';
import sectionPropTypes from '@/utils/propTypes/section';

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
    return <Typography whiteSpace="pre-line" dangerouslySetInnerHTML={{__html: headers}} />;
  }
  return <Typography>{headers}</Typography>;
}

Headers.propTypes = {
  section: sectionPropTypes.isRequired,
  values: PropTypes.shape({}).isRequired
};

export default Headers;
