function checkPassword() {
    const passwords = {
        'deepak': 'https://www.google.co.in/', 
        'priya': 'https://www.example.com/', 
        'ananya': 'https://www.example.org/',
        'aarav': 'https://www.example.com/',
        'rajkumar': 'https://www.example.com/'
    };

    const inputPassword = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    if (passwords[inputPassword]) {
        window.location.href = passwords[inputPassword];
    } else {
        messageDiv.textContent = 'Incorrect password, please try again.';
        document.getElementById('password').value = ''; 
    }
}