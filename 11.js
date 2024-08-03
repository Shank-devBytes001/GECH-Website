let attempt = 0;
const maxAttempts = 3;
const blockDuration = 5 * 60 * 1000; // Set the lock duration to 5 minutes in milliseconds.

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userID = document.getElementById('userid').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const blockedUntil = localStorage.getItem(`${userID}_blockedUntil`);
    const currentTime = new Date().getTime();

    if (blockedUntil && currentTime < blockedUntil) {
        const remainingTime = blockedUntil - currentTime;
        startCountdown(remainingTime);
        return;
    }

    // Example credentials
    const correctUserID = 'user123';
    const correctPassword = 'password123';

    if (userID === correctUserID && password === correctPassword) {
        alert('Login successful!');
        window.location.href = 'a1main.html';
        message.textContent = '';
        attempt = 0;  // reset attempt count on successful login
    } else {
        attempt++;
        if (attempt >= maxAttempts) {
            const lockUntil = currentTime + blockDuration;
            localStorage.setItem(`${userID}_blockedUntil`, lockUntil);
            message.textContent = 'Account locked. Too many failed attempts.';
            document.getElementById('userid').disabled = true;
            document.getElementById('password').disabled = true;
            document.querySelector('button').disabled = true;
            startCountdown(blockDuration);
        } else {
            message.textContent = `Incorrect credentials. ${maxAttempts - attempt} attempt(s) remaining.`;
        }
    }
});

function startCountdown(duration) {
    const message = document.getElementById('message');
    let remainingTime = duration;

    const interval = setInterval(() => {
        const minutes = Math.floor(remainingTime / 60000);
        const seconds = Math.floor((remainingTime % 60000) / 1000);
        message.textContent = `Account locked. Try again in ${minutes}m ${seconds}s.`;

        remainingTime -= 1000;

        if (remainingTime <= 0) {
            clearInterval(interval);
            message.textContent = 'You can now try logging in again.';
            document.getElementById('userid').disabled = false;
            document.getElementById('password').disabled = false;
            document.querySelector('button').disabled = false;
        }
    }, 1000);
}











let attempt = 0;
const maxAttempts = 3;
const blockDuration = 5 * 60 * 1000; // Set the lock duration to 5 minutes in milliseconds.

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const userID = document.getElementById('userid').value;

    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const blockedUntil = localStorage.getItem(`${userID}_blockedUntil`);
    const currentTime = new Date().getTime();

    if (blockedUntil && currentTime < blockedUntil) {
        message.textContent = 'Account locked. Try again later.';
        return;
    }

    // Example credentials
    const correctUserID = 'user123';
    const correctPassword = 'password123';

    if (userID === correctUserID && password === correctPassword) {
        alert('Login successful!');
        window.location.href = 'a1main.html';
        message.textContent = '';
        attempt = 0;  // reset attempt count on successful login
    } else {
        attempt++;
        if (attempt >= maxAttempts) {
            const lockUntil = currentTime + blockDuration;
            localStorage.setItem(`${userID}_blockedUntil`, lockUntil);
            message.textContent = 'Account locked. Too many failed attempts.';
            document.getElementById('userid').disabled = true;
            document.getElementById('password').disabled = true;
            document.querySelector('button').disabled = true;
        } else {
            message.textContent = `Incorrect credentials. ${maxAttempts - attempt} attempt(s) remaining.`;
        }
    }
});
