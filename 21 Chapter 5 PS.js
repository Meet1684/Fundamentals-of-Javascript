//Q1
let size = prompt("Enter Size")
size = Number.parseInt(size)
let arr1 = []
for (let i = 0; i < size; i++) {
  let element1 = prompt("Enter " + (i + 1) + " element")
  element1 = Number.parseInt(element1)
  arr1.push(element1)
}
//             or
// let arr2 = [1, 2, 3, 4, 5]
// let element1 = prompt("Enter element")
// element1 = Number.parseInt(element1)
// arr1.push(element1)

// console.log(arr1)
// console.log("")

// //Q2
// console.log("")
// let arr2 = [1, 2, 3, 4, 5]
// let element2 = prompt("Enter element")
// element2 = Number.parseInt(element2)

// while (element2 != 0) {
//   console.log("Add 0 !")
//   element2 = prompt("Enter element")
//   element2 = Number.parseInt(element2)
// }
// //             or
do {
  var element2 = prompt("Enter element")
  element2 = Number.parseInt(element2)
} while (element2 != 0)
console.log("")

// //Q3
console.log("")
let arr3 = [10, 22, 30, 40, 55]
let divbyten = arr3.filter((a) => {
  return a % 10 == 0
})
console.log(divbyten)
console.log("")

// //Q4
console.log("")
let arr4 = [5, 4, 3, 2, 1]
let square = arr4.map((a) => {
  return a ** 2
})
console.log(square)
console.log("")

// //Q5
console.log("")
let arr5 = [1, 2, 3, 4, 5, 6]
let fact = arr5.reduce((h1, h2) => {
  return h1 * h2
})
console.log(fact)
console.log("")