import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Main from './Main'
import styled from 'styled-components'
import image from './logo192.png'

const Splash = styled.div`
  opacity: 1;
  transition-property: opacity;
  transition: 1s ease-out;
  text-align: center;
`;

const Scroll = styled.h3`
  padding: 10px;
  font-size: 1.5rem;
`;

function App() {
  const dataUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'; //https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(dataUrl) 
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err);
    })}, [])
 
  return (
    <div className="App">
      
      <Splash className="App-header">
        <img className="App-logo" src={image}></img>
        <h1>Nasa Photo of the Day!</h1>
        <Scroll>v v v  Scroll down for today's NASA photo! v v v</Scroll>
      </Splash>
      <div className="main">
        <Main data={data}/>
      </div>
    </div>
    
  );
}

export default App;
