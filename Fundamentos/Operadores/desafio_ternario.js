const a = 8;
const b = 4;
const operacao = '*'; // + - * /

const resultado = operacao == "*" ? a * b 
                 : operacao == "+" ? a + b
                 : operacao == "-" ? a - b
                 : operacao == "/" ? a / b 
                 : "Coloque alguma variavel na operacao";

console.log(resultado);