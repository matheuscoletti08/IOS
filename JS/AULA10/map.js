const valores = [
    {   profuto: "cel",
        valor: 1500,
    },
    {   profuto: "tv",
        valor: 1000,
    },
    {   profuto: "pc",
        valor: 5000,
    },

];
let novosValores = valores.map((nv) => nv.valor * 1.5)
console.log(novosValores);

