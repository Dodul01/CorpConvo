import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDArPsB915DGySQEzGYQv7cz0GaqdnZmHQ",
  authDomain: "corpconvo.firebaseapp.com",
  projectId: "corpconvo",
  storageBucket: "corpconvo.appspot.com",
  messagingSenderId: "792945924919",
  appId: "1:792945924919:web:b5551fda7e80930eae98b2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;