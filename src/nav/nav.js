import React,{Component} from 'react';
import styled from '@emotion/styled';
import Virus from '../Icons/Virus.png';

const Navcontainer = styled("header")`
  position: sticky;
  top: 0;
  z-index: 10;
  border:2px solid blue;
  border-radius: 4px;

  height: 100px;
  background-color: black;
  color: white;
  display: flex;
  @media only screen and (max-width: 1000px) {
    position: static;
    height:150px;
  }
  @media only screen and (max-width: 600px) {
    position: static;
    height:200px;
  }
`;

const LogoStyle = styled.img`
  position:absolute;
  top:10px;
  left:10px;
  @media only screen and (max-width: 1000px) {
    left:75px;
  }
`;

const NameHolder=styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px
`;
const MyName = styled.h1`
  position:absolute;
  top:25px;
  left:55px;
  margin: 0 0 0 40px;
  font-size: 30px
  width: 200px;
  @media only screen and (max-width: 1000px) {
    left:-10px;
    top:85px;
  }
`;

const LinkHolder = styled.div`
  position: absolute;
  top:35px;
  right: 50px;
  @media only screen and (max-width: 1000px) {
    top:100px;
  }
  @media only screen and (max-width: 600px) {
    top:150px;
    left:100px;
  }
`;
const Links = styled.button`
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
  height:50px;
  width: 50px;
  position: absolute;
  top:0;
  right:-70px;
`;

const DropButton = styled.div`
  color:white;
  p{  
    font-size:16px;
    margin:0;
    
  }
  &:hover{
    button{
      visibility: visible;
    }
  }
`;
const SecondHolder =styled.div`
position:relative;
left:-100px;
`;

const Audio = styled.audio`
  z-index: 20;
  position: absolute;
  left:30%;
  top:20px;
  @media only screen and (max-width: 1000px) {
    left:200px;
  }
`;

const TextFont = styled.button`
  visibility: hidden;
  position:relative;
  left:-30px;
  background:silver;
  width: 140px;
  height:30px;
  border-radius: 20px;
  color:black;
  font-size:15px;

`;



export default class Nav extends Component{
  constructor() {
    super();
    this.state = {
      play: 'play',
    }
  }
  musicplay=(pon)=>{
    this.setState({
      play:pon
    });
  }
  render(){

    return(
        
        <Navcontainer>
          <NameHolder>
            <LogoStyle className="App-logo" src={Virus} alt={Virus}/>
            <MyName>Anti Covid</MyName>
          </NameHolder>
            <Audio controls autoplay loop>
              <source src="space.mp3" type="audio/mp3"/>  
            </Audio>
          <LinkHolder>
            <SecondHolder>
              <Links onClick={() => this.props.changepage('home')}>Home</Links>
              <Links onClick={() => this.props.changepage('Inside')}>Inside</Links>
              <Links onClick={() => this.props.changepage('Outside')}>Outside</Links>
              <DropDown>
                <DropButton>
                  <p>Dropdown</p>
                  <TextFont onClick={() => this.props.changepage('Census')}>Census</TextFont>
                </DropButton>
              </DropDown>
            </SecondHolder>
          </LinkHolder>
        </Navcontainer>
    );
  }

}