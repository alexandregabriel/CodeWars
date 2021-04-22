//My firts solution:

/* const repeatStr = (repNum, char) => {
    let acc = char;
    for (let i = 1; i < repNum; i++){
        acc += char
    }
    return acc
}

console.log(repeatStr(6, "I")); */

// Cleverest solution (Using repeat(n))

const repeatStr = (repNum, char) => char.repeat(repNum)
console.log(repeatStr(6, "I"))