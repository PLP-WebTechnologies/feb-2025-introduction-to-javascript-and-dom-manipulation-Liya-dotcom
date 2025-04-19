// Select the button and container
const toggleButton = document.getElementById('toggleButton');
const container = document.getElementById('container');

// Track whether the element is added
let isElementAdded = false;

// Add event listener to the button
toggleButton.addEventListener('click', () => {
  if (!isElementAdded) {
    // Create a new element
    const newElement = document.createElement('p');
    newElement.id = 'dynamicElement';
    newElement.textContent = 'This is a dynamically added element.';
    
    // Append the new element to the container
    container.appendChild(newElement);
    toggleButton.textContent = 'Remove Element';
    isElementAdded = true;
  } else {
    // Remove the element if it exists
    const existingElement = document.getElementById('dynamicElement');
    if (existingElement) {
      container.removeChild(existingElement);
    }
    toggleButton.textContent = 'Add Element';
    isElementAdded = false;
  }
});