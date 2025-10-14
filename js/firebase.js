import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDROMy1aimJTbIzaMhFqtlLt_XLRduNX5g",
    authDomain: "emi-team-site.firebaseapp.com",
    projectId: "emi-team-site",
    storageBucket: "emi-team-site.firebasestorage.app",
    messagingSenderId: "460851089395",
    appId: "1:460851089395:web:0b5946ac374540ffbd0c86",
    measurementId: "G-WWDBR5ETX5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
