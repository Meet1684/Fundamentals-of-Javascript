let num = Math.floor(Math.random()*100)+1
num = Number.parseInt(num)
console.log(num)
var chance = 0
do{
  guess = prompt("Guess the number")
  guess = Number.parseInt(guess)
  chance++
  console.log("")

  if(guess<num){
    console.log("Number is less than your guess")
    console.log("")
  }
  else if(guess>num){
    console.log("Number is greater than your guess")
    console.log("")
  }
  else if(guess==num){
  console.log("Correct Number:"+num)
  console.log("Score:"+(100-chance))
 }
}while(guess!=num)