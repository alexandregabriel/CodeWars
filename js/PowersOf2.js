//https://www.codewars.com/kata/57a083a57cb1f31db7000028

const powersOfTwo = n => {
    let arr = [];
    for (let c=0; c <= n;c++){
        arr.push(2**c)
    }
    return arr;
}

console.log(powersOfTwo(2));