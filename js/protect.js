import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "./firebase.js";

export function protectPage() {
    onAuthStateChanged(auth, (user) => {
        if (!user || localStorage.getItem("loggedIn") !== "true") {
            alert("Access denied. Please log in first.");
            window.location.href = "members.html";
        }
    });
}

export function logout() {
    signOut(auth).then(() => {
        localStorage.removeItem("loggedIn");
        window.location.href = "index.html";
    });
}

protectPage();
