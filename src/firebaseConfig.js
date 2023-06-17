import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCx8RIL7rNAmzgY2uN8qe5UazSi6PAiuR0",
  authDomain: "tienda-de-comercio.firebaseapp.com",
  projectId: "tienda-de-comercio",
  storageBucket: "tienda-de-comercio.appspot.com",
  messagingSenderId: "797480477301",
  appId: "1:797480477301:web:d82db1b06cec34b4020e3c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
