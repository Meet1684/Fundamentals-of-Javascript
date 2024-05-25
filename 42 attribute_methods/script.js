let first = document.getElementById("1st")

console.log(first.getAttribute("class"))

console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
console.log(first.hasAttribute("id"))

console.log(first.setAttribute("hidden", "true"))
console.log(first.hasAttribute("hidden"))

console.log(first.setAttribute("class", "content main container"))
console.log(first.getAttribute("class"))
console.log(document.body.getElementsByClassName("container main content"))

console.log(first.removeAttribute("class"))
console.log(first.removeAttribute("hidden"))

console.log(first.attributes)
console.log(first.dataset)
console.log(first.dataset.game)//console.log(first.data-one)
console.log(first.dataset.lives)//console.log(first.dataset)