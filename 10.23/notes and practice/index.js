const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    console.log(event);
    event.preventDefault();
    console.log('you submitted the form!')
}
)