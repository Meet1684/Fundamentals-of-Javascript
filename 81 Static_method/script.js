class Animal {
    constructor(name) {
      this.name = name
    }
    walk() {
      console.log("Animal " + this.name + " is walking")
    }
    static capitalize(){
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal.capitalize("jack") // Static methods are always used with class reference
  // j = new capitalize("jack") // This will throw an error
  j.walk()