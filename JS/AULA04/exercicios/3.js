// Aplicando métodos. 
// • Crie uma variável com o seu nome; 
// • Utilizando o método Insert insira o seu nome do meio, depois do seu nome em uma 
// nova variável; 
// • Depois utilizando o método Replace troque o seu nome do meio pelo último 
// sobrenome; 
// • Crie uma string para apresentar o resultado. 

var meuNome = "João";
var nomeMeio = "da Silva";
var novoNome = meuNome.concat(" ", nomeMeio);
var sobrenome = "Santos";
var resultado = novoNome.replace(nomeMeio, sobrenome);
console.log(resultado);