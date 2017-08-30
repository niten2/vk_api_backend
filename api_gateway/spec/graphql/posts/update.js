import context from "test/app.test"
import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
chai.use(chaiHttp)

describe('Update PUT /person/:id', () => {

  let Model = context.models.Post
  let url
  let object

  let params = {
    "data": {
      "type": "posts",
      "attributes": {
        "name": "name",
        "body": "body",
      },
    },
  }

  beforeEach(async () => {
    await Model.remove({})
    object = await Model.createObject({
      name: "The Lord of the Rings",
      body: "The Lord of the Rings",
    })
    url = `/posts/${object._id}`
  })

  it('response', async () => {
    chai.request(context.app)
    .put(url)
    .send(params)
    .end((err, res) => {
      expect(res).to.status(200)
      expect(res.body).to.have.property('data').property("id")
      expect(res.body).to.have.property('data').property("attributes").property('name').eql(params.data.attributes.name)
      expect(res.body).to.have.property('data').property("attributes").property('body').eql(params.data.attributes.body)
    })
  })

})

