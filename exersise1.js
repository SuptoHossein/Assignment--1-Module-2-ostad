function destructureExample (obj, arr) {
    const { name, age } = obj
    const [a,,b] = arr

    return {name, age}
}

const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10,20,30,40]

console.log(destructureExample(obj, arr))



