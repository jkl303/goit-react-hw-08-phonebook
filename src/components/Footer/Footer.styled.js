import styled from 'styled-components';
import { BsGithub, BsTelegram, BsLinkedin } from 'react-icons/bs';
import { mediaQueries } from 'styles/mediaQueries';

export const FooterStyled = styled.footer`
  background-color: #e7ddfd;
  padding: 20px 0;
  border-top: 2px solid var(--title);
`;

export const SocialsStyled = styled.div`
  display: flex;
  width: 130px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  ${mediaQueries('tablet')`margin-right: 75px;`}

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  a {
    color: var(--accent);
  }
`;

export const SocialListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const GitHubIcon = styled(BsGithub)`
  width: 24px;
  height: 24px;
`;

export const TelegramIcon = styled(BsTelegram)`
  width: 24px;
  height: 24px;
`;

export const LinkedInIcon = styled(BsLinkedin)`
  width: 24px;
  height: 24px;
`;
