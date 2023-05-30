let salaAula = ["Victor", "Samuel", "Bruno", "Day"]

// console.log(salaAula[0]);
// console.log(salaAula[1]);
// console.log(salaAula[2]);
// console.log(salaAula[3]);

const nomes =(nome, ind) => {
    return console.log (`Olá aluno: ${nome} esta na chamada num: ${ind}`);
}

salaAula.forEach((name, cham) => {
    nomes(name, cham);
});

let cores = ["Azul", "Amarelo", "Verde", "Marrom", "Bege"]

cores.forEach((item, num) => {
    console.log(`A cor da moda é: ${item}, de numero ${num}`)
})