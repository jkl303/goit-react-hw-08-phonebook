import styled from 'styled-components';

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 40px;
  label {
    font-size: 18px;
    font-weight: 500;
    color: purple;
    margin-bottom: 20px;
    margin-left: auto;
  }
  input {
    margin-left: 16px;
    border: 2px solid purple;
    border-radius: 4px;
    outline: none;
    transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover,
    :focus {
      border-color: #da5d05;
    }
  }
  button {
    margin-left: auto;
    width: 100px;
  }
`;
