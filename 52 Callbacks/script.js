//Asynchronus
// console.log("Start")
// setTimeout(function() {
//   console.log("Hey there")
// }, 3000)
// console.log("End")

// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = function() {
      console.log("Script loaded with src : "+src)
      callback(null, src)
    }
    script.onerror = function() {
      console.log("Error !"+src)
      callback(new Error("src got an error"))
    }
  }
  
  function hello(error, src){
    if(error){
      console.log(error)
    }
    console.log("Hello World")
  }
  
  function gm(error, src){
    if(error){
      console.log(error)
    }
    console.log("Good Morning" +src)
  }
  
  loadScript('//cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/botstrap.budle.min.js', gm);
  
  loadScript('https://code.jquery.com/jquery-3.3.1.slim.min.js', hello);