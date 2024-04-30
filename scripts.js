

const form = document.getElementById('imageForm');
const imageFile = document.getElementById('imageFile');
const firstname = document.getElementById('fname');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const imageData = imageFile.files[0];
  const name = firstname.value;

  // Ensure a file is selected
  if (!imageData) { 
    alert('Please select an image file to upload.');
    return;
  }

 
  const formData = new FormData();
  formData.append('file', imageData);
  formData.append('upload_preset', uploadPreset); // Use upload preset for transformations etc.

  fetch(cloudinaryUrl, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(`${apiKey}:${apiSecret}`)}`
    },
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Handle successful upload
    console.log('Image uploaded successfully:', data);
    // Access uploaded image URL: data.url or data.secure_url (depending on your preference)
    // Display the image or perform further actions based on the response
  })
  .catch(error => {
    console.error('Error uploading image:', error);
    // Handle upload errors (e.g., display error message to user)
  });
});
