import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const FilterStyled = styled.section`
  margin: 20px 0 10px;

  label {
    width: 100%;
    font-size: 16px;
    color: var(--accent);
  }

  input {
    width: 100%;
    height: 32px;
    border: 2px solid var(--accent);
    border-radius: 4px;
    outline: none;
    color: var(--title);
    transition: border-color 250ms linear;
    ${mediaQueries('tablet')`
    display: block;
    width: 250px;`}

    :hover, :focus {
      border-color: var(--title);
    }
  }
`;
