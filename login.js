document
  .getElementById('loginForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the username and password from form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // list of approved users
    const users = [
      { username: 'fabiano', password: '123456' },
      { username: 'somayeh', password: '7890123' },
    ];
    // check to see if user is legitimate
    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    // in case user and password are correct
    if (isValidUser) {
      // Save the login state in Chrome
      chrome.storage.sync.set({ loggedIn: true }, function () {
        // Redirect to colorpicker tool
        window.location.href = 'colorpicker.html';
      });
    }
    // send error message in case password is incorrect
    else {
      document.getElementById('status').textContent = 'WRONG PASSWORD!!!';
    }
  });

// chrome.storage.sync.get(['loggedIn'], function (data) {
//   if (data.loggedIn) {
//     document.addEventListener('click', function (event) {
//       const element = event.target;
//       const computedStyle = window.getComputedStyle(element);
//       const fontFamily = computedStyle.fontFamily;
//       alert(`Font: ${fontFamily}`);
//     });
//   }
// });
