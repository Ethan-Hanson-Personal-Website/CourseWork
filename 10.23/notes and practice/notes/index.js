const form = document.querySelector('form');
const input = document.querySelector('input');

const words = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    words.push(input.value);
    input.value = '';
    console.log('words');
})

function render(){
    const sentenceEl =document.querySelector('#sentence');
    const sentence = words.join(' ') + '.';
    sentenceEl.textContent = sentence;
}

//const increaseButton = document.querySelector('#counter').te