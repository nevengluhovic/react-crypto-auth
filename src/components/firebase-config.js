import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX2L1usBfL7yV7HLf9POGvlGTNbZXtO6I",
  authDomain: "neven-user-auth.firebaseapp.com",
  projectId: "neven-user-auth",
  storageBucket: "neven-user-auth.appspot.com",
  messagingSenderId: "794579975200",
  appId: "1:794579975200:web:f38bd4e6b47d10c99a9045",
  measurementId: "G-04CMVZS8H1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
