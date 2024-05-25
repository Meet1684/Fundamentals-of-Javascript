console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.head.childNodes)
let arr = Array.from(document.body.childNodes)
console.log(arr)
console.log(document.body.childNodes[1].style.color = "red")
//element.childNodes[0]===element.firstChild
//element.childNodes[element.childNodes.length-1]===element.lastChild