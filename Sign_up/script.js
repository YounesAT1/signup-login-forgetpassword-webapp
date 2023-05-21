const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword"),
    nameField = form.querySelector(".name-field"),
    nameInput = nameField.querySelector(".name"),
    phoneField = form.querySelector(".phone-field"),
    phoneInput = phoneField.querySelector(".phone");

// Email Validtion
function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern)) {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        const pInput = eyeIcon.parentElement.querySelector("input");
        if (pInput.type === "password") {
            eyeIcon.classList.replace("bx-hide", "bx-show");
            return (pInput.type = "text");
        }
        eyeIcon.classList.replace("bx-show", "bx-hide");
        pInput.type = "password";
    });
});

// Password Validation
function createPass() {
    const passPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passInput.value.match(passPattern)) {
        return passField.classList.add("invalid");
    }
    passField.classList.remove("invalid");
}

// Confirm Password Validtion
function confirmPass() {
    if (passInput.value !== cPassInput.value || cPassInput.value === "") {
        return cPassField.classList.add("invalid");
    }
    cPassField.classList.remove("invalid");
}

// Full Name Verification
function CheckFullName() {
    const Nregex = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
    if (!nameInput.value.match(Nregex)) {
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}

//Phone validation
function CheckPhoneNumber() {
    const phonregex = /^\+212 \s 6-\d{3}-\d{4}$/;
    if (!phoneInput.value.match(phonregex)) {
        return phoneField.classList.add("invalid");
    }
    phoneField.classList.remove("invalid");
}
// Calling Funtion on Form Sumbit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();
    CheckFullName();
    CheckPhoneNumber();

    //calling function on key up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);
    nameField.addEventListener("keyup", CheckFullName);
    phoneField.addEventListener("keyup", CheckPhoneNumber);

    if (
        !emailField.classList.contains("invalid") &&
        !passField.classList.contains("invalid") &&
        !cPassField.classList.contains("invalid") &&
        !nameField.classList.contains("invalid")
    ) {
    }
});
