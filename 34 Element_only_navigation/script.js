const changeBodyColor = ()=>{
    let color = prompt("Enter the color:")
    console.log(document.body.style.background = color)
  }
  
  let a = document.body
  console.log("First child of a ", a.firstChild)
  console.log("First Element child of a ", a.firstElementChild)
  
  changeBodyColor()