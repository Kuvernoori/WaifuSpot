document.querySelector('.signup-form').addEventListener('submit', function (event) {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    clearErrors();

    let isValid = true;

    isValid = validateField(name) && isValid;
    isValid = validateEmailField(email) && isValid;
    isValid = validatePasswordField(password) && isValid;
    isValid = validateConfirmPasswordField(confirmPassword, password.value) && isValid;

    if (userExists(email.value.trim())) {
        email.placeholder = 'This email is already registered.';
        email.classList.add('error');
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
        clearInvalidFields(name, email, password, confirmPassword);
    } else {
        event.preventDefault();
        saveUser({name: name.value.trim(), email: email.value.trim(), password: password.value.trim()});
        window.location.href = "withlogout.html";
    }
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('.signup-form').dispatchEvent(new Event('submit'));
    } else if (event.key === 'Escape') {
        clearFields();
    }
});

document.getElementById('name').addEventListener('input', function () {
    validateField(this);
});

document.getElementById('email').addEventListener('input', function () {
    validateEmailField(this);
});

document.getElementById('password').addEventListener('input', function () {
    validatePasswordField(this);
});

document.getElementById('confirm-password').addEventListener('input', function () {
    validateConfirmPasswordField(this, document.getElementById('password').value);
});

function validateField(field) {
    const latinRegex = /^[A-Za-z0-9\s]+$/;
    if (field.value.trim() === '') {
        field.placeholder = "Please enter your nickname.";
        field.classList.add('error');
        return false;
    } else if (!latinRegex.test(field.value.trim())) {
        field.placeholder = "Please enter your nickname in Latin characters only.";
        field.classList.add('error');
        return false;
    } else {
        field.placeholder = '';
        field.classList.remove('error');
        return true;
    }
}

function validateEmailField(email) {
    const latinRegex = /^[A-Za-z0-9@.\s]+$/;
    if (email.value.trim() === '') {
        email.placeholder = 'Please enter your email.';
        email.classList.add('error');
        return false;
    } else if (!validateEmail(email.value.trim())) {
        email.placeholder = 'Please enter a valid email address. (example@domain.tld)';
        email.classList.add('error');
        return false;
    } else if (!latinRegex.test(email.value.trim())) {
        email.placeholder = 'Email must contain only Latin characters.';
        email.classList.add('error');
        return false;
    } else {
        email.placeholder = '';
        email.classList.remove('error');
        return true;
    }
}

function validatePasswordField(password) {
    const hasNumber = /\d/;
    const latinRegex = /^[A-Za-z0-9\s]+$/;
    if (password.value.trim() === '') {
        password.placeholder = 'Please enter your password.';
        password.classList.add('error');
        return false;
    }
    if (password.value.includes(' ')) {
        password.placeholder = 'Password must not contain spaces.';
        password.classList.add('error');
        return false;
    } else if (password.value.length < 6) {
        password.placeholder = 'Password must be at least 6 characters long.';
        password.classList.add('error');
        return false;
    } else if (!hasNumber.test(password.value)) {
        password.placeholder = 'Password must contain at least one number.';
        password.classList.add('error');
        return false;
    } else if (!latinRegex.test(password.value.trim())) {
        password.placeholder = 'Password must contain only Latin characters.';
        password.classList.add('error');
        return false;
    } else {
        password.placeholder = '';
        password.classList.remove('error');
        return true;
    }
}

function validateConfirmPasswordField(confirmPassword, passwordValue) {
    const latinRegex = /^[A-Za-z0-9\s]+$/;
    if (confirmPassword.value.trim() === '') {
        confirmPassword.placeholder = 'Please confirm your password.';
        confirmPassword.classList.add('error');
        return false;
    } else if (confirmPassword.value !== passwordValue) {
        confirmPassword.placeholder = 'Passwords do not match.';
        confirmPassword.classList.add('error');
        return false;
    } else if (!latinRegex.test(confirmPassword.value.trim())) {
        confirmPassword.placeholder = 'Password must contain only Latin characters.';
        confirmPassword.classList.add('error');
        return false;
    } else {
        confirmPassword.placeholder = '';
        confirmPassword.classList.remove('error');
        return true;
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function clearErrors() {
    const fields = [document.getElementById('name'), document.getElementById('email'),
        document.getElementById('password'), document.getElementById('confirm-password')];
    fields.forEach(field => {
        field.classList.remove('error');
    });
}

function clearInvalidFields(name, email, password, confirmPassword) {
    if (name.classList.contains('error')) {
        name.value = '';
    }
    if (email.classList.contains('error')) {
        email.value = '';
    }
    if (password.classList.contains('error')) {
        password.value = '';
    }
    if (confirmPassword.classList.contains('error')) {
        confirmPassword.value = '';
    }
}

function clearFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('confirm-password').value = '';
}

function userExists(email) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.email === email);
}

function saveUser(newUser) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(newUser));
}

document.getElementById('googleSignIn').addEventListener('click', function (event) {
    event.preventDefault();
    alert('Google Sign Up is not implemented yet.');
});
