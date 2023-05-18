let veiculo1 = {
    nome: "Fusca",
    marca: "Volkswagen",
    cor: "Azul",
    ano: 1970,
  };
  
  let veiculo2 = {
    nome: "Gol",
    marca: "Volkswagen",
    cor: "Preto",
    ano: 2005,
  };

  let veiculo3 = {
    nome: "Marea Turbo",
    marca: "Fiat",
    cor: "Vermelho",
    ano: 2007,
    };


  let { nome: nome1, marca: marca1, cor: cor1, ano: ano1 } = veiculo1;
  let { nome: nome2, marca: marca2, cor: cor2, ano: ano2 } = veiculo2;
  let { nome: nome3, marca: marca3, cor: cor3, ano: ano3 } = veiculo3;
  

  if (ano1 < 2003) {
    console.log(`${nome1} não precisa pagar IPVA.`);
  } else {
    console.log(`${nome1} precisa pagar IPVA.`);
  }
  
  if (ano2 < 2003) {
    console.log(`${nome2} não precisa pagar IPVA.`);
  } else {
    console.log(`${nome2} precisa pagar IPVA.`);
  }

  if (ano3 < 2003) {
    console.log(`${nome3} não precisa pagar IPVA.`);
  } else {
    console.log(`${nome3} precisa pagar IPVA.`);
  }