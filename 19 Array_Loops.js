let num = [5, 4, 3, 2, 1]

console.log("Foreach loop")
num.forEach((element)=>{
  console.log(element)
})

console.log("For loop")
for(let i=0;i<num.length;i++){
  console.log(num[i])
}

console.log("For in loop")
for(let i in num){
  console.log(num[i])
  i++
}

console.log("For of loop")
for(let i of num){
  console.log(i)
  i++
}

let arr = Array.from(num)//Used to convert HTML Collection in array while DOM Manupalation
console.log(arr)