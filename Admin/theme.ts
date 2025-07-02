
// "use client";
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   cssVariables: {

//     colorSchemeSelector: 'data-toolpad-color-scheme',
//   },
//   colorSchemes: { light: true, dark: true },
// });

// export default theme;



import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#7D0A0A',
    },
    secondary: {
      main: '#BF3131',
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});
