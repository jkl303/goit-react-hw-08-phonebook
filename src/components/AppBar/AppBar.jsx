import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <header>
      <Navigation />
      <p>Welcome {isLoggedIn ? user.name : 'stranger'}</p>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
