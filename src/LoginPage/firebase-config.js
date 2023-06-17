import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZ7xzkakox7Kz7CtHkWSZom0mBM15HwlY",
  authDomain: "church-e98c4.firebaseapp.com",
  databaseURL: "https://church-e98c4-default-rtdb.firebaseio.com",
  projectId: "church-e98c4",
  storageBucket: "church-e98c4.appspot.com",
  messagingSenderId: "671058706281",
  appId: "1:671058706281:web:166305d3e695a5499087f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
