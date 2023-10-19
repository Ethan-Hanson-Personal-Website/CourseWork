const colors = ['red', 'blue', 'green'];

function addSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.classList.add('red');
    document.body.appendChild(square);
}

setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(colors[randomNumber]);
    addSquare();
}, 1000);
