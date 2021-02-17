import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Main from './Main'

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
      <div className="App-header">
        <h1>Nasa Photo of the Day!</h1>
      </div>
      <div className="main">
        <Main data={data}/>
      </div>
    </div>
    
  );
}

export default App;
