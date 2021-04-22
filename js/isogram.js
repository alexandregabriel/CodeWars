let isIsogram = (str) => str.toLowerCase().split('').every((it,i) => str.toLowerCase().indexOf(it) === i)

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram(""));