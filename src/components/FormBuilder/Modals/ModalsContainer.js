import {connect} from 'react-redux';

import {setModal} from '@state/app/appSlice';
import {getModal} from '@state/app/selectors';

import Modals from './Modals';

const mapStateToProps = state => ({modal: getModal(state)});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(setModal(undefined))
});

const ModalsContainer = connect(mapStateToProps, mapDispatchToProps)(Modals);

export default ModalsContainer;
