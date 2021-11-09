import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Landing from './components/Landing';
import './style.scss';

const hwtheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#147bc9',
    },
    secondary: {
      main: '#326822',
    },
    background: {
      default: '#f5f7fa',
    },
  },
});

export default () => {
  return (
    <div>
      <ThemeProvider theme={hwtheme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
