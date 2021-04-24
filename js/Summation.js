const summation = n => {
    let acc = 0;
    for (let i = 1;i<=n;i++){
        acc += i
    }
    return acc
}

console.log(summation(8))