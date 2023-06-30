import styled from 'styled-components';
import { FiHome } from 'react-icons/fi';

export const HeaderStyled = styled.header`
  align-items: center;

  div {
    display: flex;
    margin-left: auto;
    align-items: center;
  }

  span {
    margin-right: 20px;
    font-size: 18px;
    font-weight: 500;
    color: var(--title);
    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  a {
    padding: 20px 0;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: var(--accent);
  }
`;

export const HomeIcon = styled(FiHome)`
  width: 25px;
  height: 25px;
  vertical-align: bottom;
`;
