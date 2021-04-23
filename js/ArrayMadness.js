/* Given two integer arrays a, b, both of length >= 1, 
create a program that returns true if the sum of the squares of each element
 in a is strictly greater than the sum of the cubes of each element in b. 
 URL: https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1*/


 const arrayMadness = (a1, a2) => a1.reduce((a,v) => a + (v ** 2) ,0) > a2.reduce((a,v) => a + (v ** 3) ,0)

 console.log(arrayMadness([4,5,6],[1,2,3]));
 console.log(arrayMadness([5,6,7],[4,5,6]));
