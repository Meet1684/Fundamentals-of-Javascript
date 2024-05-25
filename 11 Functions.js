//Two ways to declare function
function sum(a, b){
    console.log("Sum of 2 numbers is ")
    return a+b
  }
  
  const square = (x, y)=> {
    console.log(x+" raised to "+y)
    return x**y
  }
  
  let n1 = prompt("Enter first number")
  let n2 = prompt("Enter second number")
  console.log("")
  
  console.log(sum(n1, n2));
  console.log("")
  console.log(square(n1, n2));