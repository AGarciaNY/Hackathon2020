import React, { Component } from 'react';

class Description extends Component{
    render(){
        let des={
            fontSize: "100%",
            maxWidth: "50vw",
            paddingTop: "30px"
        }

        return(
            <h1 style={des}>{this.props.content}</h1>
        );
    }
}

export default Description;