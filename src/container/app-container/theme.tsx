// import { createTheme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',

    background: {
      default: '#FFFFFF',
      paper: '#292933',
    },
    primary: {
      main: '#4299e1',
    },
    secondary: {
      main: '#63b3ed',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
