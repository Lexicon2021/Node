// forms
const signUpForm = document.querySelector('#sign-up-form');
const loginForm = document.querySelector('#login-form');

// Sign up inputs
const signUpName = document.querySelector('#sign-up-name');
const signUpEmail = document.querySelector('#sign-up-email');
const signUpPassword = document.querySelector('#sign-up-password');

// Login inputs
const loginEmail = document.querySelector('#email');
const loginPassword = document.querySelector('#password');

// error messages
const errorMsg = document.querySelector('#error');

signUpForm.addEventListener('submit', e => {
    e.preventDefault();
    const signUpDetails = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
    };

    fetch('/api/user/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpDetails)
    })
    .then(res => res.json())
    .then(response => { 
        if(response.error) {
            errorMsg.innerHTML = response.error;
        } else {
            console.log(response);
            errorMsg.innerHTML = '';
            localStorage.setItem('auth-token', response.token);
            location.href = response.redirect;
        }
    });
});

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const loginDetails = {
        email: loginEmail.value,
        password: loginPassword.value
    };

    fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
    .then(res => res.json())
    .then(response => {
        if(response.error) {
            errorMsg.innerHTML = response.error;
        } else {
            errorMsg.innerHTML = '';
            localStorage.setItem('auth-token', response.token);
            location.href = response.redirect;
        }
    });
});