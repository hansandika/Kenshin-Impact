const goRegister = () =>{
    const registerText= document.querySelector('#register-text');
    const formContainer = document.querySelectorAll(".form-container");
    registerText.addEventListener("click",() => {
        clearField(0);
        formContainer[0].classList.remove('active-form');
        formContainer[1].classList.add('active-form');
    })
}

const goLogin = () => {
    const loginText = document.querySelector('.return-login');
    const formContainer = document.querySelectorAll(".form-container");
    loginText.addEventListener('click',() => {
        clearField(1);
        formContainer[1].classList.remove('active-form');
        formContainer[0].classList.add('active-form');
    })
}

const close = () => {
    const closeButton = document.querySelector('.fa-times');
    closeButton.addEventListener('click',() => {
        document.querySelector('.form-section').style.display = 'none';
    })
}

const open = () => {
    const openLogin = document.querySelector('.login');
    openLogin.addEventListener('click',() => {
        document.querySelector('.form-section').style.display = 'flex';
    })
}

const clearField = (index) => {
    if(index === 0){
        const formLogin = document.querySelector(".login-form");
        const emailLoginField = formLogin.querySelector(".email");
        const emailLoginInput = emailLoginField.querySelector("input");
        const passwordLoginField = formLogin.querySelector(".password");
        const passwordLoginInput = passwordLoginField.querySelector("input");
        emailLoginInput.value = '';
        passwordLoginInput.value = '';
        const field = formLogin.querySelectorAll('.field');
        field.forEach(e => {
            if(e.classList.contains('error')){
                e.classList.remove('error');
            }else if(e.classList.contains('valid')){
                e.classList.remove('valid');
            }
        });
    }else{  
        const form = document.querySelector(".register-form");
        const emailField = form.querySelector(".email");
        const emailInput = emailField.querySelector("input");
        const passwordField = form.querySelector(".password");
        const passwordInput = passwordField.querySelector("input");
        const confirmPasswordField = form.querySelector('.confirm-password');
        const confirmPasswordInput = confirmPasswordField.querySelector('input');
        const termsAgreement = form.querySelector('#agree');
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value ='';
        if(termsAgreement.checked){
            termsAgreement.checked = false;
        }
        const field = form.querySelectorAll('.field');
        field.forEach(e => {
            if(e.classList.contains('error')){
                e.classList.remove('error');
            }else if(e.classList.contains('valid')){
                e.classList.remove('valid');
            }
        });
    }
}


const loginValidation = () => {
    const formLogin = document.querySelector(".login-form");
    const emailLoginField = formLogin.querySelector(".email");
    const emailLoginInput = emailLoginField.querySelector("input");
    const passwordLoginField = formLogin.querySelector(".password");
    const passwordLoginInput = passwordLoginField.querySelector("input");

    const checkEmail = () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailLoginInput.value.match(pattern)) { 
            emailLoginField.classList.add("error");
            emailLoginField.classList.remove("valid");
            const errorTxt = emailLoginField.querySelector(".error-txt");
            (emailLoginInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email cannot be empty";
        } else { 
            emailLoginField.classList.remove("error");
            emailLoginField.classList.add("valid");
        }
    }

    const checkPass = () => {
        if (passwordLoginInput.value == "") { 
            passwordLoginField.classList.add("error");
            passwordLoginField.classList.remove("valid");
        } else { 
            passwordLoginField.classList.remove("error");
            passwordLoginField.classList.add("valid");
        }
    }

    formLogin.onsubmit = (e) => {
        e.preventDefault(); 
        (emailLoginInput.value == "") ? emailLoginField.classList.add("shake", "error") : checkEmail();
        (passwordLoginInput.value == "") ? passwordLoginField.classList.add("shake", "error") : checkPass();
        setTimeout(() => { 
            emailLoginField.classList.remove("shake");
            passwordLoginField.classList.remove("shake");
        }, 500);
           
        emailLoginInput.addEventListener('keyup',() => {
            checkEmail();
        })

        passwordLoginInput.addEventListener('keyup',() => {
            checkPass();
        })
        // //if eField and pField doesn't contains error class that mean user filled details properly
        // if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        //     window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
        // }
    }
}

const registerValidation = () => {    
    const form = document.querySelector(".register-form");
    const emailField = form.querySelector(".email");
    const emailInput = emailField.querySelector("input");
    const passwordField = form.querySelector(".password");
    const passwordInput = passwordField.querySelector("input");
    const confirmPasswordField = form.querySelector('.confirm-password');
    const confirmPasswordInput = confirmPasswordField.querySelector('input');
    const termsAgreement = form.querySelector('#agree');
    const errorTerms = form.querySelector('.error-terms');

    const checkEmail = () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
        if (!emailInput.value.match(pattern)) {
            emailField.classList.add("error");
            emailField.classList.remove("valid");
            const errorTxt = emailField.querySelector(".error-txt");
            
            (emailInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email cannot be empty";
        } else { 
            emailField.classList.remove("error");
            emailField.classList.add("valid");
        }
    }

    const checkPass = () => {
        if (passwordInput.value == "") { 
            passwordField.classList.add("error");
            passwordField.classList.remove("valid");
        }else { 
            passwordField.classList.remove("error");
            passwordField.classList.add("valid");
        }
    }

    const checkConfirmPassword = () => {
        if (confirmPasswordInput.value == "") { 
            confirmPasswordField.classList.add("error");
            confirmPasswordField.classList.remove("valid");
        } else if(confirmPasswordInput.value !== passwordInput.value){
            confirmPasswordField.classList.add("error");
            confirmPasswordField.classList.remove("valid");
            const errorTxt = confirmPasswordField.querySelector(".error-txt");
            errorTxt.innerText = "Passwords do not match";
        } else { 
            confirmPasswordField.classList.remove("error");
            confirmPasswordField.classList.add("valid");
        }
    }


    form.onsubmit = (e) => {
        e.preventDefault();
        (emailInput.value == "") ? emailField.classList.add("shake", "error") : checkEmail();
        (passwordInput.value == "") ? passwordField.classList.add("shake", "error") : checkPass();
        (confirmPasswordInput.value == "") ? confirmPasswordField.classList.add("shake","error") : checkConfirmPassword();

        setTimeout(() => { 
            emailField.classList.remove("shake");
            passwordField.classList.remove("shake");
            confirmPasswordField.classList.remove("shake");
        }, 500);

        emailInput.addEventListener('keyup',() => {
            checkEmail();
        })

        passwordInput.addEventListener('keyup',() => {
            checkPass();
        })

        confirmPasswordInput.addEventListener('keyup',() => {
            checkConfirmPassword();
        })

        if(!emailField.classList.contains('error') && !passwordField.classList.contains('error') && !confirmPasswordField.classList.contains('error')){
            if(!termsAgreement.checked){
                errorTerms.style.visibility = "visible";
                setTimeout(()=>{
                    errorTerms.style.visibility = "hidden";
                },3500)
            }else{

            }
        }
    }
}

const appLogin = () => {
    goRegister();
    goLogin();
    loginValidation();
    registerValidation();
    open();
    close();
}

appLogin();