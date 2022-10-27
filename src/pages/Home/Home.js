import Container from '@mui/material/Container';

import FormBuilder from '@components/FormBuilder';

import {sections} from '@config/mocks';

function Home() {
  return (
    <Container maxWidth="md">
      <FormBuilder sections={sections} />
    </Container>
  );
}

export default Home;
