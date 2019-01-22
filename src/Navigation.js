import React, { Component } from 'react';
import './App.css';
import {Icon} from 'semantic-ui-react';

class Navigation extends Component {

  state = {

  }

  componentDidMount = () =>{
    
  }

  render() {
    return (
        <div className='navigation-bar fade-in-menu'>         
            <div className='menu'>
                <div className='menu-icon'>
                    <Icon name='bars' size='big' inverted/>
                </div>               
            </div>         
        </div>
    );
  }
}

export default Navigation;
