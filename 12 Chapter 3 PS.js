//Q1
let marks = {
    harry: 98,
    rohan: 70,
    aakash: 7 // or 0o7
  }
  let n = Object.keys(marks).length
  const keys = Object.keys(marks)
  const values = Object.values(marks)
  for (i = 0; i < n; i++) {
    console.log(keys[i] + ":" + values[i])
  }
  console.log("")
  
  //Q2
  console.log("")
  for (let i in marks) {
    console.log(i + ":" + marks[i])
  }
  console.log("")
  
  //Q3
  console.log("")
  let cn = 55
  let g
  while (g != cn) {
    console.log("Try again")
    g = prompt("Enter correct number")
  }
  console.log("This is a correct number")
  console.log("")
  
  //Q4
  console.log("")
  function mean(a, b, c, d, e) {
    return (a + b + c + d + e) / 5
  }
  /*              or
  const mean = (a, b, c, d, e)=> {
    return (a + b + c + d + e)/5
  }
  */
  console.log(mean(47, 37, 41, 56, 39));