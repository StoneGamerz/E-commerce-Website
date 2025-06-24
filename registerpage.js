// register.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Register page fully loaded!');

    // Get elements by their IDs
    const registerForm = document.getElementById('registerForm');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const messageDiv = document.getElementById('message');
    const companyLogo = document.querySelector('.logo'); // Select the logo
    const companyName = document.querySelector('.company-name'); // Select the company name

    // Add click listeners to logo and company name to redirect to home
    if (companyLogo) {
        companyLogo.addEventListener('click', () => {
            window.location.href = 'landingpage.html'; // Redirect to home page (or your desired home path)
        });
    }

    if (companyName) {
        companyName.addEventListener('click', () => {
            window.location.href = 'landingpage.html'; // Redirect to home page (or your desired home path)
        });
    }

    // --- Password Visibility Toggles ---
    document.querySelectorAll('.password-toggle').forEach(icon => {
        icon.addEventListener('click', () => {
            const targetId = icon.getAttribute('data-target');
            const targetInput = document.getElementById(targetId);

            if (targetInput) {
                const type = targetInput.getAttribute('type') === 'password' ? 'text' : 'password';
                targetInput.setAttribute('type', type);

                // Toggle icon class
                icon.classList.toggle('bxs-hide');
                icon.classList.toggle('bxs-show');
            } else {
                console.error(`Error: Password toggle target input not found for ID: ${targetId}`);
            }
        });
    });

    // --- Form Submission Handling ---
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            messageDiv.textContent = ''; // Clear previous messages
            messageDiv.style.color = 'red'; // Default to red for errors

            const username = usernameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            // Basic Client-side Validation
            if (username === '' || email === '' || password === '' || confirmPassword === '') {
                messageDiv.textContent = 'All fields are required.';
                console.log('Validation Error: All fields required.');
                return;
            }

            if (username.length < 3) {
                messageDiv.textContent = 'Username must be at least 3 characters long.';
                console.log('Validation Error: Username too short.');
                return;
            }

            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageDiv.textContent = 'Please enter a valid email address.';
                console.log('Validation Error: Invalid email format.');
                return;
            }

            if (password.length < 6) {
                messageDiv.textContent = 'Password must be at least 6 characters long.';
                console.log('Validation Error: Password too short.');
                return;
            }

            if (password !== confirmPassword) {
                messageDiv.textContent = 'Passwords do not match.';
                confirmPasswordInput.value = ''; // Clear confirm password field
                console.log('Validation Error: Passwords do not match.');
                return;
            }

            // Simulate API Call / Backend Registration
            console.log(`Attempting registration for: Username=${username}, Email=${email}`);
            messageDiv.style.color = 'orange';
            messageDiv.textContent = 'Registering...';

            setTimeout(() => { // Simulate network delay
                // Simulate successful registration for demonstration
                // In a real application, you would send this data to a server
                // and handle the server's response.
                const isRegistrationSuccessful = true; // For demonstration, assume success

                if (isRegistrationSuccessful) {
                    messageDiv.style.color = 'green';
                    messageDiv.textContent = 'Registration successful! Redirecting to login page...';
                    console.log('Registration successful!');

                    // Clear form fields on successful registration
                    usernameInput.value = '';
                    emailInput.value = '';
                    passwordInput.value = '';
                    confirmPasswordInput.value = '';

                    // Redirect to the login page after a short delay
                    setTimeout(() => {
                        window.location.href = 'login.html';
                    }, 1000); // 1 second delay before redirect
                } else {
                    messageDiv.style.color = 'red';
                    messageDiv.textContent = 'Registration failed. Please try again.';
                    console.log('Registration failed: Simulated server error.');
                    // Optionally clear password fields on failure
                    passwordInput.value = '';
                    confirmPasswordInput.value = '';
                }
            }, 1500); // 1.5 seconds delay
        });
    } else {
        console.error('Error: Register form element with ID "registerForm" not found.');
    }
});
