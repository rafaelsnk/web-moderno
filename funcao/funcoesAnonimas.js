const soma = function (x, y) {
  return x + y
}

console.log(soma(7, 7));

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

imprimirResultado(3, 2);
imprimirResultado(3, 4, function (x, y) {
  return x - y
})