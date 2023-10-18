const inputDiv = document.getElelmentById('input-div');
const billInput = document.getElementById('bill-input');

billInput.addEventListener('focus', () => {
  inputDiv.classList.add('focus-outline-blue-500', 'focus-outline-2');
});

billInput.addEventListener('blur', () => {
  inputDiv.classList.remove('focus-outline-blue-500', 'focus-outline-2');
});