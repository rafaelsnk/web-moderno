const sistemaOperacional = 'Linux';

console.log(sistemaOperacional.charAt(4));
console.log(sistemaOperacional.charAt(5)); //retorna vazio
console.log(sistemaOperacional.charCodeAt(3)) // busca o valor na tabela unicode
console.log(sistemaOperacional.indexOf(3)) // não tem o index 3
console.log(sistemaOperacional.substring(1)) // faz a busca a partir da posição 1
console.log(sistemaOperacional.substring(0, 3)) // faz a busca a partir do índice 0, mas não adiciona o índice 3
console.log("GNU / ".concat(sistemaOperacional)) // faz a concatenação
console.log(sistemaOperacional.replace('Linux', 'Windows')); // faz a substituição
console.log('Ana, Maria, Carlos'.split(",")); // gera um array