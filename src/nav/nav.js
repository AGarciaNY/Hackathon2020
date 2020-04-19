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
  padding-left:30px;
  position:relative;
  left:30px;
  height:50px;
  width: 50px;

`;

const DropButton = styled.div`

  position:relative;
  left:-30px;
  color:white;
  width: 80px;
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

const Audio = styled.audio`
  position:relative;
  left:-200px;
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

const Right=styled.li`
  list-style-type:none;
  float:right;
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
        <img className="App-logo" src={Virus} alt={Virus}style={logoStyle}/>
        <MyName>Antai Covid</MyName>
      </NameHolder>
      <LinkHolder>
        <Right>
          <DropDown>
            <DropButton>
              <p>Dropdown</p>
              <TextFont onClick={() => this.props.changepage('Census')}>Census</TextFont>
              
            </DropButton>
            
          </DropDown>
        </Right>
        <Audio controls autoplay loop>
                <source src="space.mp3" type="audio/mp3"/>  
              </Audio>
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