// Add event listeners for the "Sign up" button
const signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", handleLogin);

// Function to handle the "Sign up" button click
function handleLogin() {
    event.preventDefault();
    updateJsonObject();
}

// Function to update JSON object display
function updateJsonObject() {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const contactphone = document.getElementById("contact-phone").value.trim();
    const age = document.getElementById("age").value.trim();
    const address = document.getElementById("address").value.trim();

    const jsonObject = {
        email,
        name,
        contactphone,
        age,
        address,
    };

    // Format the JSON object with line breaks and indentation
    const formattedJson = JSON.stringify(jsonObject, null, 2);

    // Display the formatted JSON object in the <pre> element
    const jsonOutput = document.getElementById("json-output");
    jsonOutput.textContent = formattedJson;
}