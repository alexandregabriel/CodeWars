//Minha solução original

/* const makeNegative = n => n > 0 ? -n : n

console.log(makeNegative(0.12)); */

//Solução usando o Math.abs(n)

const makeNegative = n => n === 0 ? n : -Math.abs(n)
console.log(makeNegative(0));