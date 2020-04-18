import React, { Component } from 'react';

class ActivityBtn extends Component{
    render(){
        let btn={
            fontSize: "100%",
            minWidth: "100px",
            border: "2px solid blue",
            borderRadius: "20px",
            backgroundColor: "transparent",
            color: "white",
            padding: "5px 10px"
        }

        return(
            <button style={btn}>{this.props.content}</button>
        );
    }
}

export default ActivityBtn;