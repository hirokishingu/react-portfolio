import * as React from 'react';
import './App.css';
import Header from './components/header'
import MainBody from './components/main-body'

export class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Header></Header>
        <MainBody></MainBody>
      </div>
    );
  }
}

export default App;
