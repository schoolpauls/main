function checkPassword() {
    const passwords = {
        'deepak': 'https://schoolpauls.github.io/students/deepaknishad10', 
        'priya': 'https://schoolpauls.github.io/students/priyapatel10', 
        'ananya': 'https://schoolpauls.github.io/students/ananyadeshmukh10',
        'aarav': 'https://schoolpauls.github.io/students/aaravsharma10',
        'rajkumar': 'https://schoolpauls.github.io/students/rajkumar10'
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
