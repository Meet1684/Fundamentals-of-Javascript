function loadScript(src, callback) {
    var script = document.createElement("script")
    script.src = src
    document.body.appendChild(script)
    script.onload = function() {
      callback(null, src);
      console.log("Hello")
    }
  }
  
  loadScript('https://code.jquery.com/jquery-3.3.1.slim.min.js', function hy(error, src) {
    if (error) {
      console.log(error)
    }
    console.log("Hy")
    loadScript('https://code.jquery.com/jquery-3.3.1.slim.min.js', function hy(error, src) {
      if (error) {
        console.log(error)
      }
      console.log("Hy2")
      loadScript('https://code.jquery.com/jquery-3.3.1.slim.min.js', function hy(error, src) {
        if (error) {
          console.log(error)
        }
        console.log("Hy3")
        loadScript('https://code.jquery.com/jquery-3.3.1.slim.min.js', function hy(error, src) {
          if (error) {
            console.log(error)
          }
          console.log("Hy4")
          })
      })
    })
  })