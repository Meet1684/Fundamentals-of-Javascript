function f(){
    try{
      let a = 0
      let str = hey
      console.log("No errors found")
      return
    }
    catch(err){
      console.log("This is an error !")
      console.log(p)
    }
    finally{
      console.log("code inside finally will always execute")
    }
    }
    
    f()
    console.log("End")