import {connect} from 'react-redux';

import {getSections} from '@state/app/selectors';

import Routes from './Routes';

const mapStateToProps = state => ({
  sections: getSections(state)
});

const RoutesContainer = connect(mapStateToProps)(Routes);

export default RoutesContainer;
