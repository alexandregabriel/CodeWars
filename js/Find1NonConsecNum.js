//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

const firstNonConsecutive = arr => {
    let previous = arr[0];
    let first;
    for (let count = 0; count < arr.length; count++){
        if (previous === arr[count]){
            previous++
        }else{
            first = arr[count]
            break;
        }
    }
    return first !== undefined ? first : null
}

console.log(firstNonConsecutive([1,2,3,4,5,6,7,8]));