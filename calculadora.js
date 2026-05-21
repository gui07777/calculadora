var screen = document.querySelector('.screen');
var result = 0;
var numbers = [];

var number1 = document.querySelectorAll('.number').forEach(n => {
    n.addEventListener('click', () => {
        this.selectedNumber = n.textContent;
        this.screen.innerText += `${this.selectedNumber}`;
        numbers.push(n.textContent)
        console.log(n.textContent)
        console.log(numbers)
    })
});

// this.number2 = document.querySelectorAll('.number').forEach(n => {
//     n.addEventListener('click', () => {
//         this. selectedNumber = n.textContent;
//         this.screen.innerText += `${this.selectedNumber}`;
//     })
// });

var symbol = document.querySelectorAll('.symbol').forEach(s => {
    s.addEventListener('click', () => {
        this.selectedSymbol = s.textContent;
        this.screen.innerText += `${this.selectedSymbol}`;
    })
});

function somar() {
    result = this.number1 + this.number2;
}

function subtrair() {
    result = this.number1 - this.number2;
}

function multiplicar() {
    result = this.number1 * this.number2;
}

function dividir() {
    result = this.number1 / this.number2;
}

function verifyOperation(symbol) {
    if (!symbol || symbol === '') return;

    switch (symbol) {
        case '+':
            somar()
        case '-':
            subtrair()
        case '*':
            multiplicar()
        case '/':
            dividir()
    }
}