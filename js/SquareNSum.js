// https://www.codewars.com/kata/515e271a311df0350d00000f

const squareSum = numbers => numbers.reduce((a, v) => a + (v ** 2) ,0)

console.log(squareSum([-8, 58, -19, 47, -98, -1]))