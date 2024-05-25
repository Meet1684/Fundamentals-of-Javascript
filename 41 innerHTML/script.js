console.log(document.getElementsByTagName("span")[0])//shows the element DOM tree
console.dir(document.getElementsByTagName("span")[0])//prints as an object with its properties

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

console.log(first.innerHTML)//Valid for element nodes only
console.log(first.innerHTML = "<i>Hey there this is italic tag</i>")

console.log(first.outerHTML)
console.log(first.outerHTML = "<div id=\"container\">span is now replaced with div</div>")

console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent)

// console.log(document.body.getElementsByTagName("div")[1].hidden = false)
// paste the above line in console