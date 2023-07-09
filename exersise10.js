function sumNumbers(arr) {
    const sum = arr.reduce((o,n) => o+n )
    return sum
}

arr = [1,2,3,4,5]

console.log(sumNumbers(arr))
