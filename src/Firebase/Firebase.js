import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: 'fir-auth-80ce1.firebaseapp.com',
  projectId: 'fir-auth-80ce1',
  storageBucket: 'fir-auth-80ce1.appspot.com',
  messagingSenderId: '821887951877',
  appId: '1:821887951877:web:8ece345afb07cebc58a86c',
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
