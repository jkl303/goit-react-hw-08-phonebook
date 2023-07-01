import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { ButtonStyled } from 'styles/Button.styled';
import { AuthFormStyled } from 'styles/AuthForm.styled';
import { selectError } from 'redux/auth/selectors';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectError);

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
    Notify.info('Verification link send to your email');
    navigate('/login', { replace: true });
    error && Notify.failure(error);
  };

  return (
    <section>
      <Container>
        <AuthFormStyled onSubmit={handleSubmit} autoComplete="off">
          <label>
            Username
            <input type="text" name="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="off"
              required
            />
          </label>
          <ButtonStyled type="submit">Register</ButtonStyled>
        </AuthFormStyled>
      </Container>
    </section>
  );
}
