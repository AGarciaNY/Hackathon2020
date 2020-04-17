import React,{Component} from 'react';
import Inside from './activity/inside';
import Nav from './nav/nav';
import Intro from './HomePage/Intro';

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
        <Intro/>
      </div>
    );
  }
}

