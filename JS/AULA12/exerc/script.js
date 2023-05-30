let titulo = document.getElementById("tituloPrin");

const mudaCor = () => {
    let valorH2 = document.getElementById("tituloPrin")
    valorH2.style.color = "silver";
}

const mudaCor2 = () => {
    let valorH2 = document.getElementById("tituloPrin");
    valorH2.style.color = "black";
}

const clicou = () => {
    let valorH2 = document.getElementById("tituloPrin");
    titulo.innerHTML = "Clicou!"
    valorH2.style.color = "black";
}