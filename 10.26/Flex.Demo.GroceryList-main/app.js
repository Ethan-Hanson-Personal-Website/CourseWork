// ******* STATE *******
  const state = {
    groceries: [
      { name: "apple", quantity: 2, price: 1.75 },
      { name: "banana", quantity: 4, price: 0.25 },
    ],
  };
const items = [
  { name: "apple", price: 1.75 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 1.0 },
  { name: "broccoli", price: 3.0 },
  { name: "cucumber", price: 1.0 },
  { name: "carrot", price: 1.0 },
  { name: "milk", price: 5.75 },
  { name: "cheddar cheese", price: 4.0 },
  { name: "sourdough loaf", price: 5.5 },
  { name: "eggs", price: 4.0 },
  { name: "cereal", price: 3.5 },
  { name: "rice", price: 5 },
];

// ******* REFERENCES *******
const form = document.querySelector(".grocery-form");
const tableBody = document.getElementById("table-body");
const clearButton = document.querySelector(".clear-btn");
const addInput = document.getElementById("grocery-input");
const totalQty = document.querySelector("#total-qty"); 
const totalPrice = document.querySelector("#total-price"); 


//console.log("body: ", body);

// ******* EVENT LISTENERS *******
//add button adds new items to the list
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page.

  // Get the input value from the form.
  const inputValue = form.elements.grocery.value;

  // Generate random quantity and price for the new grocery item.
  const qty = Math.floor(Math.random() * 10);
  const price = Math.floor(Math.random() * 5) + 1;

  const itemFound = items.find(item => item.name === inputValue.toLowerCase());

  if (itemFound) {
    state.groceries.push({name: itemFound.name, quantity: qty, price: price});
  }

  // Add the new grocery item to the state.
  if(inputValue.length > 0){
  state.groceries.push({ name: inputValue, quantity: qty, price: price });
  }
  else{
    alert("Please Add a Real Item")
  }

  // Clear the input field.
  addInput.value = "";

  // Call render to update the displayed grocery list.
  render();
});
  

  render();

  

clearButton.addEventListener("click", (event) => {
    
});
render();

// ******* RENDER *******
function render() {
  const rowItems = state.groceries.map((items) => {
    const newRow = document.createElement("tr");

    const name = document.createElement("td");
    name.textContent = items.name;

    const qty = document.createElement("td");
    qty.textContent = items.quantity;

    const price = document.createElement("td");
    price.textContent = items.price * items.quantity;

    newRow.replaceChildren(name, qty, price);
    return newRow;
  });

  tableBody.replaceChildren(...rowItems);

  const newTotalQty = calculateTotalQty();
  totalQty.textContent = newTotalQty;

  
  const newTotalPrice = `$${calculateTotalPrice().toFixed(2)}`;
  totalPrice.textContent = newTotalPrice;
}


// ******* FUNCTIONS ******
function calculateTotalPrice(){
  const totalPrice = state.groceries.reduce((accum, item) => accum + (item.price * item.quantity), 0);
  return totalPrice;
  // let total = 0;

  // for(let i = 0; i < state.groceries.length; i++) {
  //   const item = state.groceries[i];
  //   total += item.price * item.quantity;
  // }
}

function calculateTotalQty(){
  const total = state.groceries.reduce((accum, item) => accum + item.quantity, 0
  );
  return total;
}
