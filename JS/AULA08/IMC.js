function calcularIMC(peso, altura) {
    var imc = peso / (altura * altura);
    console.log(imc.toFixed(2));
  
    if (imc < 18.5) {
      console.log("Abaixo do peso ideal");
    } else if (imc >= 18.5 && imc <= 24.9) {
      console.log("Dentro do peso ideal");
    } else if (imc >= 25 && imc <= 29.9) {
      console.log("Acima do peso ideal");
    } else {
      console.log("Obeso");
    }
  }
  
  calcularIMC(70, 1.75);