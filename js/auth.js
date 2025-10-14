import { signInWithPopup } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth, provider } from "./firebase.js";

const allowedEmails = [
    "abdulrhman.m.salama@gmail.com"
];

document.getElementById("googleSignInBtn").addEventListener("click", () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const userEmail = result.user.email;
            if (allowedEmails.includes(userEmail)) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "hidden.html";
            } else {
                alert("Access denied. This email is not authorized.");
            }
        })
        .catch((error) => {
            console.error(error);
            alert("Login failed.");
        });
});
