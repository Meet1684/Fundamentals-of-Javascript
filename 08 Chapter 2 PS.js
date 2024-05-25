//Q1
let age = prompt("Enter Your Age")
console.log("")
if (age > 10 && age < 20) {
  alert("Age is between 10 & 20")
}
else {
  alert("Age isn't between 10 & 20")
}
console.log("")

//Q2
console.log("")
let a = prompt("Enter number")
switch (a) {
  case '1':
    console.log("Entered 1")
    break
  case '2':
    console.log("Entered 2")
    break
  case '3':
    console.log("Entered 3")
    break
  default:
    console.log("Invalid case")
    break
}
console.log("")

//Q3
console.log("")
let n1 = prompt("Enter Number")
if (n1 % 2 == 0 && n1 % 3 == 0) {
  console.log("Number is divisible by 2&3")
}
else {
  console.log("Number isn't divisible by 2&3")
}
console.log("")

//Q4
console.log("")
let n2 = prompt("Enter Number")
if (n2 % 2 == 0 || n1 % 3 == 0) {
  console.log("Number is divisible by 2&3")
}
else {
  console.log("Number isn't divisible by 2&3")
}
console.log("")

//Q5
console.log("")
let b = prompt("Enter Age")
let c = b > 18 ? "You can drive" : "You can't drive"
console.log(c)