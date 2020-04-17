import React, { Component } from 'react';
import Heading from "./Heading";
import Description from './Description';
import ActivityBtn from './ActivityBtn';

class Intro extends Component {
  render() {
    let styles={
      position: "relative",
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }

    let container={
      marginTop: "50px",
      display: "flex",
      justifyContent: "space-between",
      maxWidth: "80vw",
      minWidth: "250px"
    }

    return (
      <div style={styles}>
        <Heading content="The fight against corona"/>
        <Description content="A week long Hackathon project made by [place names here later]. We seek to provide relief for those
            suffering through these tough times one way or another"/>
        <div class="container" style={container}>
          <ActivityBtn content="Indoor"/>
          <ActivityBtn content="Outdoor"/>
        </div>
      </div>
    );
  }
}

export default Intro;