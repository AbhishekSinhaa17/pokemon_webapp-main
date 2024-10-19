import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7PD3XzhTWPObQVC3CFFhqWhl4yPisAUU",
  authDomain: "pokedex-webapp-419ad.firebaseapp.com",
  projectId: "pokedex-webapp-419ad",
  storageBucket: "pokedex-webapp-419ad.appspot.com",
  messagingSenderId: "277088124480",
  appId: "1:277088124480:web:0972e78c94c9d8c1b4a9a5",
  measurementId: "G-VT6ZCG7PDH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
