const varNums = [1,2,2,3,3,4,4,5]
const varLetters = 'AAAABBBCCDAABBB'

const fixDuplicity = (value) => {
    let arr;
    if (typeof(value)  === "string") {
         arr = value.split('')
    }else{
        arr = value;
    }

    return arr.filter((e, i) => arr.indexOf(e) === i)
}

console.log(fixDuplicity(varNums));
console.log(fixDuplicity(varLetters));