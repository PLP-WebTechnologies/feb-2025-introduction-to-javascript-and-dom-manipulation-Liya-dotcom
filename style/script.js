// Select the toggle button and the container elements from DOM
const toggleButton = document.getElementById('toggleButton');
const container = document.getElementById('container');

// Track whether the element is added to the DOM
let isElementAdded = false;

// Add an event listener to the toggle button
toggleButton.addEventListener('click',() => {
    if (!isElementAdded) {
        // Create a new element
        const newElement = document.createElement('p');
        newElement.id = 'dynamicelement';
        newElement.textContent = 'This is a dynamicallt added element!';

        // Append the new element to the container
        container.appendChild(newElement);
        toggleButton.textContet = 'Remove Element';
        isElementAdded = true;


        // 
    }
    else {
        // Remove element if it exists
        const existingElement = document.getElementById('dynamicelement');
        if (existingElement) {
            container.removeChild(existingElement);
        }
    }
    // Toggle the button text
    toggleButton.textContent = 'Add Element';
    isElementAdded = false;
});
