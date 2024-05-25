class railwayForm {
    fill(givenname, trainNo) {
      this.name = givenname
      this.trainNo = trainNo
    }
    submit() {
      alert(`${this.name} Your form for train:${this.trainNo} is submitted`)
    }
    cancel() {
      alert(`${this.name} Your form for train:${this.trainNo} is cancelled`)
    }
  }
  
  let meetForm1 = new railwayForm()
  let meetForm2 = new railwayForm()
  
  meetForm1.fill("Meet", 783847)
  meetForm1.submit()
  meetForm2.fill("Meet Shukla", 287364)
  meetForm2.submit()
  meetForm2.cancel()