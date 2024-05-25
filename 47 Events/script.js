let a = document.getElementsByClassName("container")[0]

a.onclick = () => {
  onclick = alert('hello')
  console.log('button pressed')
  a.innerHTML = "Only once !"
}