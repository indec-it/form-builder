import {Provider} from 'react-redux';
import {HistoryRouter as Router} from 'redux-first-history/rr6';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

import {history, store} from '@app/store';
import Routes from '@routes';
import theme from '@styles/theme';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Routes />
          </LocalizationProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
