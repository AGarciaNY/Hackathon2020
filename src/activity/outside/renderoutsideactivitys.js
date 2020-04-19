import React from 'react';
import insideactivitys from './outsidedata';
import styled from '@emotion/styled';

const Image = styled.img`
  position: absolute;
  left:20px;
  top:30px;
  height: 140px;
  width:180px;
`;

const Titel = styled.h1`
  color: white;
  font-weight: bold;
  margin: 0;
  font-size:18px;
  text-align: center;
  `;


const Button1 = styled.a`
  position: absolute;
  right: 50px;
  bottom: 10px;
  z-index: 2;
  background-color: silver;
  border-radius: 20px;
  cursor: pointer;
  text-decoration:none;
  text-align: center;
  padding:0 10px 0 10px;
`;

const Holder =styled.div`
  margin: 30px;
  width: 650px;
  height: 200px;
  background: #353535;
  border-radius: 30px;
  position: relative ;
  @media only screen and (max-width: 700px) {
    height: 450px;
    width:400px;
    img {
      height:120px;
      width:140px;
      top:20px;
      left:30%;
    }
    div {
      position: relative;
      left:10px;
      top:160px;
      width:370px;
      h1{
        font-size:18px;
      }
      p{
        font-size:16px;
      }
    }
  }
`;

const InformationHolder = styled.div`
  position: relative;
  top: 30px;
  left: 220px;
  margin:0 10px 0;
  width:400px;
`;

const Data = styled.p`
  position: relative;
  top:10px;
  color: white;
  font-size: 12px;
  text-indent: 20px;
  padding: 0 10px 0;
  margin:0;
`;

const Holdertwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Outsideactivityslist extends React.Component {

  render() {

    let namesLiList = [];

    for (let i in insideactivitys) {
      let nameString = insideactivitys[i].id;
      let link=insideactivitys[i].link;
      let infodata=insideactivitys[i].info;
      let imagelink=insideactivitys[i].image;

      console.log(imagelink);

      namesLiList.push(
        <Holder key={i}>
          <Image alt={imagelink} src={imagelink} />
          <InformationHolder> 
            <Titel>{nameString}</Titel>
            <Data>{infodata}</Data>
          </InformationHolder>
          <Button1 href={link} target="_blank">Click Here for more information</Button1>
        </Holder>
      );
    }

    return(
      <Holdertwo >
        {namesLiList}
      </Holdertwo>
    );
  }
}

export default Outsideactivityslist;
