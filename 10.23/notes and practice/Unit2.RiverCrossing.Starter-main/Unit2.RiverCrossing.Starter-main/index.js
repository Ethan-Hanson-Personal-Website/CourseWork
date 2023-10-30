// State
const state = {
  start: ["sheep"],
  target: [],
};

// References
const startingBank = document.querySelector("#startingBank ul");
const targetBank = document.querySelector("#targetBank ul");
const form = document.querySelector("form");

// TODO: Add event listener so that sheep are added when the form is submitted
form.addEventListener("submit", addSheep);

   function addSheep(event) {
     event.preventDefault();

     const numSheep = form.elements.numSheep.value;
     for (let i = 0; i < numSheep; i++) {
       state.start.push("sheep");
     }

     render();
   }


/**
 * Update the DOM to reflect the current state of the sheep
 */
function render() {
  // Render sheep on the starting bank
  const startingSheep = state.target.map((sheep) => {
    const element = document.createElement("li");
    element.textContent = sheep;
    return element;
  });
  targetBank.replaceChildren(...startingSheep);
}
    // TODO: Add event listener so the sheep moves when clicked
    // const targetSheep = state.target.map((sheep) => {
    //   const element = document.createElement("li");
    //   element.textContent = sheep;
    //   return element;
    // });
    // targetBank.replaceChildren(...targetSheep);
  

  // TODO: Render sheep on the target bank
  function moveSheep() {
    const sheep = state.start.pop();
    state.target.push(sheep);
    render();
  }

