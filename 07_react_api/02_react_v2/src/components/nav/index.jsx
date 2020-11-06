import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  font-family: Lato;
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <NavMenu>
      <NavMenuItem>
        <NavLink exact to="/posts" activeClassName="active">
          Posts
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/comments" activeClassName="active">
          Comments
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/ref" activeClassName="active">
          useRef
        </NavLink>
      </NavMenuItem>
      <NavMenuItem>
        <NavLink to="/side" activeClassName="active">
          SideEffects
        </NavLink>
      </NavMenuItem>
    </NavMenu>
  </StyledNav>
);

export default Nav;
