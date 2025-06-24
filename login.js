// script.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Login page fully loaded!');

    // Get elements by their new IDs
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const passwordToggleIcon = document.querySelector('.password-toggle');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    const registerLink = document.getElementById('registerLink');
    const messageDiv = document.getElementById('message');

    // --- Password Visibility Toggle ---
    if (passwordToggleIcon && passwordInput) {
        passwordToggleIcon.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Toggle icon
            passwordToggleIcon.classList.toggle('bxs-hide');
            passwordToggleIcon.classList.toggle('bxs-show');
        });
    }

    // --- Form Submission Handling ---
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            messageDiv.textContent = ''; // Clear previous messages

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();
            const rememberMe = rememberMeCheckbox.checked;

            // Basic Client-side Validation
            if (username === '' || password === '') {
                messageDiv.textContent = 'Please enter both username and password.';
                return;
            }

            if (username.length < 3) {
                messageDiv.textContent = 'Username must be at least 3 characters long.';
                return;
            }

            if (password.length < 6) {
                messageDiv.textContent = 'Password must be at least 6 characters long.';
                return;
            }

            // Simulate API Call / Backend Login
            console.log(`Attempting login with: Username=${username}, Password=${password}, RememberMe=${rememberMe}`);
            messageDiv.style.color = 'orange';
            messageDiv.textContent = 'Logging in...';

            setTimeout(() => { // Simulate network delay
                // Hardcoded credentials for demonstration
                if (username === 'user123' && password === 'password123') {
                    messageDiv.style.color = 'green';
                    messageDiv.textContent = 'Login successful! Redirecting...';
                    console.log('Login successful!');
                    
                    // In a real application:
                    // Store token/session (if rememberMe)
                    if (rememberMe) {
                        localStorage.setItem('username', username);
                        // Store a token or session ID in localStorage
                    } else {
                        sessionStorage.setItem('username', username);
                        // Store a token or session ID in sessionStorage
                    }

                    // Redirect to dashboard or home page
                    window.location.href = 'homepage.html'; // Added this line for redirection
                } else {
                    messageDiv.style.color = 'red';
                    messageDiv.textContent = 'Invalid username or password.';
                    console.log('Login failed: Invalid credentials.');
                    // Optionally clear password field on failure
                    passwordInput.value = '';
                }
            }, 1500); // 1.5 seconds delay
        });
    }

    // --- Remember Me functionality (basic client-side persistence) ---
    // Check if username was remembered from a previous session
    if (localStorage.getItem('username')) {
        usernameInput.value = localStorage.getItem('username');
        rememberMeCheckbox.checked = true;
    }

    // --- Event Listeners for other links ---

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (event) => {
            // event.preventDefault(); // Prevent default link behavior
            // alert('You clicked "Forgot Password?". A password reset link would be sent to your email.');
            console.log('Forgot Password clicked.');
            // In a real app: Redirect to a password reset page or open a modal
            // window.location.href = 'forgot-password.html';
        });
    }

    if (registerLink) {
        registerLink.addEventListener('click', (event) => {
            // event.preventDefault(); // Prevent default link behavior
            // alert('You clicked "Register Here!". Redirecting to registration page.');
            console.log('Register Link clicked.');
            // In a real app: Redirect to the registration page
            // window.location.href = 'register.html';
        });
    }
});
