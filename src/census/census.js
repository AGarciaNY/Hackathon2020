import React,{Component} from 'react';
import styled from '@emotion/styled';

const Button = styled.a`
  font-size:20px;
  background-color: Black;
  border:2px solid red;
  border-radius: 20px;
  cursor: pointer;
  text-decoration:none;
  text-align: center;
  padding:0 10px 0 10px;
  color:white;
  position:relative;
  &:active{
    font-size:18px;
    left:5px;
  }
  `;

const Holder =styled.div`
  background: linear-gradient(to bottom,black,rgb(182, 174, 174),silver);
  padding:50px 0 50px 0;
  position:relative;
`;
const Textholder =styled.div`
  position:relative;
  padding:40px;
`;
const Points =styled.div`
  position:relative; 
  left:30px;
`;
export default class Census extends Component {
  render() {
    return (
      <Holder>
        <Textholder>
        <h1>Why You Should Fill Out The Censes</h1>
        <Points>
        <p>It's something that affects everyone in the community</p>
        <p>It gives money to the community for schools and other community based institutionss</p>
        <p>It will benifit us all</p>
        <h3>It's safe.<b> It does not ask for your status</b></h3>
        </Points>
        <Button href="https://my2020census.gov/" target="_blank">Click here to start</Button>
        </Textholder>
      </Holder>
    );
  }
}
