import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  height: 48px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ color }) => color || '#000'};

  &:hover {
    color: #6b7280;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 16px;
  }
`;

const H1 = styled.h1`
  font-size: 18px;
  font-weight: 600;
`;

const Header = () => (
  <StyledHeader>
    <H1>
      <StyledLink to="/">Math Magician</StyledLink>
    </H1>
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/calculator">Calculator</StyledLink>
      <StyledLink to="/quote">Quote</StyledLink>
    </Nav>
  </StyledHeader>
);

export default Header;
