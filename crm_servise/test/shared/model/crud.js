import chai, { expect } from 'chai'

export default (options = {}) => {

  const Model = options.Model
  const fixture = options.fixture
  const attributes = options.attributes
  const update_attributes = options.update_attributes

  it('create', async () => {
    expect(await Model.find({})).to.be.empty
    let object = await Model.createObject(fixture)
    expect(object).to.have.property('_id')
    attributes.map( (field) => {
      expect(object).to.have.property(field).eql(fixture[field])
    })
    expect(await Model.find({})).to.exist
  })

  it('update', async () => {
    let object = await Model.create(fixture)
    let update_values = Object.values(update_attributes)
    object = await Model.updateObject(object._id, update_attributes)
    attributes.map( (field, index) => {
      expect(object).to.have.property(field).eql(update_values[index])
    })
  })

  it('destroy', async () => {
    let model = await Model.create(fixture)
    expect(await Model.find({})).to.be.exist
    await Model.destroyObject(model._id)
    expect(await Model.find({})).to.be.empty
  })

}
