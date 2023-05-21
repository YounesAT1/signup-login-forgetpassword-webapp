const form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    feedbackField = document.querySelector(".feed"),
    btn = document.querySelector(".btn");

function checkEmail() {
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaiPattern) || emailInput.value === "") {
        return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    emailInput.addEventListener("keyup", checkEmail);
    if (!emailField.classList.contains("invalid") || checkEmail()) {
        feedbackField.style.display = "flex";
        emailInput.value = "";
    }
});
