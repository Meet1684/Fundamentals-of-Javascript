let marks = [50, 67, 49, 34, 81, false, "Absent"]
console.log("Length of array : " + marks.length)
console.log("")

console.log(marks[3])
console.log("Using for in loop")
for (let i in marks) {
  console.log(marks[i])
  i++
}

console.log("")
marks[-2] = "Absent"
console.log(marks[6])
console.log(typeof marks)