import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA4MF3c3bPwRjQflwPKOkkFzmyT29ttu2w",
    authDomain: "onlineourlibrary.firebaseapp.com",
    projectId: "onlineourlibrary",
    storageBucket: "onlineourlibrary.firebasestorage.app",
    messagingSenderId: "15500608339",
    appId: "1:15500608339:web:30e431c5fafacfe42857a6",
    measurementId: "G-8W3R98G0H8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
