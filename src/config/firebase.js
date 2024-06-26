// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyDejzBrHpkjpdoQZXc3tEQyIlQGEwHNkb4',
  authDomain: 'treko-34c66.firebaseapp.com',
  projectId: 'treko-34c66',
  storageBucket: 'treko-34c66.appspot.com',
  messagingSenderId: '15201298138',
  appId: '1:15201298138:web:a718cf7083443504e967e3',
  measurementId: 'G-XYDC73R948',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
