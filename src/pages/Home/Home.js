import Stack from '@mui/material/Stack';

import FormBuilder from '@components/FormBuilder';

import {sections} from '@config/mocks';

function Home() {
  return (
    <Stack direction={{xs: 'column', md: 'row'}}>
      <FormBuilder sections={sections} />
    </Stack>
  );
}

export default Home;
