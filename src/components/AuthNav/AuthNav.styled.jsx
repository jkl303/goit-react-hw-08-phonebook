import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin-left: 20px;
  &.active {
    color: #da5d05;
  }
`;
