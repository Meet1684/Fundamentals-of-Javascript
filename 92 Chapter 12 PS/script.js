//Q1
const a = (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text)
      }, 2000)
    })
  }
  (
    async () => {
      let text = await a("Hello")
      console.log(text)
      text = await a("World")
      console.log(text)
    }
  )()
  
  //Q2
  function sum(a, b, c) {
    return a + b + c
  }
  
  let x = [1, 3, 5]
  console.log(sum(...x));
  
  //Q3
  (
    async () => {
      let text = await a("Resolve after 1 second", 1)
      console.log(text)
      text = await a("Resolve after 1 second", 1)
      console.log(text)
    }
  )()
  
  //Q4
  function simpleInterest(p, r, t){
    return p * r * t / 100;
  }
  
  console.log(simpleInterest(1000, 8, 1))