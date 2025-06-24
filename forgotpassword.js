// forgot-password.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Forgot Password page fully loaded!');

    // Get elements by their IDs
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const emailInput = document.getElementById('email');
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

    // --- Form Submission Handling ---
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission
            messageDiv.textContent = ''; // Clear previous messages
            messageDiv.style.color = 'red'; // Default to red for errors

            const email = emailInput.value.trim();

            // Basic Client-side Validation
            if (email === '') {
                messageDiv.textContent = 'Please enter your email address.';
                return;
            }

            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                messageDiv.textContent = 'Please enter a valid email address.';
                return;
            }

            // Simulate API Call / Backend for sending reset link
            console.log(`Attempting to send password reset link to: ${email}`);
            messageDiv.style.color = 'orange';
            messageDiv.textContent = 'Sending reset link...';

            setTimeout(() => { // Simulate network delay
                // Simulate successful sending of reset link
                // In a real application, you would send this email to a server
                // and handle the server's response.
                const isResetLinkSent = true; // For demonstration, assume success

                if (isResetLinkSent) {
                    messageDiv.style.color = 'green';
                    messageDiv.textContent = 'Password reset link sent to your email!';
                    console.log('Password reset link sent successfully.');

                    // Optionally clear the email field
                    emailInput.value = '';
                } else {
                    messageDiv.style.color = 'red';
                    messageDiv.textContent = 'Failed to send reset link. Please try again.';
                    console.log('Failed to send reset link: Simulated server error.');
                }
            }, 1500); // 1.5 seconds delay
        });
    } else {
        console.error('Error: Forgot Password form element with ID "forgotPasswordForm" not found.');
    }
});
