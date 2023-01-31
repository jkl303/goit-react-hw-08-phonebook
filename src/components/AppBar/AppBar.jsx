import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import { AppBarStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <AppBarStyled>
      <Navigation />
      <div>
        <p>Welcome, {isLoggedIn ? user.name : 'stranger'}</p>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </AppBarStyled>
  );
};
