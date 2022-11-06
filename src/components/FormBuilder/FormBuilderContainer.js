import {connect} from 'react-redux';

import {setModal} from '@state/app/appSlice';
import {getModal} from '@state/app/selectors';

import FormBuilder from './FormBuilder';

const mapStateToProps = state => ({modalOpened: getModal(state)});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(setModal(modal))
});

const FormBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(FormBuilder);

export default FormBuilderContainer;
