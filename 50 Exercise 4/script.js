// let a = new Date()
// let h = a.getHours()
// let m = a.getMinutes()
// let s = a.getSeconds()
// let d = a.getDate()

let time = document.getElementById("time")
setInterval(() => {
  let d = new Date()
  time.innerHTML = d.toString()
}, 1000)