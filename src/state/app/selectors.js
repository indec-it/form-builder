import MenuBookIcon from '@mui/icons-material/MenuBook';

import {sections as mocks} from '@config/mocks';

export const getSections = () => mocks;
export const getDrawerList = () => [
  {
    id: 1,
    label: 'Secciones completas',
    icon: <MenuBookIcon />
  },
  {
    id: 2,
    label: 'Logs',
    icon: <MenuBookIcon />
  }
];
