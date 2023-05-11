// Utilizando os conceitos apresentados, pergunte ao usuário. 
// • Qual o nome do usuário; 
// • Qual sua idade; 
// • Bairro onde mora; 
// • Passe o nome do usuário para todas as letras em maiúscula. 
// • Crie um programa que solicite ao usuário que digite dois números inteiros e exiba o 
// resultado da soma desses números na tela. 

var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual a sua idade?");
var bairro = prompt("Em qual bairro você mora?");

console.log("Nome em maiúsculas: " + nome.toUpperCase());

var num1 = parseInt(prompt("Digite o primeiro número:"));
var num2 = parseInt(prompt("Digite o segundo número:"));
var resultado = num1 + num2;
console.log("O resultado da soma é: " + resultado);