const hello1 = (name) => {
    console.log("Hello")
}

const hello2 = (name) => {
    console.log("Hello " + name)
}

// module.exports = hello1, hello2;
module.exports = {hello1, hello2}