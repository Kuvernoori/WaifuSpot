function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
        localStorage.setItem(`${loggedInUser.username}_theme`, newTheme);
    } else {

        localStorage.setItem('theme', newTheme);
    }
}

window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    const savedTheme = loggedInUser ? localStorage.getItem(`${loggedInUser.username}_theme`) || 'light-mode' : 'night-mode';
    document.body.classList.add(savedTheme);
    document.getElementById('toggleThemeButton').addEventListener('click', toggleTheme);
}