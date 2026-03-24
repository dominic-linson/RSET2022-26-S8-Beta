// ============================
// CHECK LOGIN STATUS
// ============================
function checkAuth() {

    const loggedIn = localStorage.getItem("rbds_logged_in");

    if (loggedIn !== "true") {
        window.location.href = "login.html";
    }
}

// ============================
// LOGIN FUNCTION
// ============================
function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {

        localStorage.setItem("rbds_logged_in", "true");

        // Redirect to Dashboard
        window.location.href = "index.html";

    } else {

        document.getElementById("errorText").innerText = "Invalid Credentials";
    }
}

// ============================
// LOGOUT FUNCTION
// ============================
function logout() {

    localStorage.removeItem("rbds_logged_in");

    // Redirect to login page
    window.location.href = "login.html";
}
