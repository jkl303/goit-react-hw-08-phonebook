import { NavLinkStyled } from './NavLink.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/login">Login</NavLinkStyled>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
    </div>
  );
};
