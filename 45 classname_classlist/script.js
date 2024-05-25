insidefirst.className="text-dark yellow"
first.className="text-dark red"

first.classList.remove("red")
first.classList.add("red")
insidefirst.classList.toggle("yellow")

let check1 = first.classList.contains("red")//return true
let check2 = insidefirst.classList.contains("yellow")//return false
console.log(check1)
console.log(check2)