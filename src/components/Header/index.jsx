import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { gap } from "../../styles/mixins";

const HeaderElement = styled.header`
  height: 60px;
  background: var(--color-black);
  border-bottom: 1px solid var(--color-blue);
  box-shadow: 0 0 8px var(--color-blue);
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${gap("10px")}
`;
const Logo = styled.h2`
  font-size: 24px;
  font-weight: 900;
  &>a{
    color: var(--color-blue);
  }
`;
const Navigation = styled.nav`

`;
const Menu = styled.ul`
  display: flex;
  ${gap("20px")}
`;
const Item = styled.li`
  &>a{
    color: var(--color-white);
    &:hover{
      text-decoration: underline;
    }
  }
`;

function Header () {
  return(
    <HeaderElement>
      <Container className="container">
        <Logo><NavLink to="/">Maksim Bazhenov</NavLink></Logo>
        <Navigation>
          <Menu>
            <Item><NavLink to="/">Home</NavLink></Item>
            <Item><NavLink to="/about">About</NavLink></Item>
            <Item><NavLink to="/resume">Resume</NavLink></Item>
            <Item><NavLink to="/portfolio">Portfolio</NavLink></Item>
            {/* <Item><NavLink to="/contacts">Contacts</NavLink></Item> */}
          </Menu>
        </Navigation>
      </Container>
    </HeaderElement>
  );
}

export default Header;