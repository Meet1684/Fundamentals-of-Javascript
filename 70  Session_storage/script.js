window.onstorage = (e) => {
    alert("Changed")
    console.log(e)
  }
  
  sessionStorage.setItem("name", "Meet")
  sessionStorage.setItem("id", "55")
  sessionStorage.getItem("name", "id")
  sessionStorage.removeItem("id")
  sessionStorage.clear()
  sessionStorage.key(0)
  sessionStorage.length
  
  console.log(localStorage.setItem("name", "Meet Shukla"))
  
  setTimeout(() => {
    localStorage.clear()
    sessionStorage.clear()
  }, 5000)