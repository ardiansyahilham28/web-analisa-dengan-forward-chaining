document.addEventListener('DOMContentLoaded', function() {
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const loginBox = document.querySelector('.login-box');
    const registerBox = document.getElementById('register-box');

    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginBox.style.display = 'none';
        registerBox.style.display = 'block';
    });

    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerBox.style.display = 'none';
        loginBox.style.display = 'block';
    });
});
