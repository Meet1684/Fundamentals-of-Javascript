// try{
//   console.log(Data)
// }
// catch(error){
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }
// 
// try{
//   throw new ReferenceError("Please connect the database first !")
// }
// catch(error){
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }

let age = prompt("Enter your age")
age = Number.parseInt(age)

if(age>120){
  throw new Error("This can't be true")
}