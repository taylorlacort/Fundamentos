function primeiroFattorial(numero) {
  let a = 1;
  for (let b = 2; b <= numero; b++) {
    a *= b
  }
  return a
}

console.log(primeiroFattorial(4))