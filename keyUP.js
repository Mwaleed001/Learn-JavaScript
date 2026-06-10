
// Select the input field and the paragraph where text updates
let input = document.querySelector('input');


// 1. Live Typing Feature (keyup)
input.addEventListener('keyup', function(event) {
    let namePara = document.querySelector('p');
    if (input.value) {
        namePara.innerHTML = `hello, ${input.value}`;
    } else {
        namePara.innerHTML = 'hello, whoever you are';
    }
});