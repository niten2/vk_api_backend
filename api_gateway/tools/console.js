import Repl from "repl"
import App from "config/app"

const app = new App

let replServer = Repl.start({
  prompt: "Node > ",
})

replServer.context.app = app
replServer.context.models = app.models

models.ItemTag.findAll().then(response => {
  console.log(response)
})
