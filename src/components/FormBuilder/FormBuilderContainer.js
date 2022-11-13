import {connect} from 'react-redux';
import {push} from 'redux-first-history';

import {setModal} from '@state/app/appSlice';
import {getModal} from '@state/app/selectors';

import FormBuilder from './FormBuilder';

const mapStateToProps = state => ({modalOpened: getModal(state)});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(setModal(modal)),
  changeSection: section => dispatch(push(section))
});

const FormBuilderContainer = connect(mapStateToProps, mapDispatchToProps)(FormBuilder);

export default FormBuilderContainer;
