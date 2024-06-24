// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {API_KEY,AUTH_DOMAIN,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID,MEASUREMENT_ID} from '@env'



const firebaseConfig = {
  apiKey: "AIzaSyBYZ03LnQSOXMLJHCHlk7vjJfxdKcQU2gs",
  authDomain:"treko-1f5b6.firebaseapp.com" ,
  projectId: "treko-1f5b6",
  storageBucket: "treko-1f5b6.appspot.com",
  messagingSenderId: "363856634142",
  appId: "1:363856634142:web:8cc8f95c0f1869cdbfe90f",
  measurementId: "G-QHXK7Q7ZXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app)