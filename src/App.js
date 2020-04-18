import React,{Component} from 'react';

import Outside from './activity/outside/outside';
import Nav from './nav/nav';
import Inside from './activity/inside/inside';
import Intro from './home/home';
import Census from './census/census';
export default class App extends Component{
  
  constructor() {
    super();
    this.state = {
      pickapage: 'home',
    }
  }

  pickAPage = (page) => {
    console.log('clicked')
    this.setState({
      pickapage: page
    });
    console.log(this.state.pickapage)
  }
  render(){
    if(this.state.pickapage === 'home'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Intro changepage={(page)=> this.pickAPage(page)}/>
        </div>
      )
    }
    
    if(this.state.pickapage === 'Outside'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Outside />
        </div>
      )
    }
    
    if(this.state.pickapage === 'Inside'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Inside />
        </div>
      )
    }
    if(this.state.pickapage === 'Census'){
      return (
        <div>
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Census/>
        </div>
      )
    }
  }
}

/////////////////////////////////////////////////////////////////////////////
