const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const container = document.querySelector('.container')

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  event.stopPropagation();
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  // const storage = [];
  if (username === 'nick' && password === 'nick1') {
    window.location.href = 'index.html'; 
  } else {
    alert('Invalid credentials');
  }
});


