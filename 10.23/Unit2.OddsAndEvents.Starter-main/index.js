// References to HTML elements
const form = document.querySelector('form');
const numberBank = document.querySelector('#numberBank output');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');
const sortOneButton = document.querySelector('#sortOne');
const sortAllButton = document.querySelector('#sortAll');

// Store the numbers and sorted numbers
const numbers = [];
const oddNumbers = [];
const evenNumbers = [];


// Event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from refreshing the page.
  // TODO: Get the number from the input, add it to the number bank, and update the display.
  // Get the number from the input and add it to the number bank.
  const inputValue = form.elements.number.value;
  if (inputValue !== '') {
    numbers.push(parseInt(inputValue));
    numberBank.textContent = numbers.join(', ');
    form.elements.number.value = '';
  }
});

// Event listener for "Sort 1" button
sortOneButton.addEventListener('click', function () {
    // TODO: Sort one number from the number bank and move it to either "Odds" or "Evens."
    if (numbers.length > 0) {
      const number = numbers.shift();
      if (number % 2 === 0) {
        evenNumbers.push(number);
        evensOutput.textContent = evenNumbers.join(', ');
      } else {
        oddNumbers.push(number);
        oddsOutput.textContent = oddNumbers.join(', ');
      }
      numberBank.textContent = numbers.join(', ');
    }
  });



// Event listener for "Sort All" button
sortAllButton.addEventListener('click', function () {
  // TODO: Sort all numbers from the number bank into "Odds" and "Evens."
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    } else {
      oddNumbers.push(numbers[i]);
    }
  }
  evensOutput.textContent = evenNumbers.join(', ');
  oddsOutput.textContent = oddNumbers.join(', ');
  numbers.length = 0;
  numberBank.textContent = '';
});
