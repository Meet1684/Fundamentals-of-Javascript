var msg = "this is string"
//var can be redeclared & updated
let num = 20
//let can't be redeclared but can be updated
const price = 150
//const can neither be redeclared nor updated

//let is recommended variable

console.log(msg)
console.log(num)
console.log(price)

var a = "first"
let b = "second"

{
  var a = "1st" //var is global-scoped
  console.log(a)
}
console.log(a)

{
  let b = "2nd" //let is block-scoped
  console.log(b)
}
console.log(b)
