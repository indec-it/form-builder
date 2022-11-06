import {useState} from 'react';
import {Provider} from 'react-redux';
import {HistoryRouter as Router} from 'redux-first-history/rr6';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';

import {history, store} from '@app/store';
import Drawer from '@components/Drawer';
import Routes from '@routes';
import theme from '@styles/theme';

function App() {
  const [isFormDirty, setIsFormDirty] = useState(false);
  return (
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            <Drawer isFormDirty={isFormDirty}>
              <Routes onSetDirty={setIsFormDirty} />
            </Drawer>
          </LocalizationProvider>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}

export default App;
