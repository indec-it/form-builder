import {Routes as ReactRouterRoutes, Route} from 'react-router-dom';

import Home from '@pages/Home';
import {routes} from '@constants';

function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path={routes.HOME} element={<Home />} />
    </ReactRouterRoutes>
  );
}

export default Routes;
