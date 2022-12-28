import PropTypes from 'prop-types';
import {useRoutes} from 'react-router-dom';
import Container from '@mui/material/Container';

import FormBuilder from '@components/FormBuilder';
import sectionPropTypes from '@utils/propTypes/section';

const buildRoutes = sections => {
  const sectionsRoutes = sections.map((section, index) => ({
    path: section.name,
    element: <FormBuilder
      section={section}
      previousSection={sections[index - 1]?.name}
      nextSection={sections[index + 1]?.name}
      page={index}
    />
  }));
  sectionsRoutes.push({path: '*', element: <FormBuilder section={sections[0]} nextSection={sections[1]?.name} page={0} />});
  return sectionsRoutes;
};

function Routes({sections}) {
  return (
    <Container maxWidth="xl" sx={{mt: 4}}>
      {useRoutes(buildRoutes(sections))}
    </Container>
  );
}

Routes.propTypes = {
  sections: PropTypes.arrayOf(sectionPropTypes).isRequired
};

export default Routes;
