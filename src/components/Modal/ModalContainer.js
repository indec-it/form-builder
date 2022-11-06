import {connect} from 'react-redux';

import {setModal} from '@state/app/appSlice';
import {getModal} from '@state/app/selectors';

import Modal from './Modal';

const mapStateToProps = state => ({modal: getModal(state)});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(setModal(undefined))
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
