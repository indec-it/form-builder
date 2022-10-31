import MenuBookIcon from '@mui/icons-material/MenuBook';

import {sections as mocks} from '@config/mocks';

export const getSections = () => mocks;
export const getDrawerList = () => {
  const sections = getSections();
  return [
    {
      id: 1,
      label: 'Secciones',
      icon: <MenuBookIcon />,
      children: sections.map(section => ({
        id: section.id,
        label: section.label
      }))
    }
  ];
};
