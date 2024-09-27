const form = document.querySelector('form');
let username;

const handleFormSubmit = (e) => {
    e.preventDefault(); // stop the page from reloading

    let userInput = document.getElementById('username').value.trim();

    if (!userInput) return;

    username = formatUsername(userInput);

    alert(`Welcome, ${username}!`);
    localStorage.setItem('username', username);
    document.location.assign('./second.html');
}

form.addEventListener('submit', handleFormSubmit);
