class Employee {
    constructor(name) {
      console.log(`${name} is here`)
    }
    login() {
      console.log(`Employee has logged in`)
    }
    logout() {
      console.log(`Employee has logged out`)
    }
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves) {
      console.log(`Emmployee has requested ${leaves} leaves`)
    }
    requestColdCoffee(x) {
      console.log(`Employee has requested ${x} cold coffee`)
    }
  }
  
  class Programmer extends Employee {
    // constructor(...args) { //created automatically if there is no constructor in child class
    //   super(...args)
    // }
    constructor(name){
      // this.name = name // throws an error if used before super
      super(name)// use of super is necessary
      console.log("Constructor of child class")
    }
    requestCoffee(x) {
      super.requestColdCoffee(x)
    }
  }
  
  let e = new Employee("No - one")
  e.login()
  e.requestLeaves(3)
  e.requestCoffee(1)
  
  console.log("")
  
  let p = new Programmer("John Doe")
  p.login()
  p.requestLeaves(3)
  p.requestCoffee(2)