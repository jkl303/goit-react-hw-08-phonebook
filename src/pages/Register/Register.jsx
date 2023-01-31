import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';
import { RegisterFormStyled } from './RegisterForm.styled';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
        <label>
          Username
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </RegisterFormStyled>
    </>
  );
}
