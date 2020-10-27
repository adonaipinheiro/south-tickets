import firebase from './apiConnection';

// Types
import ApiInterface, { User } from './api.types';

// Utils
import { UserException } from '../utils/Exceptions';

const api: ApiInterface = {
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
            id: doc.id,
            first: String(doc.data().first),
            last: String(doc.data().last),
            born: Number(doc.data().born),
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
        id: userData.id,
        first: String(userData.data()?.first),
        last: String(userData.data()?.last),
        born: 1,
      };
    }
    throw UserException('Usuário não existe');
  },
};

export default api;
