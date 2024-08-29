document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');

    const showLoginButton = document.getElementById('showLoginButton');
    const showSignUpButtonL = document.getElementById('showSignUpButtonL');
    const loginButton = document.getElementById('loginButton');
    const showSignUpButton = document.getElementById('showSignUpButton');

    // Toggle between login and sign-up forms
    showLoginButton.addEventListener('click', function () {
        signUpForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
    });

    showSignUpButtonL.addEventListener('click', function () {
        loginForm.classList.add('d-none');
        signUpForm.classList.remove('d-none');
    });

    // Signup button click event
    showSignUpButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            try {
                const response = await fetch('http://localhost:3000/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });

                const result = await response.text();
                alert(result);
            } catch (error) {
                console.error('Error during signup:', error);
                alert('Signup failed. Please try again.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Login button click event
    loginButton.addEventListener('click', async (e) => {
        e.preventDefault();

        const loginUsername = document.getElementById('loginUsername').value;
        const loginPassword = document.getElementById('loginPassword').value;

        if (loginUsername && loginPassword) {
            try {
                const response = await fetch('http://localhost:3000/check', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: loginUsername, password: loginPassword }),
                });

                const result = await response.text();
                alert(result);
            } catch (error) {
                console.error('Error during login:', error);
                alert('Login failed. Please try again.');
            }
        } else {
            alert('Please fill in all fields.');
        }
    });
});

// Function to load external JS
function loadJS(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

// Function to load external CSS
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Load Bootstrap CSS
loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

// Load Bootstrap JS and dependencies
loadJS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');
