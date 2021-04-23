const positiveSum = (arr) => arr.filter(e => e > 0).reduce((acc,at) => acc+at , 0)
console.log(positiveSum([-1,-2,-3,-4,-5,9,60,35,-89]));