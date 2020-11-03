import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';
import {
  FiAlertCircle as IconAlert,
  FiXCircle as IconX,
  FiCheckCircle as IconCheck,
  FiInfo as IconInfo,
} from 'react-icons/fi';

interface ContainerInterface {
  type?: 'success' | 'info' | 'error';
  hasDescription?: boolean;
}

const toastTypeVariations = {
  info: css`
    background: var(--warning);
    color: var(--warningDark);
  `,
  success: css`
    background: var(--success);
    color: var(--successDark);
  `,
  error: css`
    background: var(--error);
    color: var(--errorDark);
  `,
};

export const Container = styled(animated.div)<ContainerInterface>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 5px 5px 0 0;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin-right: 12px;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 8px;
    top: 8px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

const resize = keyframes`
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
`;

export const Progress = styled.div`
  display: flex;
  position: absolute;
  height: 5px;
  left: 0;
  bottom: 0;
  background: #00000020;
  animation: ${resize} 3s linear 1;
`;

export { IconAlert, IconX, IconCheck, IconInfo };
