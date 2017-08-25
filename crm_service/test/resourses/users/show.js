import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('Show GET posts/:id', () => {

  const Model = context.models.Post
  let url
  let object

  beforeEach(async () => {
    await Model.remove({})
    object = await Model.createObject({ name: "The Lord of the Rings", body: "body" })
    url = `/posts/${object.id}`
  })

  it('response', () => {
    chai.request(context.app)
    .get(url)
    .end((err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').property("id")
      expect(res.body).to.have.property('data').property("attributes").property('name').eql(object.name)
      expect(res.body).to.have.property('data').property("attributes").property('body').eql(object.body)
    })
  })

})


