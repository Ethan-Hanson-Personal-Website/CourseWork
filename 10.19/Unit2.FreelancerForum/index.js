//initial freelancers
const freelancers = [
    { name: "Alice", occupation: "Writer", startingPrice: 30 },
    { name: "Bob", occupation: "Teacher", startingPrice: 50 }
];

//for displaying the average price
const averagePriceElement = document.getElementById("average-price");

// This function renders the list of freelancers on the webpage.
function renderFreelancers() {
    const freelancerList = document.getElementById("freelancer-list");
    freelancerList.innerHTML = ""; // Clear the list before re-rendering

    // Go through each freelancer and create a list item for them
    freelancers.forEach(freelancer => {
        const listItem = document.createElement("li");
        listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - Starting Price: $${freelancer.startingPrice}`;
        freelancerList.appendChild(listItem);
    });
}

//This function is for calculating the average price
function calculateAveragePrice() {
    const totalStartingPrice = freelancers.reduce((total, freelancer) => total + freelancer.startingPrice, 0);
    const averagePrice = totalStartingPrice / freelancers.length;
    return averagePrice.toFixed(2);
}

//this function is for adjusting the average price
function updateAveragePrice() {
    const averagePrice = calculateAveragePrice();
    averagePriceElement.textContent = `$${averagePrice}`;
}

//Function for Creating and adding a random freelancer
function addRandomFreelancer() {
    const names = ["Carol", "Dave", "Eve", "Frank"];
    const occupations = ["Designer", "Developer", "Artist", "Consultant"];
    const randomFreelancer = {
        name: names[Math.floor(Math.random() * names.length)],
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        startingPrice: Math.floor(Math.random() * 100) + 1 // Random price between 1 and 100
    };

    freelancers.push(randomFreelancer);
    renderFreelancers();
    updateAveragePrice();
}

renderFreelancers();
updateAveragePrice();

// Add a new random freelancer every few seconds
setInterval(addRandomFreelancer, 3000);
