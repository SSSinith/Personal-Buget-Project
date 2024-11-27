
                const loginButton = document.getElementById("login-button");
                const emailInput = document.getElementById("email");
                const passwordinput = document.getElementById("password");
                const emailErrorContainer = document.getElementById("email-error-container");
                const passwordErrorContainer = document.getElementById("password-error-container");
            
                // Ensure errors are hidden on page load/reload
                window.addEventListener("load", function () {
                    emailErrorContainer.classList.add("hidden");
                    passwordErrorContainer.classList.add("hidden");
                });
            
                loginButton.addEventListener("click", function () {
                    let hasError = false;
            
                    // Check Email
                    if (!emailInput.value.trim()) {
                        emailErrorContainer.classList.remove("hidden");
                        hasError = true;
                    } else {
                        emailErrorContainer.classList.add("hidden");
                    }
            
                    // Check Password
                    if (!passwordInput.value.trim()) {
                        passwordErrorContainer.classList.remove("hidden");
                        hasError = true;
                    } else {
                        passwordErrorContainer.classList.add("hidden");
                    }
            
                    if (!hasError) {
                        alert("Form submitted successfully!");
                    }
                });
        