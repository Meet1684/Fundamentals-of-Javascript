const createTODO = async (todo) => {
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo)
  }

  let response = await fetch("https://jsonplaceholder.typicode.com/posts/", options)
  let r = await response.json()
  return r
}

const getTODO = async (id) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
  let r = await response.json()
  return r
}

const mainFunc = async () => {
  let todo = {
    title: 'abc',
    body: '123',
    userId: 1,
  }
  let todor = await createTODO(todo)
  console.log(todor)
  let x = await getTODO(5)
  console.log(x)
}

mainFunc()