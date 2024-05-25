class Employee{
    login(){
      console.log(`Employee has logged in`)
    }
    logout(){
      console.log(`Employee has logged out`)
    }
    requestCoffee(x){
      console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
      console.log(`Emmployee has requested ${leaves} leaves`)
    }
    requestColdCoffee(x){
      console.log(`Employee has requested ${x} cold coffee`)
    }
  }
  
  class Programmer extends Employee{
    requestCoffee(x){
      super.requestColdCoffee(x)
    }
  }
  
  let e = new Employee()
  e.login()
  e.requestLeaves(3)
  e.requestCoffee(1)
  
  console.log("")
  
  let p = new Programmer()
  p.login()
  p.requestLeaves(3)
  p.requestCoffee(2)