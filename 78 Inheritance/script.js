class Animal {
    run() {
      console.log("running")
    }
    hide() {
      console.log("hiding")
    }
  }
  
  class Monkey extends Animal {
    eat() {
      console.log("eating")
    }
  }
  
  ani = new Animal
  m = new Monkey
  
  ani.run()
  m.hide()
  m.eat()
  ani.eat()