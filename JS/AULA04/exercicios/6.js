// Faça um programa que teste a idade do usuário. Se a idade digitada for maior ou 
// igual a 18, exiba a mensagem "Você pode dirigir". Caso contrário, exiba a mensagem "Você 
// ainda não pode dirigir".

var idade = parseInt(prompt("Qual a sua idade?"));
if (idade >= 18) {
    console.log("Você pode dirigir.");
  } else {
    console.log("Você ainda não pode dirigir.");
  }