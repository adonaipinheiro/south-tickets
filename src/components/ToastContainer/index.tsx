import React from 'react';
import { useTransition } from 'react-spring';
import { useSelector } from 'react-redux';

//Types
import { ApplicationState } from '../../store';

//Styles
import { Container } from './styles';

// Components
import Toast from './Toast';

const ToastContainer = () => {
  const { messages } = useSelector((state: ApplicationState) => state.toast);
  const messagesWithTransitions = useTransition(messages, message => message.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 }
  })

  return (
    <Container>
      {messagesWithTransitions.map(({item, key, props}) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
}

export default ToastContainer;
