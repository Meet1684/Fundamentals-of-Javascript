class Password {
    constructor() {
      console.log("Welcome")
      this.pass = ""
    }
    generatePassword(len) {
      let chars = "abcdefghijklmnopqrstuvwxyz"
      let nums = "0123456789"
      let specials = "!@#$%^&()"
      if (len < 3) {
        console.log("Your password should be atleast 3 characters long !")
      }
      else {
        let i = 0
        while (i < len) {
          this.pass += chars[Math.floor(Math.random() * chars.length)]
          this.pass += nums[Math.floor(Math.random() * nums.length)]
          this.pass += specials[Math.floor(Math.random() * specials.length)]
          i += 3
        }
        this.pass = this.pass.substr(0, len)
        return this.pass
      }
    }
  }
  
  let p = new Password
  len = prompt("Enter length of password")
  console.log(p.generatePassword(len))