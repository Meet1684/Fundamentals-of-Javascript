let x = new Promise(function(resolve, reject) {
    alert("This")
    resolve(55)
  })
  
  console.log("Hello 1")
  setTimeout(function() {
    console.log("(after 3 seconds)Hello 2")
  }, 3000)
  console.log("Hello 3")
  
  console.log(x)//prototype, state, result