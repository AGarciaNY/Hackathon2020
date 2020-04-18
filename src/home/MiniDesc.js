import React, { Component } from 'react';

class MiniDesc extends Component{
    render(){
        let des={
            fontSize: "200%",
            maxWidth: "100vw",
            marginLeft: "10vw",
            paddingLeft: "40px",
            paddingRight: "30px",
            textAlign: "left"
        }

        return(
            <h1 style={des}>{this.props.content}</h1>
        );
    }
}

export default MiniDesc;