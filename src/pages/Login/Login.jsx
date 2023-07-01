import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { AuthFormStyled } from '../../styles/AuthForm.styled';
import { selectError } from 'redux/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Container } from 'components/Container/Container';
import { ButtonStyled } from 'styles/Button.styled';

export default function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    error && Notify.failure('Wrong email or password!');
  };

  return (
    <section>
      <Container>
        <AuthFormStyled onSubmit={handleSubmit} autoComplete="off">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password</label>{' '}
          <input type="password" name="password" autoComplete="off" />
          <ButtonStyled type="submit">Log In</ButtonStyled>
        </AuthFormStyled>
      </Container>
    </section>
  );
}
