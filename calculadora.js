function calculadora(a, b, operador) {
    switch (operador) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            if (b === 0) {
                return "Error: División por cero";
            }
            return a / b;
        default:
            return "Error: Operador no válido";
    }
}

module.exports = calculadora;
