const notas = [6.7, 7.4, 9.9, 9.8, 7.7];
for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Karine',
  sobrenome: 'Alvarez',
  idade: 23
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}