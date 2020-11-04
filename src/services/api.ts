import firebaseModule from 'firebase/app';
import firebase from './apiConnection';
import 'firebase/auth';

// Types
import ApiInterface, { User } from './api.types';

// Utils
import { UserException, SignInException } from '../utils/Exceptions';

const api: ApiInterface = {
  createUserWithEmailAndPass: async (email, password) => {
    try {
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log(resp);

      await firebase
        .firestore()
        .collection('users')
        .doc(resp.user?.uid)
        .set({
          uid: resp.user?.uid,
          name: '',
          photo: '',
          email,
          tickets: [],
          events: [],
        })
        .catch(() => {
          throw UserException('Erro ao criar usuário no banco de dados');
        });

      return 'Usuário criado com sucesso';
    } catch (error) {
      console.log(error);
      throw UserException('Erro ao criar usuário');
    }
  },
  checkUserExists: async id => {
    const user = await firebase.firestore().collection('users').doc(id).get();

    return user.exists;
  },
  addUser: async () => {
    const userExists = await api.checkUserExists('uuid');
    if (!userExists) {
      await firebase
        .firestore()
        .collection('users')
        .doc('uuid')
        .set({
          first: 'Adonai',
          last: 'Lovelace',
          born: 1815,
        })
        .catch(error => {
          throw error;
        });

      return 'Usuário criado com sucesso';
    }
    throw UserException('Usuário já existe');
  },
  getAllUsers: async () => {
    const users: Array<User> = [];
    await firebase
      .firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const userData = {
            email: String(doc.data().email),
            events: doc.data().events,
            name: String(doc.data().name),
            photo: String(doc.data().photo),
            tickets: doc.data().tickets,
            uid: doc.id,
          };

          users.push(userData);
        });
      });

    return users;
  },
  getUser: async id => {
    const userData = await firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get();

    if (userData.exists) {
      return {
        email: String(userData.data()?.email),
        events: userData.data()?.events,
        name: String(userData.data()?.name),
        photo: String(userData.data()?.photo),
        tickets: userData.data()?.tickets,
        uid: userData.id,
      };
    }
    throw UserException('Usuário não existe');
  },
  loginWithEmailAndPass: async (email, password) => {
    try {
      await firebase
        .auth()
        .setPersistence(firebaseModule.auth.Auth.Persistence.LOCAL);

      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return user.user?.uid || 'Login efetuado com sucesso';
    } catch (error) {
      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/user-not-found'
      ) {
        throw SignInException(
          'O e-mail informado não consta na nossa base de dados',
        );
      } else if (error.code === 'auth/user-disabled') {
        throw SignInException('Este e-mail está desativado');
      } else if (error.code === 'auth/too-many-requests') {
        throw SignInException(
          'Usuário bloqueado temporariamente por quantidade de tentativas',
        );
      } else if (error.code === 'auth/wrong-password') {
        throw SignInException('Verfique os dados digitados');
      } else {
        throw SignInException('Aconteceu um erro inesperado');
      }
    }
  },
  logOff: async () => {
    try {
      await firebase.auth().signOut();
      return 'SignOut realizado com sucesso';
    } catch (error) {
      throw SignInException('Aconteceu um erro ao sair da aplicação');
    }
  },
};

export default api;
