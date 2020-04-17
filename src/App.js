import React,{Component} from 'react';
import Outside from './activity/outside/outside';
import Nav from './nav/nav';
import Intro from './homepage/Intro';

export default class App extends Component{
  
  constructor() {
    super();
    this.state = {
      pickapage: 'home',
    }
  }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <Outside/>
      </div>
    );
  }
}

