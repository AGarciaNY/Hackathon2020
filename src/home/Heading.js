import React, { Component } from 'react';

class Heading extends Component{
    render(){
        let heading={
            fontSize: "500%",
        }

        return(
            <h1 style={heading}>{this.props.content}</h1>
        );
    }
}

export default Heading;