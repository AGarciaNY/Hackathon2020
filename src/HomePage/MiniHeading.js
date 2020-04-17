import React, { Component } from 'react';

class MiniHeading extends Component{
    render(){
        let heading={
            fontSize: "300%",
            textAlign: "left",
            marginLeft: "10vw",
            paddingTop: "100px"
        }

        return(
            <h1 style={heading}>{this.props.content}</h1>
        );
    }
}

export default MiniHeading;