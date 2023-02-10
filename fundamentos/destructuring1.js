const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa // extraindo nome e idade do obj pessoa
console.log(nome, idade)
