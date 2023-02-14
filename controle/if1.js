function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Aprovado com a nota ' + nota);
  }
}

soBoaNoticia(1);
soBoaNoticia(9);

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdade... ' + valor);
  }
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
seForVerdadeEuFalo({ nome: 'Kamila' });