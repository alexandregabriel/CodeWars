//Kata URL: https://www.codewars.com/kata/517abf86da9663f1d2000003
function toCamelCase(str){
    let arrayfy = str.split(/[-_]/g);
    const first = arrayfy.shift();
    for (const i in arrayfy){
        arrayfy[i] = arrayfy[i].charAt(0).toUpperCase().concat(arrayfy[i].slice(1));
    }
    return first + arrayfy.join('')
}

console.log(toCamelCase("the_stealth-warrior"));