// Faça um programa que peça ao usuário para digitar um número inteiro. Se o número 
// for positivo, exiba uma mensagem informando que o número é positivo. Se o número for 
// negativo, exiba uma mensagem informando que o número é negativo. Se o número for 
// igual a zero, exiba uma mensagem informando que o número é zero. (Aplicar no Console).

var numero = parseInt(prompt("Digite um número:"));

if (numero > 0) {
  console.log("O número é positivo.");
} else if (numero < 0) {
  console.log("O número é negativo.");
} else {
  console.log("O número é zero.");
}