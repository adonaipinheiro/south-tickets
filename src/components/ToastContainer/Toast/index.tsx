import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Types
import { Toast as ToastI } from '../../../store/ducks/toast/types';

// Styles
import { Container, IconAlert, IconX, IconCheck, IconInfo } from './styles';

// Actions
import { removeToast } from '../../../store/ducks/toast/actions';

interface Toast {
  message: ToastI;
  style: object;
}

const icons = {
  info: <IconInfo size={24} />,
  success: <IconCheck size={24} />,
  error: <IconAlert size={24} />,
};

const ToastContainer = ({ message, style }: Toast) => {
  const dispatch = useDispatch();

  const handleRemove = useCallback(() => {
    dispatch(removeToast(message.id));
  }, [dispatch, message.id]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemove();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [handleRemove]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>
      <button type="button" onClick={handleRemove}>
        <IconX size={18} />
      </button>
    </Container>
  );
};

export default ToastContainer;
