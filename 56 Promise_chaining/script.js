// let p1 = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("resolved after 2 seconds")
//     resolve("Promise 1")
//   }, 2000)
// })

// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("Promise 2")
//     }, 2000)
//   })
//   return p2
// }).then((value)=>{
//   console.log(value)
//   let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve("Promise 3")
//     }, 2000)
//   })
//   return p3
// }).then((value)=>{
//   console.log(value)
//   let p4 = new Promise((resolve, reject)=>{
//     console.log("Done !")
//   })
//   return p4
// })

//loadScript Function

const loadScript = (src)=>{
    return new Promise((resolve, reject)=>{
      var script = document.createElement("script")
      script.type = "text/javascript"
      script.src = src
      document.body.appendChild(script)
      script.onload = ()=>{
        resolve("First script has been loaded")
      }
      script.onerror = ()=>{
        reject(0)
      }
    })
  }
  
  let p1 = loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
  p1.then((value)=>{
    console.log(value)
  }).catch((error)=>{
    ("Can't load the script")
  })
  
  setTimeout(()=>{
    let p2 = loadScript("https://code.jquery.com/index.js")
    p2.then((value)=>{
      console.log(value)
    }).catch((error)=>{
      console.log("Can't load the second script")
    }, 5000)
  })