import { Container } from 'components/Container/Container';
import { HomeStyled } from './Home.styled';
import { useAuth } from 'hooks/useAuth';
import { Contacts } from 'components/Contacts/Contacts';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <HomeStyled>
      <Container>
        {!isLoggedIn ? (
          <h1>Please, regist or log in to start working with your contacts!</h1>
        ) : (
          <Contacts />
        )}
      </Container>
    </HomeStyled>
  );
}
