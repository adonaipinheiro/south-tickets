import firebaseModule from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD75rjpyR_gF2Sj49VMmcc-QNVrnFUtX28',
  authDomain: 'south-tickets.firebaseapp.com',
  databaseURL: 'https://south-tickets.firebaseio.com',
  projectId: 'south-tickets',
  storageBucket: 'south-tickets.appspot.com',
  messagingSenderId: '460584101720',
  appId: '1:460584101720:web:48b86ccb36a6e52aa0672d',
};

const firebase = firebaseModule.initializeApp(firebaseConfig);

export default firebase;
