# Guided Practice - River Crossing

> A farmer is trying to get a wolf, a goat, and a cabbage across the river...

Maybe you've heard of a similar river crossing puzzle before? This guided practice has you building a much simpler version - the goal is to get all the sheep from one river bank to the other. How do you do it? By clicking on the sheep!

Before you start, take a look at the existing code. A lot has already been built for you so that you can focus on practicing working with events.

## Prompts

The answers can be viewed directly below the respective prompt. The `solution` branch contains the final code.

1. There's a form to add sheep to the page, but it currently doesn't do anything! Add an event listener to the form so that when it's submitted, the state of the starting bank is updated to include additional sheep according to the user input. Remember to rerender!

   <details>
   <summary>Show Answer</summary>

   ```js
   form.addEventListener("submit", addSheep);

   function addSheep(event) {
     event.preventDefault();

     const numSheep = form.elements.numSheep.value;
     for (let i = 0; i < numSheep; i++) {
       state.start.push("sheep");
     }

     render();
   }
   ```

   </details>

1. `render` currently contains logic only for rendering sheep on the starting bank. Complete the function so that sheep on the target bank are rendered as well.

   <details>
   <summary>Show Answer</summary>

   ```js
   function render() {
     // ...
     const targetSheep = state.target.map((sheep) => {
       const element = document.createElement("li");
       element.textContent = sheep;
       return element;
     });
     targetBank.replaceChildren(...targetSheep);
   }
   ```

   </details>

1. Add an event listener to each sheep that is rendered into the starting bank so that a sheep moves from the starting bank to the target bank when clicked. This should be accomplished by updating state.

   <details>
   <summary>Show Answer</summary>

   ```js
   function render() {
     const startingSheep = state.start.map(() => {
       // ...
       button.addEventListener("click", moveSheep);
       // ...
     });
   }

   function moveSheep() {
     const sheep = state.start.pop();
     state.target.push(sheep);

     // OR
     // state.target.push(state.start.pop());

     render();
   }
   ```

   </details>

## Extensions

If you're done early, try to implement one or more of the following features:

- Show visitors a congratulatory message when all sheep have been moved to the target bank.
- Add an intermediate step so sheep must be moved from the starting bank to the river before being moved to the target bank.
- Display to visitors many sheep have been moved to the target bank.
- Add a limit to how many sheep can be on the starting bank.
