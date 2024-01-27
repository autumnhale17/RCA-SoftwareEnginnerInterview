let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".input-form-section");

signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("input-form-section-move");
});

login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("input-form-section-move");
});

function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email === "email" && password === "password") {
        document.getElementById("message").innerHTML = "Login success. Redirecting";

    } else if (email === "" && password === "") {
        document.getElementById("message").innerHTML = "Please enter email and password.";
    } else {
        document.getElementById("message").innerHTML = "Invalid email or password. Please try again.";
    }
}

function validateSignup() {
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let passwordConfirm = document.getElementById("signupPasswordConfirm").value;

    if (password.length < 8) {
        document.getElementById("invalidMsg").innerHTML = "Password must be 8 or more characters.";
        return false;
    } if (!/[A-Z]/.test(password)) {
        document.getElementById("invalidMsg").innerHTML = "Password must contain an uppercase letter.";
        return false;
    } if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
        document.getElementById("invalidMsg").innerHTML = "Password must contain a special symbol.";
        return false;
    }
    if (password !== passwordConfirm) {
        document.getElementById("invalidMsg").innerHTML = "Passwords do not match.";
        return false;
    }
    else {
        document.getElementById("invalidMsg").innerHTML = " ";
        alert("Account created successfully. Redirecting.");
    }
}
