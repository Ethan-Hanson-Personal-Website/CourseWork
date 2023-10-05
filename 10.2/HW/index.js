// Function to process user input and display the table in the console
function processInput() {
    // Get the user input
    const inputElement = document.getElementById('flavorsInput');
    const userInput = inputElement.value;

    // Split the input string into an array of flavors
    const flavors = userInput.split(',');

    // Create an object to track the count of each flavor
    const flavorCount = {};

    // Iterate through the flavors and update the count
    for (const flavor of flavors) {
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    }

    // Display the result in the console as a table
    console.table(flavorCount);
}
