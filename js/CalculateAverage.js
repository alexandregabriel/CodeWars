const find_average = array => array.reduce((acc, val) => acc+val , 0) / array.length

console.log(find_average([1,2,3,4]));