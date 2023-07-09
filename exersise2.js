function sumNumbers(arr) {
    let sum=0;
    for(let i = 0; i<=arr.length-1; i++) {
        sum += arr[i]
    }
    return sum;
}

arr = [1,2,3,4,5]

console.log(sumNumbers(arr))