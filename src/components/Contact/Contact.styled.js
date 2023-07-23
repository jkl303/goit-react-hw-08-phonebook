import { FiTrash2 } from 'react-icons/fi';
import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const ContactStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  ${mediaQueries('tablet')`animation: scale 400ms linear;`}

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
    ${mediaQueries('desktop')`
    max-width: 550px;
    flex-direction: row;
    flex-grow: 1;
justify-content: space-between;`}

    h3 {
      color: var(--accent);
    }

    a {
      font-size: 18px;
      font-weight: 500;
      color: var(--title);
      transition: color 250ms linear;
      :hover,
      :focus {
        color: var(--accent);
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    :hover
    {cursor: pointer;
  }
`;

export const TrashIcon = styled(FiTrash2)`
  width: 24px;
  height: 24px;
  color: var(--title);
  :hover, :focus {color: var(--accent);}
`;
