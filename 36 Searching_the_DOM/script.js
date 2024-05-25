let fctitle = document.getElementById("firstcardtitle")
fctitle.style.color = "cyan"

let ctitles = document.getElementsByClassName("card-title")

let a = document.querySelectorAll(".card-title")
a[0].style.color = "blue"
a[1].style.color = "red"
a[2].style.color = "green"
console.log(a)

document.querySelector(".nav-link").style.color = "red"

let d = document.querySelectorAll(".nav-link")
for(let i=0;i<3;i++){
  d[i].style.color = "red"
}

for(let i=0;i<3;i++){
  d[i].style.background = "cyan"
}

document.getElementsByTagName("a")

document.body.querySelector(".card").getElementsByTagName("a")

document.querySelector(".nav-item").getElementsByTagName("a")

document.getElementsByName("search")