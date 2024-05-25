function connection() {
    setTimeout(() => {
      console.log("Connecting to server...")
    }, 1000)
  
    setTimeout(() => {
      console.log("Sucessfully connected")
    }, 2000)
  
    setTimeout(() => {
      console.log("Fetching Data...")
    }, 3000)
  }
  
  function data_fetch() {
    try {
      console.log(Data)
    }
    catch (error) {
      setTimeout(() => {
        console.error("Unable to fetch data please refresh the page !")
      }, 6000)
    }
  }
  
  connection()
  data_fetch()