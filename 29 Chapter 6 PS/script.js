//Q1, Q2 & Q3

function canDrive(age){
    return age >= 18 ? true : false
  }
  
  let ask = true
  
  while(ask){
    let age = prompt("Enter age")
    age = Number.parseInt(age)
    if(age<0){
      console.error("Enter valid Age !")
    }
    
    if(canDrive(age)){
      alert("You can drive")
    }
    else{
      alert("Sorry, you can't drive")
    }
    ask = confirm("DO you want to see the prompt again?")
  }
  
  //Q4
  let num = prompt("Enter the number")
  num = Number.parseInt(num)
  
  if(num>4){
    location.href = "https://www.google.com"
  }
  
  //Q5
  let color = prompt("Enter the page background color")
  document.body.style.background = color