const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();
    const loginDetails = {
        username: username.value,
        password: password.value
    };

    fetch('/secure/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginDetails)
    })
    .then(res => res.json())
    .then(response => {
        if(response.status === 'success') {
            localStorage.setItem('token', response.token);
            location.href = response.redirect;
        }
        else {
            alert('Please input right credentials');
        }
    });
});