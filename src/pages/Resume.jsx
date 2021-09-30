import React from "react";
import styled from "styled-components";

const Subtitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 10px 0;
`;
const List = styled.ul`
  list-style: disc;
`;

function Resume () {
  return(
    <div>
      <h1 className="title">Resume</h1>
      <Subtitle>Skills</Subtitle>
      <List type="1">
        <li>HTML</li>
        <li>CSS</li>
        <li>Java Script</li>
        <li>React</li>
      </List>
      <Subtitle>Курсы</Subtitle>
      <List>
        <li>IT Academy</li>
      </List>
      <Subtitle>Образование</Subtitle>
      <List type="1">
        <li>11 классов</li>
      </List>
      <Subtitle>Опыт работы</Subtitle>
      <List type="1">
        <li>Без опыта</li>
      </List>
    </div>
  );
}

export default Resume;