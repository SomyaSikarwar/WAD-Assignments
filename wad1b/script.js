var users = [];

function registration(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create user object
    var user = {
        name: name,
        age: age,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the data list page
    window.location.href = 'display.html';
}

document.getElementById('registrationForm').addEventListener('submit', registration);
