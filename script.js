document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var address = document.getElementById("address");
    var phone = document.getElementById("phone");
    var pin = document.getElementById("pin");
    var email = document.getElementById("email");
    var nameError = document.getElementById("nameError");
    var addressError = document.getElementById("addressError");
    var phoneError = document.getElementById("phoneError");
    var pinError = document.getElementById("pinError");
    var emailError = document.getElementById("emailError");

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var addressRegex = /^[a-zA-Z0-9 ,.-]{5,100}$/;
    var phoneRegex = /^[0-9]{10}$/;
    var pinRegex = /^[0-9]{6}$/;
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!name.value.match(nameRegex)) {
        alert("Name must be between 2 and 30 characters and can only contain letters and spaces.");
    }

    if (!address.value.match(addressRegex)) {
        alert("Address must be between 5 and 100 characters and can only contain letters, numbers, spaces, commas, periods, hyphens, and underscores.");
    } 

    if (!phone.value.match(phoneRegex)) {
        alert("Phone number must be 10 digits.");
    } 

    if (!pin.value.match(pinRegex)) {
        alert("Pin code must be 6 digits.");
    } 

    if (!email.value.match(emailRegex)) {
        alert("Enter valid email address.");
    } 

    if (!password.value.match(passwordRegex)) {
        alert("Enter Valid and Strong password.");
    } 

    if (name.value.match(nameRegex) && address.value.match(addressRegex) && phone.value.match(phoneRegex) && pin.value.match(pinRegex) && email.value.match(emailRegex)) {
        alert("Form submitted successfully!");
    }
});