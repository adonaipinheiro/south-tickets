import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { FiAlertCircle as IconAlert, FiXCircle as IconX, FiCheckCircle as IconCheck, FiInfo as IconInfo } from 'react-icons/fi';

interface ContainerInterface {
  type?: "success" | "info" | "error";
  hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled(animated.div)<ContainerInterface>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 7.5px;
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

  ${props => !props.hasDescription && css`
    align-items: center;

    svg {
      margin-top: 0;
    }
  `}
`;

export { IconAlert, IconX, IconCheck, IconInfo };
