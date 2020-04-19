import React, { Component } from 'react';
import styled from '@emotion/styled';

import Heading from "./Heading";
import Description from './Description';

import Jason from "../Icons/JsIcon.png";
import Aldair from "../Icons/AGIcon.png";
import Talia from "../Icons/TJIcon.png";

import MiniHeading from './MiniHeading';
import MiniDesc from './MiniDesc';
import Stat from './Stat';

const ActivityBtn = styled.button`
  fontsize: 100%;
  min-width: 100px;
  border:2px solid blue;
  border-radius: 20px;
  background-color: transparent;
  color: white;
  padding: 5px 10px;
`;
class Intro extends Component {
  render() {
    let styles={
      position: "relative",
      backgroundColor: "black",
      color: "white",
      height: "90vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }

    let container={
      marginTop: "5vh",
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "80vw",
      minWidth: "250px"
    }

    let info={
      color: "white",
      backgroundColor: "#3b3c3c",
      paddingBottom: "50px"
    }

    let numInfo={
      color: "white"
    }

    let containerStyle={
      display: "flex",
      alignItems: "center",
      marginLeft: "30%",
    }

    let imgContainer={ 
      width: "100px",
      height: "100px",
      paddingBottom: "100px",
      marginRight: "0px",
      margin: "3%",
    }

    let profStyle={
      borderRadius: "50%",
      width: "100px",
      height: "100px",
      backgroundColor: "white",
      WebkitBoxShadow: "10px 10px 60px 12px rgba(0,0,0,0.75)",
    }

    let profImg={
      width: "100px",
      height: "100px",
      borderRadius: "50%",
    }

    return (
      <div>
        <div style={styles}>
          <Heading content="The fight against corona"/>
          <Description content="A week long Hackathon project made by Jason Alvarez, Aldair Garcia, Talia Jeffery. We seek to provide relief for those
              suffering through these tough times one way or another. We hope you find something that can better your day through our site!"/>
          <div className="container" style={container}>
            <ActivityBtn  onClick={()=> this.props.changepage('Inside')}>Indoor</ActivityBtn>
            <ActivityBtn  onClick={()=> this.props.changepage('Outside')}>Outdoor</ActivityBtn>
          </div>          
          <div style={numInfo}>
            <Stat content="number"/>
          </div>
        </div>
        <div style={info}>
          <MiniHeading content="About"/>
          <MiniDesc content="Life's hard, let's make it easier! Need stuff to do, just decide whether you want to do stuff inside
            or outdoors, we'll give you things to do! With the world the way it currently is, there is no better time to improve 
            yourself or help others. Don't waste your time and do something today!"/>
          <MiniHeading content="Team"/>
          <MiniDesc content="Our team is composed of Jason Alvarez, Aldair Garcia, Talia Jeffery and a big thanks to Ye Paing for his assistance 
          in this project!"/>
          <div style={containerStyle}>
            
            <div style={imgContainer}>
              <div style={profStyle}>
                <img style={profImg} src={Jason} alt="Jason"/>
                <title>Jason Alvarez</title>
              </div>
            </div>
            <div style={imgContainer}>
              <div style={profStyle}>
                <img style={profImg} src={Aldair} alt="Aldair"/>
                <title>Aldair Garcia</title>
              </div>
            </div>
            <div style={imgContainer}>
              <div style={profStyle}>
                <img style={profImg} src={Talia} alt="Talia"/>
                <title>Talia Jeffery</title>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Intro;