const arr = [123, 23279, 129, 81, 280, 38236, 3, 23, 0, 93, 883]
const opa = []
let sum = 0
let arf = 0

arr.forEach((el) => {
    if (el > 250) {
        opa.push(el)
    }

})
opa.forEach((el) => {
    sum += el
})
arf = sum / opa.length

console.log(opa)
console.log(sum)
console.log(arf)