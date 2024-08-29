// Placeholder data storage
let users = [];


const showSignUpButton = document.getElementById('showSignUpButton');
showSignUpButton.addEventListener('click', async  (e)=> {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.text();
    alert(result);
});

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');

    const showLoginButton = document.getElementById('showLoginButton');
    const showSignUpButtonL = document.getElementById('showSignUpButtonL');
    

    showLoginButton.addEventListener('click', function () {
        signUpForm.classList.add('d-none');
        loginForm.classList.remove('d-none');
    });

    showSignUpButtonL.addEventListener('click', function () {
        loginForm.classList.add('d-none');
        signUpForm.classList.remove('d-none');
    });
    

    
});


// Function to load external JS
function loadJS(url) {
    const script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}

// Load Bootstrap CSS
loadCSS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');

// Load Bootstrap JS and dependencies
loadJS('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js');

// Add form submission handler
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('loginForm').addEventListener('submit', function(event) {
//         event.preventDefault();
//         alert('Signed up successfully!');
//     });
// });



// function login() {
//     const username = document.getElementById('login-username').value;
//     const password = document.getElementById('login-password').value;

//     // Simple validation
//     if (username && password) {
//         // Find the user
//         const user = users.find(user => user.username === username && user.password === password);
//         if (user) {
//             alert('Login successful! Welcome, ' + username);
//             // Clear form fields
//             document.getElementById('login-form').reset();
//         } else {
//             alert('Invalid username or password.');
//         }
//     } else {
//         alert('Please fill in all fields.');
//     }
// }

const loginButton = document.getElementById('LoginButtonSubmit');
loginButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const loginusername = document.getElementById('loginUsername').value;
    const loginpassword = document.getElementById('loginPassword').value;

    const response = await fetch('http://localhost:3000/check', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginusername, loginpassword }),
    });
    // alert('logged up successfully!');

    const result = await response.text();
    alert(result);
    
});

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.getElementById('loginForm');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault(); // Prevent the default form submission
        
//         // Display a popup message
//         alert('Signed up successfully!');
//     });
// });
