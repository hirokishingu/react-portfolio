import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import VerticalTabs from './components/vertical-tabs'
import IconLabelTabs from './components/icon-label-tabs';
import LinearDeterminate from './components/progress/linear-progress';

export class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <VerticalTabs></VerticalTabs>
        <IconLabelTabs />
        <LinearDeterminate />
        <Button variant="contained" color="primary">
          test button
        </Button>
      </div>
    );
  }
}

export default App;
