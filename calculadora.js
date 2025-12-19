var number = document.querySelectorAll('.number');
var screen = document.querySelector('.screen');

number.forEach(n => {
    n.addEventListener('click', () => {
        let selectedNumber = n.textContent;
        screen.innerText = `${selectedNumber}`;
    })
})