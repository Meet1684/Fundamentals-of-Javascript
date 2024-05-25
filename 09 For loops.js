
let n = prompt("Enter number")
let sum = 0
for(let i=0;i<=n;i++){//Use var in loops if necessary
  sum+=i
  console.log(i)
}
console.log("Sum of first "+n+" natural numbers is "+sum)
//console.log(i) Throws an error because let is block-scoped

let obj = {
  "Name":"Meet",
  "ID":1234,
  "Age":19
}

for(let a in obj){
  console.log(a+"="+obj[a])
}

let cars = ["Supra", "GTR", "Charger"]
for(let b of cars){
  console.log(b)
}