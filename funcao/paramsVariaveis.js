function soma() {
  let soma = 0;
  for (let i in arguments) {
    soma += arguments[i]
  }
  return soma
}

console.log(soma());
console.log(soma(1, 2));
console.log(soma(8, 9, 8, 7, 9, 8, 7, 4, 5, 8, 8));