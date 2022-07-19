import {getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVQh50D9igNZG0MzsmAECrtvA5D5B1aYM",
  authDomain: "web-page-f0baf.firebaseapp.com",
  projectId: "web-page-f0baf",
  storageBucket: "web-page-f0baf.appspot.com",
  messagingSenderId: "300941262517",
  appId: "1:300941262517:web:c75a9f44d04ede100308fc"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;