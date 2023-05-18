let tarefas = [
    {
      id: 1,
      texto: "Levar o lixo para fora",
      isCompleted: true,
    },
    {
      id: 2,
      texto: "Encontrar com o chefe",
      isCompleted: true,
    },
    {
      id: 3,
      texto: "Consulta no dentista",
      isCompleted: false,
    },
  ];
  
  console.log(tarefas);
  console.log(tarefas[1].texto);
  const texto = JSON.stringify(tarefas);
  console.log(texto);
  