import React,{Component} from 'react';
import styled from '@emotion/styled';
import Virus from '../Icons/Virus.png';

const Navcontainer = styled("header")`
  position: sticky;
  top: 0;
  z-index: 10;
  border:2px solid blue;
  border-radius: 4px;

  height: 70px;
  background-color: black;
  color: white;
  padding-top: 30px;
  display: flex;
`;

const logoStyle={
  padding: "10px",
}

const NameHolder=styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px
`;
const MyName = styled.h1`
  margin: 0 0 0 40px;
  font-size: 30px
  width: 200px;
`;

const LinkHolder = styled.div`
  position: absolute;
  right: 0;
  display: block;
  padding-top: 10px;
  padding-right: 70px;
`;
const Links = styled.button`
  float: Right;
  background: transparent;
  border: 0;
  text-decoration: none;
  color: white;
  padding-left: 30px;
  font-size: 16px;
  
  &:hover{
    font-size: 18px;
  }
`;

const DropDown = styled.div`
  padding-left: 30px;
  
  &:hover div{
    display: block;
  }
`;

const DropButton = styled.button`
  background-color: transparent;
  padding: 0;
  border: none;
  color:white;
  min-width: 140px;
  font-size:16px;
  margin-bottom:40px;
  &:hover{
    font-size:18px;
  }
`;

const DropdownHolder=styled.div`
  display: none;
  background:transparent;
  min-width: 140px;
  border-radius: 20px;
  padding:8px 0 0;
`;

const TextFont = styled.button`
  position:absolute;
  display: block;
  background:silver;
  width: 140px;
  height:30px;
  z-index: 2;
  border-radius: 20px;
  text-decoration: none;
  color:white;
  font-size:15px;
  top:-40px;

  &:hover{
    
    top:-45px;
    left:-10px;
    width: 160px;
    height:40px;
    font-size:18px;
  }
`;

const Right=styled.li`
  list-style-type:none;
  float:right;
`;

const Text = styled.div`
  width: 140px;
  height:30px;
  margin:3px 0;
  position:relative;
  z-index:2;

  &:hover{
    margin:5px 0;
    
  }
`;

export default class Nav extends Component{

  render(){

    return(

    <Navcontainer>
      <NameHolder>
        <img className="App-logo" src={Virus} style={logoStyle}/>
        <MyName>Antai Covid</MyName>
      </NameHolder>
      <LinkHolder>
        <Right>
          <DropDown>
            <DropButton>Dropdown</DropButton>
            <DropdownHolder>
              <Text><TextFont onClick={() => this.props.changepage('Census')}>Census</TextFont></Text>
            </DropdownHolder>
          </DropDown>
        </Right>
        <Right>
          <Links onClick={() => this.props.changepage('Outside')}>Outside</Links>
          <Links onClick={() => this.props.changepage('Inside')}>Inside</Links>
          <Links onClick={() => this.props.changepage('home')}>Home</Links>
        </Right>
      </LinkHolder>
    </Navcontainer>
    );
  }

}