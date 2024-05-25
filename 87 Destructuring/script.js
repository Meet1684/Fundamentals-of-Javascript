// let arr = [3, 5, 6, 8, 12, 15, 18, 21]
// let [a, b, c, ...rest] = arr
// console.log(a, b, c, ...rest)

// let [a, , ...rest] = arr
// console.log(a, ...rest)

// let {a, b} = {a:1, b:5}
// console.log(a, b)

let arr1 = [9, 6, 3]
let obj1 = {...arr1}
console.log(obj1)

function sum(v1, v2, v3){
  return v1+v2+v3
}

console.log(sum(...arr1))

let obj2 = {name:"Meet", company:"xyz pvt ltd", address:"xyz"}
console.log({...obj2, name:"John"})
console.log({name:"John", ...obj2, })