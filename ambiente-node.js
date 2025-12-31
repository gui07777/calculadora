class Calculadora {
    constructor() {
        this.number1 = 20;
        this.number2 = 5;
        this.result = 0;
    }

    somar() {
        this.result = this.number1 + this.number2;
        console.log(this.result);
    }

    subtrair() {
        this.result = this.number1 - this.number2;
        console.log(this.result);
    }

    multiplicar() {
        this.result = this.number1 * this.number2;
        console.log(this.result);
    }

    dividir() {
        this.result = this.number1 / this.number2;
        console.log(this.result);
    }
}

const calculadora = new Calculadora();
calculadora.somar();
calculadora.subtrair();
calculadora.multiplicar();
calculadora.dividir();