let arr = [3, 2, 1]
let a = arr.map((value, index, array)=>{  //returns a new array
  console.log(value, index, array)
  return value**2
})
console.log(a)//it will consist values which are returned from map()

let arr1 = [45, 23, 9, 5, 30]
let filtered = arr1.filter((a)=>{ //returns a filtered array
  return a<10
})
console.log(filtered)

let arr2 = arr1.reduce((h1, h2)=>{ //returns a value
  return h1+h2
})
/*             or
const reduce_func = (h1, h2) => {
  return h1+h2
}
let arr2 = arr1.reduce(reduce_func)
*/
console.log(arr2)