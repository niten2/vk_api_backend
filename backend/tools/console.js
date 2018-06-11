import Repl from "repl"
import * as models from "app/models"

let replServer = Repl.start({
  prompt: "Node > ",
})

replServer.context.models = models

models.VkPerson.findAll({
  where: {
    user_id: 1,
    isFriend: false,
    deactivated: false || null,
  }
}).then(res => {
  console.log(11111111)
  console.log(res)
  console.log(11111111)
})
