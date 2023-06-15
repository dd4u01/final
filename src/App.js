import './App.css';
import styled from "styled-components"
import {useState} from "react";

const bgColor =(props)=> styled.div`
  width: 100vw;
  height: 100vw;
`;

function App() {
  const [text, setText] = useState('색깔 값을 입력해주세요');

  const onchangeText =(e) =>{
    setText(e.target.value);
    console.log(e.target.value);
  }
  return (
      <bgColor style={{backgroundColor:"red"}}>
        <h3>Background Color : {text}</h3><input onChange = {onchangeText}/>
      </bgColor>
  );
};



export default App;
