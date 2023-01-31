import { useAuth } from 'components/hooks/useAuth';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {isLoggedIn ? (
        <Link to="/contacts">Contacts</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
    </nav>
  );
};
