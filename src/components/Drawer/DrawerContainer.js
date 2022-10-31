import {connect} from 'react-redux';

import {getDrawerList} from '@state/app/selectors';

import Drawer from './Drawer';

const mapStateToProps = state => ({
  list: getDrawerList(state)
});

const DrawerContainer = connect(mapStateToProps)(Drawer);

export default DrawerContainer;
