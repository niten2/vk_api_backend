// import { } from "helpers/promise"
import { UIStore } from 'stores'
import Notification from 'notification'
import { Deserializer, Serializer } from 'lib/serializer'

export async function PromiseLoadAll(model) {

    // var request = require('superagent');
    // request
    //   .get('/api/movies')
    //   .set('X-API-Key', 'foobar')
    //   .set('Accept', 'application/json')
    //   .end(function(err, res){
    //     console.log(res.body)
    //     // Calling the end function will send the request
    //   });

  // model.loadAll().then((resp) => {
  //   console.log(resp)
  // })


  UIStore.setLoading()
  let response = await model.loadAll()
  response.status == 401 ? UIStore.setFobbiden() : null
  UIStore.setLoaded()
}

export async function PromiseLoad(Model, id) {
  UIStore.setLoading()
  let response = await Model.load(id)
  UIStore.setLoaded()
  if (response.ok) {
    let object = await Deserializer(response.body)
    let attributes = Object.keys(Model.attributes)
    let result = {}
    attributes.map( (attribute) => { result[attribute] = object[attribute] })
    return result
  } else {
    return false
  }
}

// handlers
// onChange={(e) => handleSetState.bind(this)(e, post)}
export function handleSetState(e, object) {
  const { name, value } = e.target
  object[name] = value
  this.setState({ object })
}

// models
// <Button onClick={() => handleUpdateModel(Post, id, post, "post updated")}>
export async function handleUpdateModel(options = {}) {
  const Model = options.Model
  const attributes = options.attributes
  const message = options.message
  const object = Model.get(attributes.id)

  let response = await object.update(attributes)
  if (response.ok) { Notification.success(message) }
}

// <Button onClick={() => handleCreateModel(Post, post, "post save")}>
export function handleCreateModel(Model, name, attributes, message) {
  Model.create(name, attributes).then(response => {
    if (response.ok) {
      Notification.success(message)
    }
  })
}

// <Button onClick={()=>handeDelete(object, "Post destroy")} >
export function handeDelete(object, message) {
  object.destroy().then(response => {
    if (response.ok) {
      Notification.success(message)
    }
  })
}


// others

// onKeyPress={ UIStore.handleOnKeyPress.bind(this, this.handleSubmit) }
export function handleOnKeyPress(onAction, target) {
  target.charCode == 13 ?  onAction() : null
}
