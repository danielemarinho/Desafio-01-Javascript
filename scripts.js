/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

* */

let number1 = prompt("Insira o 1º número")
let number2 = prompt("Insira o 2º número")

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2
const subtraction = number1 - number2
const multiplication = number1 * number2
const division = (number1 / number2).toFixed(2)
const restDivision = number1 % number2
const isEven = (sum % 2 == 0) ? "Par" : "Impar" 
const isEqual = (number1 === number2) ? "Iguais" : "Diferentes"

alert(`A soma dos números [${number1} e ${number2}] é ${sum} 
A subtração dos dois números é ${subtraction} 
A multiplicação dos dois números é ${multiplication} 
A divisão dos dois números é ${division} 
O resto da divisão dos dois números é ${restDivision}
A soma dos dois números é ${isEven} 
Os dois números inseridos são ${isEqual}.`)