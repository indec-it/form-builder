import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

import FormBuilder from '@components/FormBuilder';

import {sections} from '@config/mocks';

function Home({onSetDirty}) {
  return (
    <Stack direction={{xs: 'column', md: 'row'}}>
      <FormBuilder sections={sections} onSetDirty={onSetDirty} />
    </Stack>
  );
}

Home.propTypes = {
  onSetDirty: PropTypes.func.isRequired
};

export default Home;
