require('dotenv').config();
// Retrieve encoded name and image from local storage
const encodedName = localStorage.getItem('encodedName');
const imageData = localStorage.getItem('imageData');

// Decode name from Base64
const name = atob(encodedName);

// Display name and image
document.getElementById('name').textContent = name;
document.getElementById('image').src = URL.createObjectURL(imageData);
