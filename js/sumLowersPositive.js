

function sumTwoSmallestNumbers(numArr) {  
    let ordenedArr = numArr.filter((e) => e > 0).sort((a,b) => a - b)
    return ordenedArr[0] + ordenedArr[1]
  }

  console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));