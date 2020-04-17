import React, { Component } from 'react';

class ActivityBtn extends Component{
    render(){
        let btn={
            fontSize: "100%",
            minWidth: "100px",
            borderRadius: "20px",
            borderWidth: "2px",
            borderColor: "blue",
            backgroundColor: "black",
            color: "white",
            padding: "5px 10px"
        }

        return(
            <button style={btn}>{this.props.content}</button>
        );
    }
}

export default ActivityBtn;