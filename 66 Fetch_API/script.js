let p = fetch("https://goweather.herokuapp.com/weather/Miami")
p.then((response) => {
  console.log(response.status)
  console.log(response.ok)
  return response.json() // Json object
  // return response.text() // String
}).then((response) => {
  console.log(response)
  // console.log(response.text())
  // console.log(response.json())
  // console.log(response.formData())
  // console.log(response.blob())
  // console.log(response.arrayBuffer())
})