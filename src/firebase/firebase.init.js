// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7mHDEtE0evSO04w1i542wS3j6ON7tpuo",
  authDomain: "travello-client.firebaseapp.com",
  projectId: "travello-client",
  storageBucket: "travello-client.appspot.com",
  messagingSenderId: "402722949776",
  appId: "1:402722949776:web:86fd92fdfea0e5e80de615",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;