let id1 = document.getElementById("id1")
console.log(id1)
let id2 = document.getElementById("id2")
console.log(id1.matches(".class"))
console.log(id1.matches(".box"))

console.log(sp1.closest("#id1"))
console.log(id2.closest(".container"))

console.log(id1.contains(sp1))
console.log(id1.contains(id2))