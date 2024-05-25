let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("not resolved")
      resolve(1)
    }, 2000)
  })
  
  p1.then(()=>{
    console.log("Hey")
  })
  
  p1.then(()=>{
    console.log("Promise is now resolved")
  })