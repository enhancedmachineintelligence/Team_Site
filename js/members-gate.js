// members-gate.js
// Demo-only client-side gate. NOT secure for real secrets.
// Change DEMO_ACCESS_PASSWORD locally for testing.
// IMPORTANT: Do NOT store real account credentials here.

const DEMO_ACCESS_PASSWORD = "demo1234"; // <-- change locally (demo only)

document.addEventListener("DOMContentLoaded", () => {
    // The members.html page uses elements with these IDs
    const input = document.getElementById("access-pass");
    const btn = document.getElementById("check-btn");

    // If elements not present (e.g., on other pages), do nothing
    if (!input || !btn) return;

    btn.addEventListener("click", () => {
        const val = input.value || "";
        if (val === DEMO_ACCESS_PASSWORD) {
            // Redirect to hidden page (client-side demo)
            window.location.href = "hidden.html";
        } else {
            // simple feedback
            btn.textContent = "Wrong password";
            btn.disabled = true;
            setTimeout(() => {
                btn.textContent = "Unlock";
                btn.disabled = false;
            }, 1400);
            input.classList.add("shake");
            setTimeout(() => input.classList.remove("shake"), 400);
        }
    });

    // Allow Enter key to submit
    input.addEventListener("keyup", (e) => {
        if (e.key === "Enter") btn.click();
    });
});
