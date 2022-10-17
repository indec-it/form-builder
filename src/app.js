import {Provider} from 'react-redux';
import {HistoryRouter as Router} from 'redux-first-history/rr6';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import {history, store} from '@app/store';
import Routes from '@routes';
import theme from '@styles/theme';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
