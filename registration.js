document.addEventListener("DOMContentLoaded", function() {
    // Get references to form elements
    const loginForm = document.querySelector(".form.login form");
    const signupForm = document.getElementById("registrationForm");

    // Add event listeners to forms
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from submitting

            // Get user input values
            const email = loginForm.querySelector("input[type='text']").value;
            const password = loginForm.querySelector("input[type='password']").value;

            // Perform client-side validation
            if (validateLoginForm(email, password)) {
                // Handle the login process here (e.g., send data to the server)
                // You can use AJAX or fetch to send data to the server
                // Display success or error messages to the user
                console.log("Login submitted with email: " + email);
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", function(e) {
            e.preventDefault(); // Prevent the form from submitting

            // Get user input values
            const name = signupForm.querySelector("#name").value;
            const email = signupForm.querySelector("#email").value;
            const password = signupForm.querySelector("#password").value;
            const confirmPassword = signupForm.querySelector("#confirmPassword").value;

            // Perform client-side validation
            if (validateSignupForm(name, email, password, confirmPassword)) {
                // Handle the registration process here (e.g., send data to the server)
                // You can use AJAX or fetch to send data to the server
                // Display success or error messages to the user
                console.log("Registration submitted with email: " + email);
            }
        });
    }

    // Function to validate login form
    function validateLoginForm(email, password) {
        // Implement your validation logic here
        // Return true if the input is valid, otherwise return false
        if (email && password) {
            return true;
        } else {
            alert("Please fill in all fields.");
            return false;
        }
    }

    // Function to validate signup form
    function validateSignupForm(name, email, password, confirmPassword) {
        // Implement your validation logic here
        // Return true if the input is valid, otherwise return false
        if (name && email && password && confirmPassword === password) {
            return true;
        } else {
            alert("Please fill in all fields and make sure passwords match.");
            return false;
        }
    }
});
