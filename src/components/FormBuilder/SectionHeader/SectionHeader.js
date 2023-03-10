import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

const getHeaders = (questions, values, headers) => {
  if (headers.some(header => header.question)) {
    const finalHeaders = [];
    const headerQuestions = headers.map(header => header.question);
    questions
      .filter(question => headerQuestions.includes(question.id) && !question.multiple)
      .forEach(question => {
        const {value} = values[question.name].answer;
        if (value) {
          if ([questionTypes.TEXT_FIELD, questionTypes.NUMERIC_FIELD].includes(question.type)) {
            finalHeaders.push(value);
          } else {
            const label = getSelectedOptionLabel(question.options, value);
            finalHeaders.push(label);
          }
        }
      });
    return finalHeaders.join('| ');
  }
  return '';
};

function SectionHeader({
  section, sectionsLength, onView, onEdit, onDelete, values, isSurvey
}) {
  return (
    <Box sx={{
      display: 'flex',
      backgroundColor: '#fff',
      boxShadow: 2,
      p: 2,
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }}
    >
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography variant="h6" fontWeight="bold">{section.label}</Typography>
        {section.introduction && (
          <Typography data-testid="introduction" fontWeight="bold" color="gray">{section.introduction}</Typography>
        )}
        {isSurvey ? <Typography>{getHeaders(section.questions, values, section.headers)}</Typography> : null}
      </Box>
      {isSurvey ? (
        <Box>
          <IconButton data-testid="read-only-button" color="warning" onClick={onView}>
            <VisibilityIcon />
          </IconButton>
          <IconButton data-testid="edit-button" color="primary" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          {section.multiple && sectionsLength > 1 && (
            <IconButton data-testid="delete-button" color="error" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      ) : null}
    </Box>
  );
}

SectionHeader.propTypes = {
  onView: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  sectionsLength: PropTypes.number.isRequired,
  section: sectionPropTypes.isRequired,
  values: PropTypes.shape({}).isRequired,
  isSurvey: PropTypes.bool.isRequired
};

export default SectionHeader;
