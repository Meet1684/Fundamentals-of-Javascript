let name = "Balvant Kumar"
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(0, 7))
console.log(name.slice(8))
let myname = "Meet"
console.log(name.concat(" is friend of ", myname))
name = "           Balvant Kumar            "
name = name.replace("Kumar", "Kuswaha")
name = name.trim()

console.log(name[0])
console.log(name[1])
console.log(name[5])
console.log(name[8])
console.log(name[4])

for(let i=0;i<name.length;i++){
  console.log(name[i])
}
console.log("")
for(let i of name){
  console.log(i)
  i++
}