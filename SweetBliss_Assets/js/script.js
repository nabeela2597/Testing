// ----------------------------
// Dark Mode
// ----------------------------
function darkMode() {
    document.body.classList.toggle("dark");
}

// ----------------------------
// Order Button
// ----------------------------
function orderCake(cakeName) {
    alert("Thank you for choosing " + cakeName + "!\n\nYour order request has been received.");
}

// ----------------------------
// Contact Form Validation
// ----------------------------
function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if(name === ""){
        alert("Please enter your name.");
        return false;
    }

    if(email === ""){
        alert("Please enter your email.");
        return false;
    }

    if(message === ""){
        alert("Please enter your message.");
        return false;
    }

    alert("Thank you, " + name + "!\n\nYour message has been sent successfully.");

    return true;
}