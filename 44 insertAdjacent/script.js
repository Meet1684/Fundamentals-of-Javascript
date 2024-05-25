let a = document.getElementById("first")

a.insertAdjacentHTML("beforebegin", "<div class=\"methods\">Using beforebegin</div>")
a.insertAdjacentHTML("afterbegin", "<div class=\"methods\">Using afterbegin</div>")
a.insertAdjacentHTML("beforeend", "<div class=\"methods\">Using beforeend</div>")
a.insertAdjacentHTML("afterend", "<div class=\"methods\">Using afterend</div>")
// a.remove()