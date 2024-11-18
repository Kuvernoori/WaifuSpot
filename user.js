document.addEventListener("DOMContentLoaded", function () {
    const personalAccountText = document.getElementById("personalAccountText");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedInUser) {
        window.location.href = "signin.html";
        return;
    }

    personalAccountText.innerHTML = `
        <h2 class="theme-sensitive">Welcome, ${loggedInUser.name}</h2>
        <p><strong>Email:</strong> ${loggedInUser.email}</p>
    `;

    const logoutButton = document.getElementById('logOutButton');
    logoutButton.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'index.html';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const changeNameButton = document.getElementById('change-name-btn');
    const changeEmailButton = document.getElementById('change-email-btn');
    const changeStep1 = document.getElementById('change-step-1');
    const changeStep2 = document.getElementById('change-step-2');
    const changeStep3 = document.getElementById('change-step-3');
    const passwordInput = document.getElementById('password-input');
    const newValueInput = document.getElementById('new-value-input');
    const confirmPasswordButton = document.getElementById('confirm-password-btn');
    const saveChangesButton = document.getElementById('save-changes-btn');
    const changeModal = new bootstrap.Modal(document.getElementById('changeModal'));

    changeNameButton.addEventListener('click', function () {
        changeStep1.style.display = 'none';
        changeStep2.style.display = 'block';
        sessionStorage.setItem('changeField', 'name');
    });

    changeEmailButton.addEventListener('click', function () {
        changeStep1.style.display = 'none';
        changeStep2.style.display = 'block';
        sessionStorage.setItem('changeField', 'email');
    });

    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            confirmPasswordButton.click();
        }
    });

    newValueInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            saveChangesButton.click();
        }
    });

    confirmPasswordButton.addEventListener('click', function () {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === loggedInUser.password) {
            changeStep2.style.display = 'none';
            changeStep3.style.display = 'block';
        } else {
            alert('Incorrect password');
        }
    });

    saveChangesButton.addEventListener('click', function () {
        const newValue = newValueInput.value;
        const changeField = sessionStorage.getItem('changeField');

        if (changeField === 'email') {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(newValue)) {
                alert("Please enter a valid email address.");
                return;
            }
        }

        if (changeField === 'name') {
            loggedInUser.name = newValue;
        } else if (changeField === 'email') {
            loggedInUser.email = newValue;
        }

        localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        alert('Changes saved successfully!');
        changeModal.hide();
    });

    document.getElementById('edit-profile-btn').addEventListener('click', function () {
        changeModal.show();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const savedAvatar = localStorage.getItem('avatar');
    const avatarImage = document.getElementById('avatarPreview');
    const saveButton = document.getElementById('save-avatar-btn');
    let tempAvatar = null;

    if (savedAvatar) {
        avatarImage.src = savedAvatar;
    } else {
        avatarImage.src = 'default.jpg';
    }

    function previewAvatar(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = function() {
            avatarImage.src = reader.result;
            tempAvatar = reader.result;
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    document.getElementById('avatarInput').addEventListener('change', previewAvatar);

    saveButton.addEventListener('click', function() {
        if (tempAvatar) {
            localStorage.setItem('avatar', tempAvatar);
            alert("Avatar has been saved successfully!");
        } else {
            alert("Please choose an avatar image first!");
        }
    });
});
