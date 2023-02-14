function getInteiroAletorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;

do {
  opcao = getInteiroAletorioEntre(-1, 10);
  console.log(`Valores sorteados ${opcao}`)
} while (opcao != -1)