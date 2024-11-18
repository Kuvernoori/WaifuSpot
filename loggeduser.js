document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const signUpButton = document.getElementById('signUpButton');
    const logInButton = document.getElementById('logInButton');
    const logoutButton = document.getElementById('logOutButton');
    const authButtons = document.getElementById('auth-buttons');
    const logoutDiv = document.getElementById('logout-button');
    const personalAccountButton = document.getElementById('personal-account-button');

    if (loggedInUser) {
        authButtons.style.display = 'none';
        logoutDiv.style.display = 'block';
        personalAccountButton.style.display = 'block';
    } else {
        authButtons.style.display = 'block';
        logoutDiv.style.display = 'none';
        personalAccountButton.style.display = 'none';
    }

    logoutButton.addEventListener('click', function () {
        localStorage.removeItem("loggedInUser");
        authButtons.style.display = 'block';
        logoutDiv.style.display = 'none';
        personalAccountButton.style.display = 'none';
        window.location.href = "index.html";
    });
});