import { createTheme } from '@mui/material/styles';

/* eslint-disable-next-line */
export interface MuiCustomThemeProps {}

const Theme = createTheme({
  typography: {
    // fontFamily: ['"Helvetica Neue"'].join(','),
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      light: '#4b7fab',
      main: '#4b7fab',
      dark: '#4b7fab',
      contrastText: '#fff',
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  
});

export default Theme;
