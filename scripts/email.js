// // Get the form element
// const form = document.getElementById('emailForm');

// // Add event listener to the form submit event
// form.addEventListener('submit', (e) => {
//   e.preventDefault(); // Prevent form submission

//   // Get the email input value
//   const emailInput = document.getElementById('email');
//   const email = emailInput.value;

//   // Validate email address
//   if (!isValidEmail(email)) {
//     displayMessage('Please enter a valid email address.', 'error');
//     return;
//   }

//   // Your Mailchimp API endpoint URL
//   const url = 'https://your-mailchimp-api-endpoint-url';

//   // Prepare data to send to Mailchimp
//   const data = {
//     email_address: email,
//     status: 'subscribed'
//   };

//   // Make a POST request to Mailchimp API
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   })
//     .then((response) => {
//       if (response.ok) {
//         displayMessage('You have been successfully subscribed!', 'success');
//         form.reset(); // Reset the form
//       } else {
//         throw new Error('Failed to subscribe. Please try again.');
//       }
//     })
//     .catch((error) => {
//       displayMessage(error.message, 'error');
//     });
// });

// // Function to validate email address
// function isValidEmail(email) {
//   // Email validation logic here
//   // Return true if the email is valid, false otherwise
// }

// // Function to display a message on the page
// function displayMessage(message, type) {
//   // Display the message on the page
//   // You can use an alert, create a message element, or update a specific area on the page
//   // Customize the styling based on the message type (success, error, etc.)
// }

// // 01653150203a5162c6f7e2064aa3de4f-us21