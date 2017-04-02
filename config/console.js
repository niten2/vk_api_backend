import Repl from "repl"
import App from "./app.js"
// import User from "./models/user.js"

var replServer = Repl.start({
  prompt: "Node > ",
})

let app = new App
app.run()

replServer.context.app = app
replServer.context.models = app.models

// User.findAll().then(response => {
//   console.log(response)
// })

