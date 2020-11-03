import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTicketAlt } from 'react-icons/fa';

import backInfo from '../../../assets/SignIn/back_info.svg';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  background: var(--white);
  width: 80%;
  min-height: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 20px;
  background-size: contain;
  background: url(${backInfo}) var(--white) no-repeat;
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.65;
  padding: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 360px) {
    display: none;
  }

  .infoTextArea {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    width: 500px;
  }

  .separator {
    height: 100%;
    width: 2.5px;
    background: #000000;
    margin-right: 10px;
  }

  img {
    height: 65%;
    width: 80%;
  }

  h2 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 28px;
  }
`;

export const LoginArea = styled.div`
  flex: 0.35;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 360px) {
    flex: 1;
    padding: 15px;
  }

  h1 {
    text-transform: uppercase;
  }

  svg {
    width: 100%;
    height: 75px;
    color: var(--secondaryDark);
  }

  .spanWelcome {
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;

  input,
  button {
    width: 100%;
    height: 40px;
    border: 0;
    border-radius: 4px;
    box-shadow: #cccccc80 0.5px 2.5px 5px;
  }

  input {
    background: #cccccc20;
    margin-bottom: 10px;
    padding: 10px;
  }

  button {
    background: var(--secondaryDark);
    color: var(--white);
    font-weight: bold;
    font-family: 'Baloo 2', cursive;
    font-size: 18px;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
  }
`;

export const FormLink = styled(Link)`
  cursor: pointer;
  margin: 10px 0 30px;
  text-decoration: underline;
  color: var(--black);
  font-size: 14px;
  text-align: center;
`;

export { FaTicketAlt };
