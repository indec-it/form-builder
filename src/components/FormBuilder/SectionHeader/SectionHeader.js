import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';

import questionTypes from '@/constants/questionTypes';
import sectionPropTypes from '@/utils/propTypes/section';
import getSelectedOptionLabel from '@/utils/getSelectedOptionLabel';

const getHeaders = (questions, values, headers) => {
  if (headers.some(header => header.question)) {
    const headerQuestions = headers.map(header => header.question);
    return questions.reduce((acc, question) => {
      if (
        headerQuestions.includes(question.id)
        && !question.multiple
        && values[question.name].answer?.value
      ) {
        const {value} = values[question.name].answer;
        if ([questionTypes.TEXT_FIELD, questionTypes.NUMERIC_FIELD].includes(question.type)) {
          acc.push(value);
        } else {
          acc.push(getSelectedOptionLabel(question.options, value));
        }
      }
      return acc;
    }, []).join(' | ');
  }
  return '';
};

function SectionHeader({
  section, sectionsLength, onView, onEdit, onDelete, values, isReadOnly, isValid
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
      <Stack>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Typography variant="h6" fontWeight="bold">{section.label}</Typography>
          {
            isValid
              ? <CheckCircleIcon color="success" data-testid="success-icon" />
              : <ErrorIcon color="error" data-testid="error-icon" />
          }
        </Stack>
        {section.introduction && (
          <Typography data-testid="introduction" fontWeight="bold" color="gray">{section.introduction}</Typography>
        )}
        <Typography>{getHeaders(section.questions, values, section.headers)}</Typography>
      </Stack>
      <Box>
        <IconButton data-testid="read-only-button" color="warning" onClick={onView}>
          <VisibilityIcon />
        </IconButton>
        {!isReadOnly && (
          <>
            <IconButton data-testid="edit-button" color="primary" onClick={onEdit}>
              <EditIcon />
            </IconButton>
            {section.multiple && sectionsLength > 1 && (
              <IconButton data-testid="delete-button" color="error" onClick={onDelete}>
                <DeleteIcon />
              </IconButton>
            )}
          </>
        )}
      </Box>
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
  isValid: PropTypes.bool.isRequired,
  isReadOnly: PropTypes.bool
};

SectionHeader.defaultProps = {
  isReadOnly: false
};

export default SectionHeader;
