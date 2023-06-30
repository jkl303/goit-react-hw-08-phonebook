import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { HeaderStyled, HomeIcon } from './Header.styled';
import { Container } from 'components/Container/Container';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { ButtonStyled } from 'styles/Button.styled';

export const AppBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  return (
    <HeaderStyled>
      <Container>
        <Link to="/">
          <HomeIcon />
        </Link>
        <div>
          <span>Welcome {isLoggedIn && user.name}</span>
          {isLoggedIn ? (
            <ButtonStyled type="button" onClick={() => dispatch(logOut())}>
              Logout
            </ButtonStyled>
          ) : (
            <AuthNav />
          )}
        </div>
      </Container>
    </HeaderStyled>
  );
};
