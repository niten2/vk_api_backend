import Repl from "repl"
import App from "config/app"

var replServer = Repl.start({
  prompt: "Node > ",
})

let app = new App

replServer.context.app = app
replServer.context.models = app.models
replServer.context.context = app.this()

// User.findAll().then(response => {
//   console.log(response)
// })

