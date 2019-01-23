import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import SplashScreen from './SplashScreen';
class App extends Component {

  state = {
    
  }

  componentDidMount = () =>{
  }
  
  render() {
    return (
      <div className='app'>
        <Main/>
        <SplashScreen/>
      </div>
    );
  }
}

export default App;
