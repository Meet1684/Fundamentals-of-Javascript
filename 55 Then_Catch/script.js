let a1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
      alert("Promise 1")
      resolve(true)
    }, 4000)
  })
  
  let a2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
      alert("Promise 2")
      reject(new Error("rejected"))
    }, 4000)
  })
  
  console.log(a1, a2)//pending
  
  // setTimeout(()=>{
  //     console.log(a1, a2)
  // }, 4000)
  
  a1.then((value)=>{
    console.log(value)
  })
  
  a1.catch((error)=>{
    console.log(error)
  })
  
  a2.then((value)=>{
    console.log(value)
  },(error)=>{
    console.log(error)
  })