import React, { Component } from 'react';

function readOutLoud(message){
    console.log(message);
    let speech = new SpeechSynthesisUtterance();
    console.log(speech);
    speech.text = message;

    if(message === "home"){
        speech.text = "Hello and welcome to Anti Covid. We hope to provide our users a comfortable experience in these difficult times. We provide you with a variety of resources about the outside world and what you can do while in quarantine. We hope you enjoy our service!"
    } else if(message === "Outside"){
        speech.text = "This page is what those outside are doing. If you are interested in one of the articles click on the button under the articles description and it will take you to the article. "
    } else if(message === "Inside"){
        speech.text = "This page is about what you could be doing while stuck in quarantine, whether that is looking for books to read or news. If you are interested in one of the pieces of information click on the button located beneath the description and it will take you to it's related site."
    }
  
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
  
    window.speechSynthesis.speak(speech);
  }

class HelpBtn extends Component{
    constructor(props){
        super(props);
        this.state={
            help: "This is a test. Do not panic. This is a test."
        }
    }

    render(){
        let btn={
            position: "fixed",
            right: "30px",
            bottom: "30px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "2px solid gray",
            backgroundColor: "black",
            color: "white"
        }

        return(
            <button style={btn} onClick={()=>{readOutLoud(this.props.page)}}>
                Help
            </button>
        );
    }
}

export default HelpBtn;