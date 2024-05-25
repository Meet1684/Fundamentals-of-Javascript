const sayHello = (name) => {
    console.log("Hello" + " " + name);
    alert("Welcome");
  }
  
  const x = {
    name: "Meet Shukla",
    role: "FSW Developer",
    id: 55,
    show: function(){
      setTimeout(()=>{
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Meet")
  // console.log(x.name, x.role, x.id)
  x.show()