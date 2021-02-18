import React from "react";
import "./App.css";
import styled from 'styled-components';

const Content = styled.div`
  position: center;
  transition: 1s ease-in-out;
  &:hover {
    color: white;
  }
`;

const PhotoTitle = styled.h2`
  font-size: 2rem;
`;

const Info = styled.p`
  margin: 20px 90px;
`;

function Main({ data }) {
    return (
        <Content className="main">
        <PhotoTitle>{data.title}</PhotoTitle>
        <div className="image">
          <img src={data.url} alt="randomized from nasa database"></img>
        </div>
        <Info>{data.explanation}</Info>
        <p style={{color: 'white'}}>Photo copyright: {data.copyright}</p>
      </Content>
    )
}

export default Main;