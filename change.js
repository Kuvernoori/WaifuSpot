function toggleTheme() {
    const themeElements = document.querySelectorAll('.theme-sensitive');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    const newTheme = currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    themeElements.forEach(element => {
        element.classList.remove(currentTheme);
        element.classList.add(newTheme);
    });

    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    if (loggedInUser) {
        localStorage.setItem(`${loggedInUser.username}_theme`, newTheme);
    } else {
        localStorage.setItem('theme', newTheme);
    }
}

window.onload = function() {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const savedTheme = loggedInUser ? localStorage.getItem(`${loggedInUser.username}_theme`) || 'light-mode' : 'dark-mode';
    const themeElements = document.querySelectorAll('.theme-sensitive');

    themeElements.forEach(element => {
        element.classList.add(savedTheme);
    });

    document.body.classList.add(savedTheme);
    document.getElementById('toggleThemeButton').addEventListener('click', toggleTheme);
}