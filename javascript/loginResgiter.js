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
        document.querySelector('.overlay').style.visibility = 'hidden';
        clearField(0);
    })
}

const open = () => {
    const openLogin = document.querySelector('.login');
    openLogin.addEventListener('click',() => {
        document.querySelector('.form-section').style.display = 'flex';
        document.querySelector('.overlay').style.visibility = 'visible';    
    })
    const openButtonSidebar = document.querySelector('.login-sidebar');
    const burger = document.querySelector('.burger');
    const sidebar = document.querySelector(".sidebar");
    const navLink = document.querySelectorAll('.sidebar-content');
    const sidebarDiv = document.querySelector('.sidebar-div');
    openButtonSidebar.addEventListener('click',()=>{
        document.querySelector('.form-section').style.display = 'flex';
        document.querySelector('.overlay').style.visibility = 'visible';    
        sidebarDiv.style.visibility = "hidden";
        sidebar.classList.remove('menu-active');
        burger.classList.remove('toggle');
        navLink.forEach((e,index) => {
            if(e.style.animation){
                e.style.animation = "";
            }else{
                e.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.25}s`
            }
        })
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

window.addEventListener('load',() => {
    const userAccount = JSON.parse(localStorage.getItem('Account'));
    if(userAccount !== null){
        const loginButton = document.querySelector('.login');
        loginButton.style.display = 'none';
        const welcome = document.createElement('div');
        welcome.classList.add("welcome");
        const index = userAccount.username.indexOf('@');
        welcome.style.display = 'block';
        welcome.innerHTML = '<p>' + 'Welcome ' + userAccount.username.substring(0,index) + '</p>';
        document.querySelector('.menu').appendChild(welcome);

        
    }
})

const loginValidation = () => {
    const formLogin = document.querySelector(".login-form");
    const emailLoginField = formLogin.querySelector(".email");
    const emailLoginInput = emailLoginField.querySelector("input");
    const passwordLoginField = formLogin.querySelector(".password");
    const passwordLoginInput = passwordLoginField.querySelector("input");
    const errorTermsLogin = formLogin.querySelector('.error-terms-login');
    
    formLogin.onsubmit = (e) => {
        e.preventDefault(); 
        const currentAccount = JSON.parse(localStorage.getItem('Account'));
        if(emailLoginInput.value == "") {
            emailLoginField.classList.add("shake", "error") 
        }
        if(passwordLoginInput.value == "") {
            passwordLoginField.classList.add("shake", "error")
        }
        else if(currentAccount !== null){
            if(emailLoginInput.value !== currentAccount.username || passwordLoginInput.value !== currentAccount.password){
                errorTermsLogin.style.visibility = 'visible';
                setTimeout(() => {
                    errorTermsLogin.style.visibility = 'hidden';
                },5000)
            }
            else if(emailLoginInput.value === currentAccount.username && passwordLoginInput.value === currentAccount.password){
                document.querySelector('.form-section').style.display = 'none';
                document.querySelector('.overlay').style.visibility = 'hidden';
                clearField(0);
                const loginButton = document.querySelector('.login');
                loginButton.style.display = 'none';
                const welcome = document.createElement('div');
                welcome.classList.add("welcome");
                const index = currentAccount.username.indexOf('@');
                welcome.style.display = 'block';
                welcome.innerHTML = '<p>' + 'Welcome ' + currentAccount.username.substring(0,index) + '</p>';
                document.querySelector('.menu').appendChild(welcome);
            }
        }else{
            errorTermsLogin.style.visibility = 'visible';
            setTimeout(() => {
                errorTermsLogin.style.visibility = 'hidden';
            },5000)
        }

        emailLoginInput.addEventListener('keyup',() => {
            if(emailLoginInput == ''){
                emailLoginField.classList.add("error");
                emailLoginField.classList.remove("valid");
                const errorTxt = emailLoginField.querySelector(".error-txt");
                errorTxt.innerText = "Email cannot be empty";
            }else{
                emailLoginField.classList.remove("error");
                emailLoginField.classList.add("valid");
            }
        })

        passwordLoginInput.addEventListener('keyup',() => {
            if(passwordLoginInput == ''){
                passwordLoginField.classList.add('error');
                passwordLoginField.classList.remove('valid');
                const errorTxt = passwordLoginField.querySelector('.error-txt');
                errorTxt.innerText = 'Password cannot be empty';
            }
            else { 
                passwordLoginField.classList.remove('error');
                passwordLoginField.classList.add('valid');
            }   
        })

        setTimeout(() => { 
            emailLoginField.classList.remove("shake");
            passwordLoginField.classList.remove("shake");
        }, 500);
           
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
        if(emailInput.value == ''){
            emailField.classList.add("error");
            emailField.classList.remove("valid");
            const errorTxt = emailField.querySelector(".error-txt");
            errorTxt.innerText = "Email cannot be empty";
        }
        else if(!emailInput.value.endsWith('@mail.com')){
            emailField.classList.add("error");
            emailField.classList.remove("valid");
            const errorTxt = emailField.querySelector(".error-txt");
            (emailInput.value.length < 8) ? errorTxt.innerText = "Email length must be more than 8 characters" : errorTxt.innerText = "must ends with @mail.com";
        }
        else { 
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
                const account = {
                    username : emailInput.value,
                    password : passwordInput.value
                };
                localStorage.setItem("Account",JSON.stringify(account));
                const formContainer = document.querySelectorAll(".form-container");
                clearField(1);
                formContainer[1].classList.remove('active-form');
                formContainer[0].classList.add('active-form');
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