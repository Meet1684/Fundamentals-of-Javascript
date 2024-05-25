/*nn bb ss u Primitives Data types
null number byte bigint string symbol undefined
*/

let a = null
let b = 20
let c = true
let d = BigInt(400)
let e = "Message"
let f = Symbol("a symbol")
let g = undefined // or
let G

console.log(a, b, c, d, e, f, g, G)
console.log(typeof c)

// Non-primitive Data type

const a1 = {
  /*"object1": value,
  "object2": value,*/
  "Meet": true,
  "Balvant": "bihari",
  "Mukesh": 56,
  "Ajay": null
}

console.log(a1["Balvant"])