const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // ignora
valores[4] = 10;
console.log(valores.length)
valores.push(11);
console.log(valores)
valores.pop();
console.log(valores);
delete valores[0]

console.log(valores)
console.log(typeof valores)
