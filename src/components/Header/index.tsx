import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { logOut } from '../../store/ducks/auth/actions';
import { addToast } from '../../store/ducks/toast/actions';

import { Container, DropDown } from './styles';

const Header = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { isLogged } = useSelector((state: ApplicationState) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePress = () => {
    setHidden(oldState => !oldState);
  };

  const handleLogOff = () => {
    if (isLogged) {
      dispatch(logOut());
      dispatch(addToast({ title: 'Até logo!', type: 'success' }));
    } else {
      history.push('/signin');
    }
  };

  useEffect(() => {
    if (!isLogged) {
      history.push('/signin');
    }
  }, [isLogged, history]);

  return (
    <Container>
      <h2>South Tickets</h2>
      <button type="button" onClick={handlePress}>
        Menu
      </button>
      <DropDown isShowing={hidden}>
        <p>Aodnai</p>
        <p>Aodnai</p>
        <p>Aodnai</p>
        <button type="button" onClick={handleLogOff}>
          {isLogged ? 'Sair' : 'Entrar'}
        </button>
      </DropDown>
    </Container>
  );
};

export default Header;
