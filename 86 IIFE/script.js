let a = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(456)
      }, 4000)
    })
  }

  let f
  
  (f = async () => {
  
    let b = await a()
    let c = await a()
    let d = await a()
    console.log(b, c, d)
  
  })()
  
  // (function(){
  //   ....
  // })()  //Wrap whole function in bracket and add "()" in last