let button1 = document.getElementById("btn")

let x = function(e){
  console.log(e)
  console.log(e.type, e.clientX,e.clientY)
  alert("Hello World 1")
}

button1.addEventListener("click", x)

let y = function(e){
  console.log(e.target)
  alert("Hello World 2")
}

button1.addEventListener("click", y)

let ask = prompt("Enter number 2 to remove 1st clicklistener")

if(ask=="2"){
  button1.removeEventListener("click", x)
}