import {getByText} from '@testing-library/react';

import Home from './Home';

describe('<Home>', () => {
  const getComponent = () => render(Home);
  it('should display `Welcome to Form Builder`', () => {
    const {container} = getComponent();
    expect(getByText(container, 'Welcome to Form Builder')).toBeInTheDocument();
  });
});
