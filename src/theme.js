import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    white: '#fff',
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
});

export default theme;
