import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    background: {
      default: '#f3f3f3'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body1: {
          fontSize: '14px'
        }
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '14px',
          marginLeft: 0
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: 'black',
          fontSize: '16px'
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '15px'
        }
      }
    }
  }
});

export default theme;
