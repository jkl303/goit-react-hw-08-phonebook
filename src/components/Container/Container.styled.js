import { mediaQueries } from 'styles/mediaQueries';

import styled from 'styled-components';

export const ContainerStyled = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 375px;

  ${mediaQueries('tablet')`max-width: 768px;
    padding-left: 40px;
    padding-right: 40px;`}

  ${mediaQueries('tablet')`max-width: 1280px;`}
`;
