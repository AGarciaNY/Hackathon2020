import React,{Component} from 'react';
import styled from "@emotion/styled";


const Div = styled.div`
  position: relative;
  background-color: rgb(0, 0, 0);
`;

export default class Inside extends Component{
  render(){
    return(
      <Div>
        <h1>hi there</h1>
        <img 
          alt="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRESl-GVB-ZbWdQ9i8m3OETQVBP4w7zN7YYWAItBEVlKMwX8MnF&usqp=CAU" 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRESl-GVB-ZbWdQ9i8m3OETQVBP4w7zN7YYWAItBEVlKMwX8MnF&usqp=CAU"
          />
        <div>
          <div >
              <img alt="https://placekitten.com/640/400 "src="https://placekitten.com/200/150"/>
              <h1>hi there is just testing</h1>   
          </div>
        </div>
      </Div>
    )
  }
}