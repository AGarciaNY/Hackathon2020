import React, { Component } from 'react';

class Stat extends Component{
    render(){
        let stat={
            fontSize: "110%",
            margin: "10px"
        }
        return(
            <div>  
                <h1 style={stat}>{this.props.content}</h1>
                <p>102</p>
            </div>
        );
    }
}

export default Stat;