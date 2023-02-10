import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDwW1O7OtwOBozIXBOpO_L6jQ-H57Scm_0",
  authDomain: "chirper-b383b.firebaseapp.com",
  projectId: "chirper-b383b",
  storageBucket: "chirper-b383b.appspot.com",
  messagingSenderId: "254273249717",
  appId: "1:254273249717:web:c9f558b86c376cfdd339fc",
  measurementId: "G-ZS4MSRWFX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
