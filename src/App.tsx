import * as React from 'react';
import './App.css';
import Header from './components/header'
import MainBody from './components/main-body'
import Example from './components/react-typicals/hello-world';
import HelloWorld from './components/react-typicals/hello-world';

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
