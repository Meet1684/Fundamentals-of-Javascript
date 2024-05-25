let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Value 1")
    }, 3000)
  })
  
  let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject(new Error("Second promise got an error"))
    }, 2000)
  })
  
  let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Value 3")
    }, 1000)
  })
  
  // p1.then((value)=>{
  //   console.log(value)
  // })
  
  // p2.then((value)=>{
  //   console.log(value)
  // })
  
  // p3.then((value)=>{
  //   console.log(value)
  // })
  
  // let p_all = Promise.all([p1, p2, p3])
  // p_all.then((value)=>{
  //   console.log(value)
  // })
  
  // let p_all = Promise.allSettled([p1, p2, p3])
  // let p_all = Promise.race([p1, p2, p3])
  // let p_all = Promise.any([p1, p2, p3])
  // let p_all = Promise.resolve(6)
  // let p_all = Promise.reject(new Error("Something went wrong !"))
  
  // p_all.then((value)=>{
  //   console.log(value)
  // })