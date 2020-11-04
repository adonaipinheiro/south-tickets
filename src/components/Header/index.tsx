import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { ApplicationState } from '../../store';
import { logOut } from '../../store/ducks/auth/actions';

import { Container, DropDown, FaUser, FaCalendar, FaTicketAlt } from './styles';

const Header = () => {
  const [hidden, setHidden] = useState<boolean>(false);
  const { isLogged } = useSelector((state: ApplicationState) => state.auth);
  const { name } = useSelector((state: ApplicationState) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePress = () => {
    setHidden(oldState => !oldState);
  };

  const handleLogOff = () => {
    if (isLogged) {
      dispatch(logOut());
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
      <Link to="/" className="logo">
        South Tickets
      </Link>
      <div className="userInfo">
        <span>{name}</span>
        <button type="button" onClick={handlePress}>
          <FaUser />
        </button>
      </div>
      <DropDown isShowing={hidden}>
        <Link to={`/profile/${name}`}>
          <FaUser />
          Meu Perfil
        </Link>
        <Link to="/my-tickets">
          <FaTicketAlt />
          Meus Ingressos
        </Link>
        <Link to="/my-events">
          <FaCalendar />
          Meus Eventos
        </Link>
        <button type="button" onClick={handleLogOff}>
          {isLogged ? 'Sair' : 'Entrar'}
        </button>
      </DropDown>
    </Container>
  );
};

export default Header;
