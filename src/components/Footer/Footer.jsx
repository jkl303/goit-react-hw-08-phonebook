import { Container } from 'components/Container/Container';
import {
  FooterStyled,
  GitHubIcon,
  LinkedInIcon,
  SocialListStyled,
  SocialsStyled,
  TelegramIcon,
} from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <SocialsStyled>
          <h2>Author's socials</h2>
          <SocialListStyled>
            <li>
              <a href="https://www.linkedin.com/in/vladyslav-zoz-15a8ba1a8/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a href="https://t.me/jkl303">
                <TelegramIcon />
              </a>
            </li>
            <li>
              <a href="https://github.com/jkl303">
                <GitHubIcon />
              </a>
            </li>
          </SocialListStyled>
        </SocialsStyled>
      </Container>
    </FooterStyled>
  );
};
