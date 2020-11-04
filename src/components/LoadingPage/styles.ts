import styled, { keyframes } from 'styled-components';
import { FaTicketAlt as Icon } from 'react-icons/fa';

const animation = keyframes`
  0% {
    transform: translateY(0px) rotateZ(0deg);
  }

  33% {
    transform: translateY(-15px) rotateZ(20deg);
  }

  66% {
    transform: translateY(-15px) rotateZ(-20deg);
  }

  100% {
    transform: translateY(0px) rotateZ(0deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;

  svg {
    width: 100%;
    height: 75px;
    color: var(--white);
    animation: ${animation} 2s linear infinite;
  }

  span {
    font-family: 'Baloo 2', cursive;
    color: var(--white);
    font-weight: bold;
    font-size: 20px;
  }
`;

export { Icon };
