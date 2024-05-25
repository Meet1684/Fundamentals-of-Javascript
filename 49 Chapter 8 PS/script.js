//Q1
// let a = document.getElementById("btn1")
// a.onclick = () => {
//   onclick = alert("First button pressed")
//   console.log("First button pressed")
// }

// let b = document.getElementById("btn2")
// b.onclick = () => {
//   onclick = alert("Second button pressed")
//   console.log("Second button pressed")
// }

// let c = document.getElementById("btn3")
// c.onclick = () => {
//   onclick = alert("Third button pressed")
//   console.log("Third button pressed")
// }

//Q3
// let x = document.getElementsByClassName("bookmarks")
// x[0].addEventListener("click", function() {
//   location.href = "https://www.google.com/"
// })

// x[1].addEventListener("click", function() {
//   window.location = "https://www.twitter.com/"
// })

// x[2].addEventListener("click", function() {
//   location.href = "https://www.facebook.com/"
// })

//Q4
// const fetchContent = async(url)=>{
//   con = await fetch(url)
//   let a = await con.json()
//   return a
// }

// setInterval(async function(){
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 5000)

//Q5
setInterval(async function(){
    document.querySelector("#first").classList.toggle("bulb")
  }, 500)