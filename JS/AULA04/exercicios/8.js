// Atividades relacionais: crie um programa que solicite ao usuário que digite a sua 
// altura em metros e o seu peso em quilogramas. Em seguida, o programa deve calcular o 
// índice de massa corporal (IMC) do usuário usando a fórmula IMC = peso / altura*2 e 
// verificar se o IMC está dentro do intervalo saudável de 18,5 a 24,9. O programa deve 
// imprimir na tela se o IMC está dentro do intervalo saudável ou não.

// var altura = parseFloat(prompt("Digite sua altura em metros:"));
// var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

// var imc = peso / (altura * altura);

// if (imc >= 18.5 && imc <= 24.9) {
//   console.log("Seu IMC está dentro do intervalo saudável.");
// } else {
//   console.log("Seu IMC está fora do intervalo saudável.");
// }

let altura = parseFloat(prompt("Digite sua altura em metros: "));
let peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

let imc = peso / (altura * altura);

if (imc >= 18.5 && imc <= 24.9) {
  console.log("Seu IMC é " + imc.toFixed(2) + ", que está dentro do intervalo saudável.");
} else {
  console.log("Seu IMC é " + imc.toFixed(2) + ", que está fora do intervalo saudável.");
}