import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Customize this color as needed
    },
    secondary: {
      main: '#f50057', // Customize this color as needed
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;