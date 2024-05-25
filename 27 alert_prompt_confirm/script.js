alert("Script is working")
let name = prompt("Enter your name")
alert("Welcome "+name)
console.log(name+" is using this device")

let a = prompt("Enter 1st value")
a = Number.parseInt(a)
let b = prompt("Enter 2nd value")
b = Number.parseInt(b)
add = a+b
alert("Addition:"+add)

let write = confirm("Do you want to write it on the page?")
if(write==true){
  document.write(name+" is using this device")
  document.write(add)
}