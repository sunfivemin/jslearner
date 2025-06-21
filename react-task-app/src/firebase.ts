// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBpHZCVc6s5ES0-45hd1lYwVYrOW6B6Etg',
  authDomain: 'react-task-app-ae979.firebaseapp.com',
  projectId: 'react-task-app-ae979',
  storageBucket: 'react-task-app-ae979.firebasestorage.app',
  messagingSenderId: '384247855974',
  appId: '1:384247855974:web:62eb5098aa32ce80a166a7',
  measurementId: 'G-VVQMTK7ZZK',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
