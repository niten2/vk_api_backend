import Repl from "repl"
import App from "config/app"

const app = new App

let replServer = Repl.start({
  prompt: "Node > ",
})

replServer.context.app = app
replServer.context.models = app.models
replServer.context.context = app.this()

models.ItemTag.findAll().then(response => {
  console.log(response)
})

// models.Tag.findAll().then(response => {
//   console.log(response)
// })
