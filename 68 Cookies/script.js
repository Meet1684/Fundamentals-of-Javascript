console.log(document.cookie) //key value pairs delimited by semicolon(;)
document.cookie = "name=meet;" // This will add new cookie
document.cookie = "id=55;pw=1684; path=/dashboard;" //cookie after first semicolon will be ignored
let key = prompt("Enter key")
let value = prompt("Enter value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}` //backtick can be used in this case
console.log(decodeURIComponent("a%3B%3Bb")) //to decode the cookie
console.log(document.cookie)

document.cookie = "username=John Doe; expires=Tue, 02 May 2023 00:00:00 UTC"

// to delete the cookie, set the expires to past date