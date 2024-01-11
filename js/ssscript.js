// Get references to the modal and buttons
const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

// Event listener to open the modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Event listener to close the modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Event listener to close the modal if the overlay is clicked
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
