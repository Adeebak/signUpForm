document.addEventListener("DOMContentLoaded", function () {
    const password = document.querySelector('#pswd');
    const confirmPassword = document.querySelector('#cpswd');
    const error = document.querySelector('#error');

    function checkPasswordMatch() {
        const passwordValue = password.value;
        const confirmPasswordValue = confirmPassword.value;

        if (passwordValue !== confirmPasswordValue) {
            error.innerHTML = "*passwords do not match";
        } else {
            error.innerHTML = "";
        }
    }
    password.addEventListener('input', checkPasswordMatch);
    confirmPassword.addEventListener('input', checkPasswordMatch);
});