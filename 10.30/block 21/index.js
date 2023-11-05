// Define the API URL and initialize the state
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/events`;

const state = {
  parties: [],
};

// Get references to HTML elements
const partyForm = document.querySelector("#partyForm");
const partyList = document.querySelector("#partyList");
const dateInput = document.querySelector("#dateInput");

// Render the initial list of parties
async function render() {
  await getParties();
  renderParties();
}
render();

// Function to fetch parties from the API
async function getParties() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    state.parties = json.data;
  } catch (error) {
    console.error(error);
  }
}

// Function to render the list of parties
function renderParties() {
  partyList.innerHTML = ""; // Clear the list before rendering
  state.parties.forEach((party) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${party.name}</strong>
      <p>Description: ${party.description}</p>
      <p>Date: ${party.date}</p>
      <p>Location: ${party.location}</p>
      <button data-id="${party.id}">Delete Party</button>
    `;
    partyList.appendChild(li);
  });
}

// Event listener to add a new party
partyForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Prepare the data to send
  const formData = new FormData(partyForm);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = key === 'date' ? new Date(value).toISOString() : value;
  });

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.error(`Failed to create a new party. Status: ${response.status}`);
      const errorData = await response.json(); e
      console.error(errorData);
      throw new Error("Failed to create a new party");
    }

    // Clear the form fields
    partyForm.reset();
    render();
  } catch (error) {
    console.error(error);
  }
});


// Event listener to delete a party
partyList.addEventListener("click", async (event) => {
  if (event.target.matches("button")) {
    const partyId = event.target.dataset.id;
    try {
      const response = await fetch(`${API_URL}/${partyId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the party");
      }

      render();
    } catch (error) {
      console.error(error);
    }
  }
});

// Initial rendering
render();