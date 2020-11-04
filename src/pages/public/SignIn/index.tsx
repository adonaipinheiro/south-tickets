import React, { FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Types
import { ApplicationState } from '../../../store';
import { logIn } from '../../../store/ducks/auth/actions';

// Styles
import {
  Container,
  Content,
  InfoArea,
  LoginArea,
  Form,
  FaTicketAlt,
  FormLink,
} from './styles';

// Images
import eventInfoOrange from '../../../assets/SignIn/events_info_orange.svg';

// Actions
import { addToast } from '../../../store/ducks/toast/actions';

// Components
import LoadingPage from '../../../components/LoadingPage';

const SignIn = () => {
  const emailField = useRef<HTMLInputElement>(null);
  const passField = useRef<HTMLInputElement>(null);
  const { isLogged } = useSelector((state: ApplicationState) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const signIn = async () => {
    dispatch(
      logIn(emailField.current?.value || '', passField.current?.value || ''),
    );
  };

  const checkEmailAndPass = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (emailField.current?.value === '' || passField.current?.value === '') {
      dispatch(
        addToast({
          title: 'Campos vazios',
          description: 'Por favor verifique os campos digitados',
          type: 'info',
        }),
      );
    } else if (
      passField.current?.value !== undefined
        ? passField.current?.value.length < 6
        : false
    ) {
      dispatch(
        addToast({
          title: 'A senha deve conter pelo menos 6 dígitos',
          description: 'Por favor verifique os campos digitados',
          type: 'info',
        }),
      );
    } else {
      signIn();
    }
  };

  useEffect(() => {
    if (isLogged) {
      history.replace('/');
    }
  }, [isLogged, history]);

  if (isLogged) {
    return <LoadingPage />;
  }

  return (
    <Container>
      <Content>
        <InfoArea>
          <div className="infoTextArea">
            <div className="separator" />
            <h2>O melhor lugar para você comprar seus ingressos!</h2>
          </div>
          <img alt="South Tickets" src={eventInfoOrange} />
        </InfoArea>
        <LoginArea>
          <FaTicketAlt />
          <h1>Bem-vindo(a)</h1>
          <span className="spanWelcome">
            Faça seu login e desfrute da plataforma
          </span>
          <Form onSubmit={checkEmailAndPass}>
            <input
              ref={emailField}
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
            <input
              ref={passField}
              type="password"
              name="password"
              id="password"
              placeholder="Digite sua senha"
            />
            <FormLink to="/signup">Esqueceu sua senha? Clique aqui</FormLink>

            <button type="submit">Entrar</button>
          </Form>
        </LoginArea>
      </Content>
    </Container>
  );
};

export default SignIn;
