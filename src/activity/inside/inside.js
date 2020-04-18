import React,{Component} from 'react';
import styled from "@emotion/styled";
import Virus from '../../Icons/Virus.png';
import Insideactivityslist from './renderinsideactivitys';

const Div = styled.div`
  position: relative;
  background-color: rgb(0, 0, 0);
`;
const Image = styled.img`
  width:200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const Header = styled.h1`
  color:red;
  text-align: center;
  margin: 0;
  padding :10px 0 0 0;
`;
export default class Inside extends Component{
  render(){
    return(
      <Div>
        <Header>things to do inside</Header>
        <Image 
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRESl-GVB-ZbWdQ9i8m3OETQVBP4w7zN7YYWAItBEVlKMwX8MnF&usqp=CAU" 
          src={Virus}
          />
        {/* <div>
          <div >
              <img alt="https://placekitten.com/640/400 "src="https://placekitten.com/200/150"/>
              <h1>hi there is just testing</h1>   
          </div>
        </div> */}
        <Insideactivityslist/>
      </Div>
    )
  }
}