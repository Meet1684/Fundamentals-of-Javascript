// Array Methods

let a = [1, 2, 3, 34, 5]
let b = a.toString()
console.log(typeof b)

let c = a.join("-")
console.log(c)
let r = a.pop()//returns popped element
console.log(a, r)
let ad = a.push(4)//returns new array length
console.log(a, ad)

let num = [1, 2, 3, 4, 5, 9, 6, 70, 8, 9, 11]
let more_num = [19, 20, 18, 14, 13, 16, 17, 15, 11, 12]
num[7] = 7
delete num[5]
num.pop()
num.push(10)
console.log(num)
num.shift()
console.log("Shift first element")
console.log(num)
num.unshift(1)
console.log("unshift first element")
console.log(num)
console.log("Length:" + num.length)
more_num.sort()
let newArray = num.concat(more_num)
console.log("Large Array : " + newArray)
console.log("Reversed array:"+newArray.reverse())
console.log("")
console.log("")

let fruits = ["Mango", "Banana", "Kiwi", "Strawberry", "Grapes"]
let deleted = fruits.splice(1, 2, "Apple", "Pineapple")//replace elements
//array.splice(position, no of elements, element1, element2...)
console.log(fruits)
console.log(deleted)
console.log("")
console.log(fruits.slice(2))
console.log(fruits.slice(1,3))