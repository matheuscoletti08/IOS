let codigoPromocional = prompt("Digite o código promocional (DESC1, DESC2, DESC3, DESC4 ou DESC5): ");
let valorProduto = 1000;

switch (codigoPromocional.toLowerCase()) {
    case "desc1":
      valorProduto *= 0.95;
      console.log("5% de desconto");
      break;
    case "desc2":
      valorProduto *= 0.9;
      console.log("10% de desconto");
      break;
    case "desc3":
      valorProduto *= 0.85;
      console.log("15% de desconto");
      break;
    case "desc4":
      valorProduto *= 0.8;
      console.log("20% de desconto");
      break;
    case "desc5":
      valorProduto *= 0.75;
      console.log("25% de desconto");
      break;
    default:
      console.log("Código promocional inválido.");
  }

if (codigoPromocional != "") {
  alert(`Valor original do produto: R$ 1000`);
  alert("Valor com desconto: R$ " + valorProduto.toFixed(2));
}