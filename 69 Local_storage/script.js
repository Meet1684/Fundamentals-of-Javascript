//ctrl+shift+j>application>localstorage

localStorage

const myObj = {
  "name": "Balvant",
  "id": "1684",
  "age": "19"
}

myObj = { name: "John", age: 31, city: "New York" };
const myJSON = JSON.stringify(myObj);

console.log(typeof myObj)
console.log(typeof myJSON)
localStorage.setItem("testJSON", myJSON);

localStorage.setItem("name", "Meet")
localStorage.setItem("id", "55")

localStorage.getItem("name", "id")

let key = prompt("Enter key")
let value = prompt("Enter value")

localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "blue"){
  localStorage.removeItem(key)
}

if(key == 0){
  localStorage.clear()
}

setTimeout(()=>{
  i = prompt("Enter index")
  alert(localStorage.key(i))
}, 6000)

localStorage.length