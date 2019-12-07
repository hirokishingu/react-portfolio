import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { App } from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import WaterRipple from './components/water-ripple';

const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        {/* <WaterRipple> */}
        <Route exact path="/" component={App} />
        {/* </WaterRipple> */}
      </Switch>
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
