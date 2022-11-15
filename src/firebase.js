// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5GRGNMXOmhCBFYoOrUCE9faKu8ywsmHc",
  authDomain: "note-roll.firebaseapp.com",
  projectId: "note-roll",
  storageBucket: "note-roll.appspot.com",
  messagingSenderId: "57053616497",
  appId: "1:57053616497:web:5045b8764337766f2dbed0",
  measurementId: "G-1QV4GKN9B5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
