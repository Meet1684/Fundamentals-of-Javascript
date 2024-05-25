let a = document.body.getElementsByTagName("div")[0]
a.innerHTML = a.innerHTML + "<h1>Using innerHTML</h1>"

let b = document.createElement("div")
b.innerHTML = "<i>append, appendChild & prepend</i>"

// document.body.append(b)
// a.appendChild(b)
// document.body.prepend(b)
// a.before(b)
// a.after(b)
// a.replaceWith(b)