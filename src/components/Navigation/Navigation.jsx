import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
