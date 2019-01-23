import React, { Component } from 'react';
import './App.css';
import {Icon} from 'semantic-ui-react';

class Navigation extends Component {

  state = {
      
  }

  componentDidMount = () =>{
    
  }

  handleOpen = () => {
    if(this.state.menu!=='visible'){
        this.setState({
            menu: 'visible'
        })
    }
  }
  handleClose = () => {
    if(this.state.menu!=='hidden'){
        this.setState({
            menu: 'hidden'
        })
    }
  }

  render() {
    return (
        <div>
            <div className='navigation-bar'>         
                <div style={{marginLeft: '10px'}}>
                    <Icon name='bars' size='big' inverted onClick={this.handleOpen}/>
                </div>                  
            </div>
            <div id='menu' className={this.state.menu}>
                <Icon name='times' size='big' onClick={this.handleClose} className='menu-close'/>
            </div>
        </div>
    );
  }
}

export default Navigation;
