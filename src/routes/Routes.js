import PropTypes from 'prop-types';
import {Routes as ReactRouterRoutes, Route} from 'react-router-dom';

import Home from '@pages/Home';

function Routes({onSetDirty}) {
  return (
    <ReactRouterRoutes>
      <Route path="*" element={<Home onSetDirty={onSetDirty} />} />
    </ReactRouterRoutes>
  );
}

Routes.propTypes = {
  onSetDirty: PropTypes.func.isRequired
};

export default Routes;
