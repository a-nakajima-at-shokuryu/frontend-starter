import React from 'react';
import ThemeProvider from './components/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; 
import Main from './containers/Main';
import About from './containers/About';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/main" />
          </Route>
          <Route path="/main" component={Main} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>      
    </ThemeProvider>
  )
}

export default App
