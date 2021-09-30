import React from "react";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const CardElement = styled.div`
  max-width: 290px;
  display: flex;
  flex-flow: column;
  color: var(--color-black);
  background: var(--color-white);
  border-radius: 8px;
`;
const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  background: var(--color-black);
`;
const Info = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: column;
  ${gap("10px")}
`;
const Title = styled.h3`
  font-size: 20px;
`;
const TitleLink = styled.button`
  max-width: 100%;
  display: inline-block;
  font-weight: 900;
  text-align: start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: underline;
  &:hover{
    text-decoration: none;
  }
`;
const Deskription = styled.a`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
`;
const Buttons = styled.div`
  margin: 5px 0 0;
  display: flex;
  justify-content: space-between;
`;
const Link = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`;
const Button = styled.button`
  width: 120px;
  height: 35px;
  color: var(--color-gray);
  font-weight: 600;
  background: var(--color-white);
  border: 2px solid var(--color-gray);
  border-radius: 8px;
  transition: color 0.3s,
              border-color 0.3s;
  &:hover{
    color: var(--color-blue);
    border-color: var(--color-blue);
  }
`;

function Card ({name, image, link, deskription}) {
  return(
    <CardElement>
      <Image src={image} alt={name} />
      <Info>
        <Title><TitleLink>{name}</TitleLink></Title>
        <Deskription>{deskription}</Deskription>
        <Buttons>
          <Button><Link target="_blank" href={link}>Перейти</Link></Button>
        </Buttons>
      </Info>
    </CardElement>
  );
}

export default Card;