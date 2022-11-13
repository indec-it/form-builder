import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SyncIcon from '@mui/icons-material/Sync';

export const getModal = state => state.app.modal;
export const getDrawerList = () => [
  {
    id: 1,
    label: 'Estado de encuesta',
    icon: <MenuBookIcon />
  },
  {
    id: 2,
    label: 'Logs',
    icon: <FormatListBulletedIcon />
  },
  {
    id: 3,
    label: 'Sincronizacion',
    icon: <SyncIcon />
  }
];
export const getSections = state => state.app.sections;
