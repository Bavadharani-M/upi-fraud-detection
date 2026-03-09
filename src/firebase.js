// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBW3zWpz1bie8Fx4XTqYwF37aWOvtGnM7Y",
  authDomain: "ageis-pay.firebaseapp.com",
  projectId: "ageis-pay",
  storageBucket: "ageis-pay.firebasestorage.app",
  messagingSenderId: "273893424690",
  appId: "1:273893424690:web:dc72d4894b6d1e7b13c62b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ NEW