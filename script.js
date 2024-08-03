let attempt = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userID = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Example credentials
    const correctUserID = 'user123';
    const correctPassword = 'password123';

    if (userID === correctUserID && password === correctPassword) {
        alert('Login successful!');
        message.textContent = '';
        attempt = 0;  // reset attempt count on successful login
    } else {
        attempt++;
        if (attempt >= 3) {
            message.textContent = 'Account locked. Too many failed attempts.';
            document.getElementById('userid').disabled = true;
            document.getElementById('password').disabled = true;
            document.querySelector('button').disabled = true;
        } else {
            message.textContent = `Incorrect credentials. ${3 - attempt} attempt(s) remaining.`;
        }
    }
});
