import React, { useEffect } from 'react';
import api from '../../services/api';

// Styles
import { Container } from './styles';

const SignIn = () => {
  const GetUser = () => {
    api.getUser('uuid').then(r=>{console.log(r)}).catch(e=>{console.log(e)});
    api.addUser().then(r=>{console.log(r)}).catch(e=>{console.log(e)});
    api.getAllUsers().then(r=>{console.log(r)}).catch(e=>{console.log(e)});
  }

  useEffect(()=>{
    GetUser();
  }, [])

  return (
    <Container>
      SignIn
    </Container>
  );
};

export default SignIn;
