class Calculadora {

    constructor() {

        this.screen = document.querySelector('.screen');

        this.number1 = document.querySelectorAll('.number').forEach(n => {
            n.addEventListener('click', () => {
                this.selectedNumber = n.textContent;
                this.screen.innerText += `${this.selectedNumber}`;
            })
        });

        this.number2 = document.querySelectorAll('.number').forEach(n => {
            n.addEventListener('click', () => {
                this.selectedNumber = n.textContent;
                this.screen.innerText += `${this.selectedNumber}`;
            })
        });

        this.symbol = document.querySelectorAll('.symbol').forEach(s => {
            s.addEventListener('click', () => {
                this.selectedSymbol = s.textContent;
                this.screen.innerText += `${this.selectedSymbol}`;
            })
        });

        this.result = 0;
    }

    somar() {
        this.result = this.number1 + this.number2;
    }

    subtrair() {
        this.result = this.number1 - this.number2;
    }

    multiplicar() {
        this.result = this.number1 * this.number2;
    }

    dividir() {
        this.result = this.number1 / this.number2;
    }

    exibir() {
        this.screen.textContent = 
    }

}

const calculadora = new Calculadora();

function somar() {
    calculadora.somar()
}
function subtrair() {
    calculadora.subtrair()
}
function multiplicar() {
    calculadora.multiplicar()
}
function dividir() {
    calculadora.dividir()
}