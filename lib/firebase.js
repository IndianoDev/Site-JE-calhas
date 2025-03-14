// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAA65HQL9VOIi-nH4avBuy4D2V8CPMIIkE",
  authDomain: "je-calhas.firebaseapp.com",
  projectId: "je-calhas",
  storageBucket: "je-calhas.appspot.com",
  messagingSenderId: "89501636187",
  appId: "1:89501636187:web:a5c8b9f524b696da2e917e",
  measurementId: "G-2ZEJQTPG39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app);