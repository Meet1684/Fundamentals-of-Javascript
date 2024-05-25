let joke = document.getElementById("joke")

let arr = ["I'm so good at sleeping I can do it with my eyes closed!", "What do you call a fake noodle? An impasta.", "What happens when a strawberry gets run over crossing the street? Traffic jam.", "How does an octopus go into battle? Well-armed.", "What did the mama tomato say to the baby tomato? Catch up!", "What did the left eye say to the right eye? Between you and me, something smells.", "Where does Batman go to the bathroom? The batroom.", "What do you call a pig that does karate? A pork chop.", "What did one plate say to the other plate? Dinner's on me.", "Which is faster, hot or cold? Hot, because you can catch cold."]

let colors = ["red", "green", "blue", "pink", "white", "grey", "cyan"]

let randomIndex = Math.floor(Math.random()*arr.length)
let bgIndex = Math.floor(Math.random()*colors.length)

document.body.style.background = colors[bgIndex]
joke.innerHTML = arr[randomIndex]