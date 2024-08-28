// Placeholder data storage
let users = [];

function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simple validation
    if (username && email && password) {
        // Check if the username is already taken
        const existingUser = users.find(user => user.username === username);
        if (existingUser) {
            alert('Username is already taken.');
        } else {
            // Store the new user
            users.push({ username, email, password });
            alert('Signup successful! You can now log in.');
            // Clear form fields
            document.getElementById('signup-form').reset();
        }
    } else {
        alert('Please fill in all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Simple validation
    if (username && password) {
        // Find the user
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            alert('Login successful! Welcome, ' + username);
            // Clear form fields
            document.getElementById('login-form').reset();
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill in all fields.');
    }
}
