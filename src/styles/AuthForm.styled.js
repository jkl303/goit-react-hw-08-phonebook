import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const AuthFormStyled = styled.form`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${mediaQueries('tablet')`
  margin-left: auto;
  width: 300px;`}

  label {
    width: 100%;
    font-size: 16px;
    color: var(--accent);
    margin-right: 20px;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0 10px;
    border: 2px solid var(--accent);
    border-radius: 4px;
    outline: none;
    color: var(--title);
    transition: border-color 250ms linear;
    :hover,
    :focus {
      border-color: var(--title);
    }
  }

  button {
    margin-top: 20px;
    margin-left: auto;
    width: 100px;
  }
`;
