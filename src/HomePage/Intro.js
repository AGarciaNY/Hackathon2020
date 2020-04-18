import React, { Component } from 'react';
import styled from '@emotion/styled';

import Heading from "./Heading";
import Description from './Description';
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
const Holder= styled.div`
  position: relative;
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default class Intro extends Component {
  render() {
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

    return (
      <div>
        <Holder>
          <Heading content="The fight against corona"/>
          <Description content="A week long Hackathon project made by [place names here later]. We seek to provide relief for those
              suffering through these tough times one way or another"/>
          <div className="container" style={container}>
            <ActivityBtn  onClick={()=> this.props.changepage('Inside')}>Indoor</ActivityBtn>
            <ActivityBtn  onClick={()=> this.props.changepage('Outside')}>Outdoor</ActivityBtn>
          </div>          
          <div style={numInfo}>
            <Stat content="number"/>
          </div>
        </Holder>
        <div style={info}>
          <MiniHeading content="About"/>
          <MiniDesc content="Life's hard, let's make it easier! Need stuff to do, just decide whether you want to do stuff inside
            or outdoors, we'll give you things to do! With the world the way it currently is, there is no better time to improve 
            yourself or help others. Don't waste your time and do something today!"/>
          <MiniHeading content="Team"/>
          <MiniDesc content="Our team is composed of Jason Alvarez, Aldair Garcia, Talia Jeffery and a big thanks to Ye Paing for his assistance 
          in this project!"/>
        </div>
      </div>
    );
  }
}

