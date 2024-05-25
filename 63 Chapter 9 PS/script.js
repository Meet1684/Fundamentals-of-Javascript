// const loadScript = (src)=>{
//     return new Promise((resolve, reject)=>{
//     var script = document.createElement("script")
//     script.src = src
//     script.onload = ()=>{
//       resolve(src)
//     }
//     document.head.append(script)
//   })
// }

// //Q1
// let a = loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
// a.then((value)=>{
//   console.log(value)
// })

// //Q2
// const main1 = async ()=>{
//   console.log(new Date().getMilliseconds())
//   let a = await loadScript("https://code.jquery.com/jquery-3.3.1.slim.min.js")
//   console.log(a)
//   console.log(new Date().getMilliseconds())
// }

// main1()

// //Q3
// let p = ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       reject(new Error("You got an error !"))
//     }, 3000)
//   })
// }

// let a = async ()=>{
//   try{
//     await p()
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// a()

//Q4
// let p1 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(10)
//     }, 2000)
//   })
// }
// let p2 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(20)
//     }, 1000)
//   })
// }
// let p3 = async ()=>{
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       resolve(30)
//     }, 3000)
//   })
// }

// const run = async ()=>{
//   console.time("run")
// //   let a1 = await p1()
// //   let a2 = await p2()
// //   let a3 = await p3()
//   let a1 =  p1()
//   let a2 =  p2()
//   let a3 =  p3()
// let all = await Promise.all([a1, a2, a3])//all promises run parallel
// console.log(all)
//   // console.log(a1, a2, a3)
//   console.timeEnd("run")
// }

// run()