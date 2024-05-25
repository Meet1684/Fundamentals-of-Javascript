//Q1
document.getElementById("first_nav").style.color = "red"

//Q3
document.body.getElementsByClassName("navigation")[0].style.color = "green"
document.body.getElementsByClassName("navigation")[2].style.color = "green"

//Q4
Array.from(document.getElementsByTagName("li")).forEach((i)=>{
  i.style.background = "cyan"
})

//Q5
console.log("closest")