// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCpaaSPfNm-fQC4nxavaMxyKENR8YV7SVg",
  authDomain: "visitkonkan-6ecd5.firebaseapp.com",
  databaseURL: "https://visitkonkan-6ecd5-default-rtdb.firebaseio.com",
  projectId: "visitkonkan-6ecd5",
  storageBucket: "visitkonkan-6ecd5.firebasestorage.app",
  messagingSenderId: "646210508623",
  appId: "1:646210508623:web:1c67ca26ac4a49ca79973a",
  measurementId: "G-HQW8EGGEBC"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 
export { db,auth };
