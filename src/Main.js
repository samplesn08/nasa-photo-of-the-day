import React from "react";
import "./App.css";

function Main({ data }) {
    return (
        <div className="main">
        <h2>{data.title}</h2>
        <div className="image">
          <img src={data.url} alt="randomized from nasa database"></img>
        </div>
        <p>{data.explanation}</p>
        <p>Photo copyright: {data.copyright}</p>
      </div>
    )
}

export default Main;