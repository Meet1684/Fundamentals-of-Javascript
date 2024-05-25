console.log(console)
console.log("This is simple message")
console.info("This is important info")
console.warn("This is warning")
console.error("This is an error")
console.assert(5==85)
console.assert(5!=85)

console.time("obj")

obj = {a: 1, b: 2, c: 3}
console.table(obj)

console.timeEnd("obj")

console.time("For Loop")

for(let i=0;i<5;i++){
  i=Number.parseInt(i)
}

console.timeEnd("For Loop")