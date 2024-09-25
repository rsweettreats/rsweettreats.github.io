document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("iname");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const repeatPasswordInput = document.getElementById("repeatPassword");
    const termsCheckbox = document.getElementById("terms");
    const submitButton = document.getElementById("submit");

    // Function to check if passwords match
    function passwordsMatch() {
        return passwordInput.value === repeatPasswordInput.value;
    }

    // Function to check if all required fields are filled
    function allFieldsFilled() {
        return nameInput.value.trim() !== "" &&
               emailInput.value.trim() !== "" &&
               passwordInput.value.trim() !== "" &&
               repeatPasswordInput.value.trim() !== "" &&
               termsCheckbox.checked;
    }

    // Function to move the submit button randomly
    function moveButton() {
        const x = Math.random() * 200 - 100; // Random horizontal movement (-100 to 100)
        const y = Math.random() * 100 - 50;  // Random vertical movement (-50 to 50)
        submitButton.style.transform = `translate(${x}px, ${y}px)`;
    }

    // Event listener for mouseover on the submit button
    submitButton.addEventListener("mouseover", function () {
        if (!allFieldsFilled() || !passwordsMatch()) {
            moveButton(); // Move the button if conditions are not met
        }
    });

    // Final validation when submitting the form
    form.addEventListener("submit", function (event) {
        if (!passwordsMatch()) {
            event.preventDefault(); // Prevent form submission if passwords don't match
            alert("Passwords do not match.");
        }
    });

    // Enable the submit button by default
    submitButton.disabled = false;
});
