import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import portfolio from "../portfolio";

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

function Portfolio () {
  return(
    <div>
      <h1 className="title">Portfolio</h1>
      <List>
        {
          portfolio.map((project, index) => {
            return <Card key={index} {...project}/>
          })
        }
      </List>
    </div>
  );
}

export default Portfolio;