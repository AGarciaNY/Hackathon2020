import React from 'react';
import insideactivitys from './insidedata';
import styled from '@emotion/styled';

const Image = styled.img`
  position: absolute;
  left:20px;
  top:30px;
  height: 140px;
  width:180px;
`;

const Titel = styled.p`
  position: relitive;
  color: white;
  font-weight: bold;
  margin: 0;
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
  width: 40%;
  height: 200px;
  background: #353535;
  border-radius: 30px;
  position: relative ;

`;

const InformationHolder = styled.div`
  position: absolute;
  top: 30px;
  left: 220px;
  width: 300px;
`;

const Data = styled.p`
  position: relitive;
  color: white;
  font-size: 12px;
  text-indent: 20px;
  padding: 0 10px 0;
  width: 280px;
  margin:0;
`;

const Holdertwo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class Insideactivityslist extends React.Component {

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

export default Insideactivityslist;
