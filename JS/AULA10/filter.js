let idadeCandidatos = [14, 15, 18, 27, 29, 43];

let alunosAprovados = idadeCandidatos.filter((idade) => {
    return idade >= 15 && idade <= 29;
});

console.log(alunosAprovados);