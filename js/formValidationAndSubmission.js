// // formValidationAndSubmission.js
function validateFormAndSubmit() {
    // Perform form validation
    // Perform form validation

    console.log("button worked")

    var isValid = validateForm();

    var form = document.getElementById("contactForm");

    if (isValid) {
        console.log("is valid")
        submitted=true;
    }

    if (submitted) {
        console.log("is submitted to google")
        form.action = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeeLEqIxrB5u-Dg6SV6r2sfJFtwxn-6M1mXv9c6IPnHE2h2ZA/formResponse";
        

    // Now submit the form with the updated action
    form.submit();

    // If the form is not valid, prevent the submission
    return false;
}

function validateForm() {
    // Implement your form validation logic here
    // Return true if the form is valid, otherwise return false

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;


    // Example validation: Check if fields are not empty
    if (name.trim() === '') {
        // Display an error message or update the UI as needed
        alert('Please fill in all required fields.');
        return false;
    }

    // Email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email.match(emailPattern)) {
        // Display an error message or update the UI as needed for invalid email
        alert('Please enter a valid email address.');
        return false;
    }

    // Phone number validation using a regular expression (assuming US phone number format)
   

    // Add more validation checks as needed

    // If all checks pass, return true
    return true;
}

}