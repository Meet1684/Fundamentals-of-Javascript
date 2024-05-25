//Q1, Q2, Q4
class Complex {
    constructor(real, imaginary) {
      this.real = real
      this.imaginary = imaginary
    }
    add(num) {
      this.real = this.real + num.real
      this.imaginary = this.imaginary + num.imaginary
    }
    get real(){
      return this._real
    }
    get imaginary(){
      return this._imaginary
    }
    set real(newReal){
      this._real = newReal
    }
    set imaginary(newImaginary){
      this._imaginary = newImaginary
    }
  }
  
  let a = new Complex(2, 4)
  let b = new Complex(6, 2)
  a.add(b)
  console.log(`${a.real}+${a.imaginary}i`)
  
  console.log(a.real)
  console.log(b.imaginary)
  a.real = 5
  console.log(a.real)
  b.imaginary = 9
  console.log(b.imaginary)
  
  //Q3
  class Human{
    constructor(name, favFood){
      this.name = name
      this.favFood = favFood
    }
    walk(){
      console.log("Walking")
    }
  }
  
  class Student extends Human{
    walk(){
      console.log("Student walking")
      super.walk()
    }
  }
  
  let s = new Student("John", "Pizza")
  s.walk()
  
  console.log(s instanceof Human)
  console.log(s instanceof Student)