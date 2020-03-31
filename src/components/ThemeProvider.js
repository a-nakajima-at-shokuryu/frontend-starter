import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'; 
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: { primary: { main: blue[700], }, }, 
});

const ThemeProvider = ({
  children, 
}) => {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}

export default ThemeProvider
