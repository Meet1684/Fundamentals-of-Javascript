console.log("Conditional Operators")
console.log("if, else if, ternary")
console.log("")
console.log("If else Example")
console.log("")
let a = prompt("What is your age?")
a = Number.parseInt(a)
console.log("")
if (a <= 10) {
  alert("Your age is under 10")
}
else if (a > 11 && a <= 40) {
  alert("Your age is between 10 to 40")
}
else if (a > 40) {
  alert("Your age is greater than 40")
}
else {
  alert("Invalid Age !")
}
console.log("")
console.log("Ternary Example")
console.log("")
let marks = prompt("Enter Marks ")
let result = (marks >= 40) ? 'pass' : 'fail';
console.log("You " + result + " the exam")