const inputField = document.getElementById("user-input");
const validateBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

// US phone number pattern
const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

// Validate the phone number
function validatePhoneNumber(phoneStr) {
  return phonePattern.test(phoneStr);
}

// Renders the message
function renderMessage(message, isValid) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  listItem.className = isValid ? "valid" : "invalid";
  output.appendChild(listItem);
}

// Handle the validation
function handleValidation() {
  const phone = inputField.value.trim();

  if (phone === "") {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validatePhoneNumber(phone);
  const msg = `${isValid ? "Valid" : "Invalid"} US number: ${phone}`;
  renderMessage(msg, isValid);
  inputField.value = "";
}

// Clears the results
function clearResults() {
  output.innerHTML = "";
}

// Handles the key presses
function handleKeyPress(e) {
  if (e.key === "Enter") {
    handleValidation();
  }
}

// Hook up the event listeners
validateBtn.addEventListener("click", handleValidation);
clearBtn.addEventListener("click", clearResults);
inputField.addEventListener("keydown", handleKeyPress);
