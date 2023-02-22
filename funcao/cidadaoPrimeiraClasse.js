// criar de forma literal.
function fun1() {

}

console.log(fun1())

// armazenar em uma varável

const fun2 = function () {

}

// armazenar em um array

const array = [function (a, b) {
  return a + b
}]

console.log(array[0](2, 2));

// armazenar em um obj

const obj = {}
obj.falar = function () {
  return 'hello'
}

console.log(obj.falar());

// passar função como parametro
function run(fun) {
  fun()
}

run(function () {
  console.log('Executando...')
})

// uma função pode retornar / conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(2)