// home.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('Home page fully loaded!');

    const companyLogo = document.querySelector('.logo'); // Select the logo
    const companyName = document.querySelector('.company-name'); // Select the company name

    // Add click listeners to logo and company name to redirect to home
    if (companyLogo) {
        companyLogo.addEventListener('click', () => {
            window.location.href = '#'; // Or window.location.href = 'index.html'; if your home page is index.html
            console.log('Redirecting to home via logo.');
        });
    }

    if (companyName) {
        companyName.addEventListener('click', () => {
            window.location.href = '#'; // Or window.location.href = 'index.html';
            console.log('Redirecting to home via company name.');
        });
    }

    // You can add more interactive elements or animations here specific to the home page.
});
