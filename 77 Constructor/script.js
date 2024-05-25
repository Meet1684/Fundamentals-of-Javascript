class railwayForm {
    constructor(givenname, trainNo) {
      console.log("Constructor called " + givenname + " " + trainNo)
      this.name = givenname
      this.trainNo = trainNo
    }
    submit() {
      alert(`${this.name} Your form for train:${this.trainNo} is submitted`)
    }
    cancel() {
      alert(`${this.name} Your form for train:${this.trainNo} is cancelled`)
      this.trainNo = 0
    }
  }
  
  let meetForm1 = new railwayForm("Meet", 783847)
  let meetForm2 = new railwayForm("Meet Shukla", 287364)
  
  meetForm1.submit()
  meetForm2.submit()
  meetForm2.cancel()