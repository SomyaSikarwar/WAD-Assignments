// Retrieve the users array from local storage
var users = JSON.parse(localStorage.getItem('users'));

// Display the list of registered users
var userList = document.getElementById('userList');
if (users) {
    users.forEach(function(user) {
        var listItem = document.createElement('li');
        listItem.textContent = 'Name: ' + user.name + ', Email: ' + user.email;
        userList.appendChild(listItem);
    });
} else {
    // If there are no users in local storage, display a message
    var message = document.createElement('p');
    message.textContent = 'No users registered yet.';
    userList.appendChild(message);
}
