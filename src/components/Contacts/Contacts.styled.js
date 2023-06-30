import styled from 'styled-components';
import { mediaQueries } from 'styles/mediaQueries';

export const ContactsStyled = styled.div`
  ${mediaQueries('tablet')`display: flex;
  justify-content: space-between;
  div:nth-child(2) {flex-grow: 1;
max-width: 50%;}
  `}
  ${mediaQueries('desktop')`div:nth-child(2) {max-width: 65%;}`}
`;
