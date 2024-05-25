let game = true
let score = 0
let comscore = 0

while(game){
  let arr = ["S", "W", "G"]
  let rndmIndex = Math.floor(Math.random()*arr.length)
  let rndm = arr[rndmIndex]
  
  let userOption = prompt("Snake(S), Water(W) or Gun(G)")
  if(userOption=="S" && rndm=="W"){
    alert("You Won !")
    score++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption=="S" && rndm=="G"){
    alert("Computer Won !")
    comscore++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption=="W" && rndm=="S"){
    alert("Computer Won !")
    comscore++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption=="W" && rndm=="G"){
    alert("You Win !")
    score++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption=="G" && rndm=="S"){
    alert("You Win !")
    score++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption=="G" && rndm=="W"){
    alert("Computer Won !")
    comscore++
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else if(userOption==rndm){
    alert("Draw")
    console.log("")
    console.log("Your Score:"+score)
    console.log("Computer Score:"+comscore)
  }
  else{
    alert("Enter valid option")
  }
  game = confirm("Do you want to play again ?")
  console.clear()
}