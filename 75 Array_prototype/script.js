let a = {
    name: "Meet",
    id: "55",
    run: () => {
      alert("self run")
    }
  }
  
  console.log(a)
  
  let p = {
    run: () => {
      alert("run")
    },
    lang: "JavaScript"
  }
  
  a.__proto__ = p
  
  a.run()
  console.log(a.lang)