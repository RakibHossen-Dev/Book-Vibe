// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbWxSzeXvbFBsA_hEoLn4wir0nFV1mf_o",
  authDomain: "book-vibe-7fd28.firebaseapp.com",
  projectId: "book-vibe-7fd28",
  storageBucket: "book-vibe-7fd28.firebasestorage.app",
  messagingSenderId: "793121741414",
  appId: "1:793121741414:web:7f6777f605cd867bbc6ba7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
