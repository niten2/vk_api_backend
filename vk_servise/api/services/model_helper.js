export default (schema) => {

  schema.statics.createObject = async function(attributes) {
    let object = await new this(attributes)
    object = await object.save()
    return object
  }

  schema.statics.destroyObject = async function(id) {
    let object = await this.findById(id)
    await object.remove()
    return object
  }

  schema.statics.updateObject = async function(id, attributes) {
    let object = await this.findById(id)
    await object.set(attributes)
    await object.save()
    return object
  }

  return schema
}
