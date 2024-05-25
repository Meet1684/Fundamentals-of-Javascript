//Because of Javascript hoisting the below first two lines will execute without error
console.log(a)
try{
  console.log(b) // give error(let)
  console.log(c) // give error(const)
}
catch(e){
  console.log("Error !")
}
finally{
  greet()
  
  function greet() { // if the function is const or let then it will also throw an error
    console.log("Hey")
  }

  console.log(a)
  var a = 10;
  let b = 20;
  const c = 30;
}