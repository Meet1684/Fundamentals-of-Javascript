//Q1
let url = ("https://kontests.net/api/v1/all")
let response = fetch(url)

response.then((value) => {
  return value.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (i in contests) {
    console.log(contests[i])
    ihtml += `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="https://www.shutterstock.com/image-vector/contest-lettering-text-banner-vector-260nw-692200720.jpg" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${contests[i].name}</h5>
    <p class="card-text">Start time : ${contests[i].start_time}</p>
    <p class="card-text">End time : ${contests[i].end_time}</p>
    <p class="card-text">Status : ${contests[i].status}</p>
    <a href="${contests[i].url}" class="btn btn-primary">Visit Link</a>
  </div>
</div>
`
  }
  document.getElementById("container").innerHTML = ihtml
})


//Notes
let n = localStorage.getItem("note")
alert("Your note is " + n)

let a = prompt("Enter your note")
if(a){
  localStorage.setItem("note", a)
}

let r = confirm("Do you want to delete your note ?")
if(r){
  localStorage.removeItem("note")
  alert("Note deleted")
}