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
  @media only screen and (max-width: 700px) {
    position: static;
    height:150px;
    div{
      position:relative;
      top:-20px;
    }
  }
`;

const LogoStyle = styled.img`
  position:relative;
  top:10px;
  left:10px;
`;

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
  top:35px;
  right: 50px;
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
  right: -70px;
  top:0;
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