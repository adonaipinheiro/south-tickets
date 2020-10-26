import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Types
import { ApplicationState } from '../../store';
import { logIn } from '../../store/ducks/auth/actions';

// Styles
import { Container } from './styles';

const SignIn = () => {
  const auth = useSelector((state: ApplicationState) => state.auth);
  const dispatch = useDispatch();

  return (
    <Container>
      {auth.email}
      <button type="button" onClick={() => dispatch(logIn('teste', 'senha'))}>Redux</button>
    </Container>
  );
};

export default SignIn;
