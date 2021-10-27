fetch('/api/secure', {
    method: 'GET',
    headers: {
        'auth-token': localStorage.getItem('auth-token')
    }
});