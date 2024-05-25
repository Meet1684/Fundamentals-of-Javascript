class Animal{
    constructor(name){
      this.name = name
    }
    eat(){
      alert("Eating")
    }
    get name(){
      return this._name
    }
    set name(newName){
      this._name = newName
    }
  
  }
  
  class Rabbit extends Animal{
    constructor(name){
      super()
      this.name = name
    }
  }
  
  let a = new Animal("Bruno")
  a.eat()
  let r = new Rabbit("Bruno")
  r.eat()
  
  console.log(a.name) // getter
  a.name = "Jack" //setter
  console.log(a.name) // getter
  
  //instanceof
  let c = 56
  console.log(a instanceof Animal)
  console.log(c instanceof Animal)
  console.log(r instanceof Animal)