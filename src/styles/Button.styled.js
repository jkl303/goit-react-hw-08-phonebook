import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: whitesmoke;
  padding: 6px 8px;
  max-height: 40px;
  font-size: 18px;
  line-height: 1;
  font-weight: 400;
  background-color: var(--accent);
  border-color: darkcyan;
  border-radius: 6px;
  text-align: center;
  transition: transform 250ms linear;
  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.03);
  }
`;
