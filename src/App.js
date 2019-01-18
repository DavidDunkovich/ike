import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          <Header as='h1' content='Create-React-App strapped with Semantic UI' inverted/>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
