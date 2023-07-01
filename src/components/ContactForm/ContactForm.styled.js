import styled from 'styled-components';

export const ContactFormStyled = styled.form`
  display: flex;
  margin: 20px 0;
  flex-direction: column;
  gap: 20px;

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
    margin-left: auto;
    width: 150px;
  }
`;
