// async function hey(){
// let gujaratWeather = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("31 Degree")
//   }, 2000)
// })

// let rajasthanWeather = new Promise((resolve, reject)=>{
//   setTimeout(()=>{
//     resolve("39 Degree")
//   }, 5000)
// })
//   console.log("Weather")
//   /*gujaratWeather.then(alert)
//   rajasthanWeather.then(alert)*/
//   let gW = await gujaratWeather
//   let rW = await rajasthanWeather
//   return [gW, rW]
// }
// let a = hey()
// a.then((value)=>{
//   console.log(value)
// })

//              Second Example
const apple = async()=>{
    console.log("First message without any timeout")
    setTimeout(()=>{
      console.log("This message will be printed after 5s")
    }, 5000)
  }
  
  const pineapple = async()=>{
    console.log("This will not wait if await is used")
  }
  
  const main1 = async()=>{
    let a = await apple()
    let b = await pineapple()
    // let a = apple()
    // let b = pineapple()
  }
  
  main1()