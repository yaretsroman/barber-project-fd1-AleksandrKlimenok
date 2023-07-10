// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: 'barber-project-513d1.firebaseapp.com',
  projectId: 'barber-project-513d1',
  storageBucket: 'barber-project-513d1.appspot.com',
  messagingSenderId: '1098681732339',
  appId: '1:1098681732339:web:e4d48f74348abd42977b86',
};

// Initialize Firebase
initializeApp(firebaseConfig);
