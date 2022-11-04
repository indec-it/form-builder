import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import CancelIcon from '@mui/icons-material/Cancel';

import QuestionBuilder from '@components/QuestionBuilder';
import sectionPropTypes from '@utils/propTypes/section';

function PreviewModal({
  open, onClose, section, index, currentSection
}) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        p: 4,
        borderRadius: '20px'
      }}
      >
        <Container maxWidth="md">
          <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <IconButton onClick={onClose}>
              <CancelIcon color="info" />
            </IconButton>
          </Box>
          <Divider />
          <QuestionBuilder
            section={section}
            index={index}
            currentSection={currentSection}
            readOnlyMode
          />
        </Container>
      </Box>
    </Modal>
  );
}

PreviewModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  currentSection: sectionPropTypes.isRequired,
  section: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default PreviewModal;
