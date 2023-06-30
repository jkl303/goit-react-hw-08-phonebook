import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  margin-left: 20px;
  &.active {
    color: #da5d05;
  }
`;
