import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  padding: 20px 40px;
  label {
    font-size: 18px;
    font-weight: 500;
    color: purple;
    margin-right: 20px;
  }
  input {
    margin-left: 10px;
    border: 2px solid purple;
    border-radius: 4px;
    outline: none;
    transition: border-color 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    :hover,
    :focus {
      border-color: #da5d05;
    }
  }
`;
